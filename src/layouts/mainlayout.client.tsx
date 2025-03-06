import { cn } from "@cloudeats/robin-components";
import { Header } from "@components/Header";
import { useFlags } from "launchdarkly-react-client-sdk";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

const subscribeUser = (subscription: PushSubscription) => {
  console.log("Subscribing user with:", subscription);

  // In a real app, you would send this subscription to your server
  // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify(subscription) })

  // For demo purposes, we'll just store in localStorage
  localStorage.setItem("push-subscription", JSON.stringify(subscription));

  return { success: true };
};

const unsubscribeUser = () => {
  console.log("Unsubscribing user");

  // In a real app, you would notify your server
  // Example: await fetch('/api/unsubscribe', { method: 'POST' })

  // For demo purposes, we'll just remove from localStorage
  localStorage.removeItem("push-subscription");

  return { success: true };
};

const sendNotification = (message: string) => {
  console.log("Sending notification with message:", message);

  // In a real app, you would send this to your server to trigger a push notification
  // Example: await fetch('/api/send-notification', { method: 'POST', body: JSON.stringify({ message }) })

  // For demo purposes, we'll simulate a notification using the Notification API
  if (Notification.permission === "granted") {
    console.log("SENDING NOTIF")
    const notif = new Notification("Test Notification", {
      body: "HEEEELLLOOO",
      icon: "/pwa-192x192.png",
      requireInteraction: true
    });
  }

  return { success: true };
};

// Helper function to convert base64 to Uint8Array for VAPID key
function urlBase64ToUint8Array(base64String: string) {
  // Make sure we have a string
  if (!base64String) {
    throw new Error("VAPID public key is missing or empty");
  }

  try {
    // Some VAPID public keys might have whitespace or be formatted differently
    const normalizedKey = base64String.trim();
    const padding = "=".repeat((4 - (normalizedKey.length % 4)) % 4);
    const base64 = (normalizedKey + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
  } catch (error) {
    console.error("Error converting VAPID key:", error);
    throw new Error("Invalid VAPID public key format");
  }
}

const MainLayout = () => {
  const { configTheme } = useFlags();
  const [message, setMessage] = useState("HELLO");
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  );
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  const registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
      });

      // Check if already subscribed
      const sub = await registration.pushManager.getSubscription();
      setSubscription(sub);
      console.log("SUB: ", sub);

      console.log("Service Worker registered successfully");
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  };

  const subscribeToPush = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          "BOpVx8suNjpGBwTG1wzjf9UVtmsqIH33gcA42b9yUJm0XujYjJ2aOMbH0LVJc6bOT6xvj4CcakJI6iaGUA-Lg30"
        ),
      });

      setSubscription(sub);
      const serializedSub = JSON.parse(JSON.stringify(sub));
      await subscribeUser(serializedSub);
    } catch (error) {
      console.error("Failed to subscribe to push notifications:", error);
    }
  };

  const unsubscribeFromPush = async () => {
    try {
      if (subscription) {
        await subscription.unsubscribe();
        setSubscription(null);
        await unsubscribeUser();
      }
    } catch (error) {
      console.error("Failed to unsubscribe from push notifications:", error);
    }
  };

  const handleSendNotification = async () => {
    console.log("HELLO")
    if (message.trim() && subscription) {
      console.log("HELLO323232")
      await sendNotification(message);
      setMessage("");
    }
  };

  useEffect(() => {
    // Check if push notifications are supported
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }

    // Check if app is installed
    setIsInstalled(window.matchMedia("(display-mode: standalone)").matches);

    // Check if device is iOS
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );
  }, []);

  return (
    <div className={cn("h-screen", configTheme)}>
      <Header />
      <button onClick={handleSendNotification} disabled={!message.trim()}>
        Send
      </button>
      <button onClick={subscribeToPush}>Subscribe</button>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
