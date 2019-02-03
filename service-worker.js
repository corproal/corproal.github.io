importScripts("/precache-manifest.a7e071e8270aefb94d76d90dfe90c1eb.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "d2puser_pwa"});

workbox.skipWaiting();
workbox.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /(.*)\.(?:png|gif|jpg)/,
  workbox.strategies.cacheFirst({
    cacheName: 'd2puser_pwa_images',
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

workbox.routing.registerRoute(
  /^https:\/\/www.ldmedy01.tk\//, 
  workbox.strategies.staleWhileRevalidate(),
  'GET'
);


