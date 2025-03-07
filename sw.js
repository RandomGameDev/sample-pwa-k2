// Service Worker for PWA with Push Notifications

const CACHE_NAME = "pwa-cache-v2";
const urlsToCache = [
  "/",
  "/vite.svg",
  "/manifest.json",
  "/pwa-192x192.png",
  "/pwa-512x512.png",
  "/icons/check.png",
  "/icons/close.png",
];

// Install event - cache assets
self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");

  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("message", (event) => {
  console.log("Service Worker received message:", event.data);

  if (event.data) {
    console.log("Simulating push event with data:", event.data.payload);

    // Create a simulated push event
    const notificationData = event.data.payload;

    const options = {
      body: notificationData.body,
      icon: notificationData.icon || "/pwa-192x192.png",
      badge: "/pwa-192x192.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "1",
        url: self.location.origin,
      },
      actions: [
        {
          action: "explore",
          title: "View",
          icon: "/icons/check.png",
        },
        {
          action: "close",
          title: "Close",
          icon: "/icons/close.png",
        },
      ],
      requireInteraction: true,
    };
    notifyClients(notificationData);

    // This is the line the user wants to trigger
    self.registration.showNotification(notificationData.title, options);
  }
});

const notifyClients = (data) => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
      type: "window",
    })
    .then((clients) => {
      if (clients && clients.length) {
        // Send a message to all clients
        clients.forEach((client) => {
          client.postMessage({
            type: "PUSH_RECEIVED",
            payload: data,
          });
        });
      }
    });
};

// Push event - handle incoming push notifications
self.addEventListener("push", (event) => {
  console.log("Push event received:", event);

  let notificationData = {
    title: "New Notification",
    body: "You have a new notification",
    icon: "/pwa-192x192.png",
  };

  try {
    if (event.data) {
      notificationData = JSON.parse(event.data.text());
    }
  } catch (error) {
    console.error("Error parsing push data:", error);
  }

  const options = {
    body: notificationData.body,
    icon: notificationData.icon || "/pwa-192x192.png",
    badge: "/pwa-192x192.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "1",
      url: self.location.origin,
    },
    actions: [
      {
        action: "explore",
        title: "View",
        icon: "/icons/check.png",
      },
      {
        action: "close",
        title: "Close",
        icon: "/icons/close.png",
      },
    ],
    requireInteraction: true,
  };

  notifyClients(notificationData);
  event.waitUntil(
    self.registration.showNotification(notificationData.title, options)
  );
});

// Fix the notificationclick event handler to use self.clients instead of clients
self.addEventListener("notificationclick", (event) => {
  console.log("Notification clicked:", event);

  event.notification.close();

  // This looks to see if the current is already open and focuses if it is
  event.waitUntil(
    self.clients
      .matchAll({
        type: "window",
        includeUncontrolled: true,
      })
      .then((clientList) => {
        // If we have a matching client, focus it
        for (const client of clientList) {
          if (client.url === event.notification.data.url && "focus" in client) {
            return client.focus();
          }
        }
        // Otherwise, open a new window
        if (self.clients.openWindow) {
          return self.clients.openWindow(event.notification.data.url || "/");
        }
      })
  );
});
