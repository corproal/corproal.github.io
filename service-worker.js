importScripts("/precache-manifest.f259d33fe15d46a4491a3a330b0eb28b.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");
//importScripts('https://unpkg.com/workbox-broadcast-cache-update@2.0.3/build/importScripts/workbox-broadcast-cache-update.prod.v2.0.3.js');

//const testFetchUrl = 'http://192.168.56.102:7010/api/1/user/comment/get/tabList';
//const cacheName = 'workbox-broadcast-cache-update-example';

//const broadcastCacheUpdate =
//  new workbox.broadcastCacheUpdate.BroadcastCacheUpdate({
//  channelName: 'test-fetch-updates',
//  headersToCheck: ['date'],
//  source: 'broadcast-cache-update-example',
//});

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

workbox.routing.registerRoute(
  /^https:\/\/reqres.in\//, 
  workbox.strategies.networkFirst(),
  'POST'
);

workbox.routing.registerRoute(
  /^http:\/\/192.168.56.102:7010\//, 
  workbox.strategies.staleWhileRevalidate(),
  'GET'
);

self.addEventListener('notificationclose', function(event) {
  var notification = event.notification;
  var primaryKey = notification.data.primaryKey;
  console.log('Closed notification: ' + primaryKey);
});

//const testFetchHandler = async () => {
//  const networkResponse = await fetch(testFetchUrl);
//  const cache = await caches.open(cacheName);
//  const cacheResponse = await cache.match(testFileUrl);
//
//  if (cacheResponse) {
//    broadcastCacheUpdate.notifyIfUpdated({
//      first: cacheResponse,
//      second: networkResponse,
//      url: testFetchUrl,
//      cacheName,
//    });
//  }
//
//  await cache.put(testFetchUrl, networkResponse.clone());
//
//  return networkResponse;
//};

//self.addEventListener('fetch', (event) => {
//  if (event.request.url === testFetchUrl) {
//    event.respondWith(testFetchHandler());
//  }
//});

