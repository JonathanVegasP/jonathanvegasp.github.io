'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "42cc9c1c9c1d718ec797cf895bb18539",
"/assets/FontManifest.json": "efbfa9ffa50b1c975d51caf3f06397ea",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"/assets/images/logo.jpg": "0fcd361109a57cedc4cc631910eb5332",
"/assets/images/photo.jpg": "5658e3360fc38789d36179b873f49652",
"/assets/LICENSE": "a605d43f1a110ad255f4664bf07b93ab",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/favicon.png": "0cf76875424d1cbf7559112a4e9ca3f2",
"/icons/icon-192.png": "0773157206b005e9ae000591aa22693c",
"/icons/icon-512.png": "b839e27d63c90524f9c16ec0cabab5c1",
"/index.html": "03a19da1d59b1525934b4474d0edd4c0",
"/main.dart.js": "c156de91dddada66cb8509b0350a190b",
"/manifest.json": "eeff0175cf04c70f85e12131ac176bbd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
