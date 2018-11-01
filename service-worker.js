importScripts("/precache-manifest.afe5782d3af6567dc84c1035ea408729.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "pwaDemo"});

workbox.skipWaiting();
workbox.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /(.*)\.(?:png|gif|jpg)/,
  workbox.strategies.cacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 12 * 60 * 60, // 12 Hours 
      })
    ]
  })
);

workbox.routing.registerRoute(
  /^https:\/\/newsapi.org\//, 
  workbox.strategies.networkFirst(),
  'GET'
);
