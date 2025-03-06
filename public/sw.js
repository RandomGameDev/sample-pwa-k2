// Service Worker for PWA with Push Notifications

const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = ["/manifest.json", "/pwa-192x192.png", "/pwa-512x512.png"];

// Install event - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
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

// Push event - handle incoming push notifications
self.addEventListener("push", (event) => {
  console.log("PUSH EVENT RECEIVED")
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || "/pwa-192x192.png",
      badge: "/pwa-192x192.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "1",
      },
      actions: [
        {
          action: "explore",
          title: "View",
          icon: "/icons/checkmark.png",
        },
        {
          action: "close",
          title: "Close",
          icon: "/icons/xmark.png",
        },
      ],
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Notification click event - handle user interaction with notification
// self.addEventListener("notificationclick", (event) => {
//   event.notification.close();

//   if (event.action === "explore") {
//     // Handle the "View" action
//     event.waitUntil(clients.openWindow("/"));
//   }
//   // If no action or "close" action, just close the notification
// });
