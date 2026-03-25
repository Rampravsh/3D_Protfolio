const CACHE_NAME = 'portfolio-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Basic offline cache
      return cache.addAll([
        '/',
        '/index.html',
        '/icon-192x192.png',
        '/icon-512x512.png',
        '/manifest.json'
      ]).catch(err => console.error("Cache failed: ", err));
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        return caches.match('/index.html');
      });
    })
  );
});
