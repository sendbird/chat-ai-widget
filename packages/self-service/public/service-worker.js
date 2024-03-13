const CACHE_KEY = 'ai-widget-cache';
const urlsToCache = [
  '/index.js',
];

// Install Service Worker: open the cache and add necessary resources.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_KEY)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

/**
 * 1. Search for a cached response for the request.
 * 2. If the cache exists, fetch the response from the server for that request.
 * 3. Compare the Last-Modified header of the fetched response with the cached response.
 * 4. If the server's response is more recent, store the new response in the cache and return it to the client.
 * 5. If the server's response is the same as the cached version or invalid, return the cached response.
 * 6. If there is no cached response, fetch the new response from the network, store it in the cache, and then return it.
 */
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return the cached response if found.
        if (response) {
          // Clone the fetch request to reuse it
          const fetchRequest = event.request.clone();
          return fetch(fetchRequest).then(
            (fetchResponse) => {
              // Check if we received a valid response
              if(!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                return response; // Return cached version
              }

              // Compare Last-Modified headers
              const lastModifiedFromServer = fetchResponse.headers.get('Last-Modified');
              const lastModifiedInCacheStorage = response.headers.get('Last-Modified');

              if (lastModifiedInCacheStorage === lastModifiedFromServer) {
                // Cached version is up-to-date.
                return response;
              } else {
                // Update the cache with the newer version.
                const responseToCache = fetchResponse.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, responseToCache);
                  });

                return fetchResponse;
              }
            }
          );
        } else {
          // Perform a network request and cache the response.
          return fetch(event.request).then(
            (response) => {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              // Clone the response to cache it
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });

              return response;
            }
          );
        }
      })
  );
});


// Update Service Worker: delete old caches.
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_KEY];
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
