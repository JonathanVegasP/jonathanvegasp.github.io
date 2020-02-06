'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "4f10ddc3fa40743a001aedf22fb1613a",
"/assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/images/bg.jpg": "7d391a39c06d206a290f98c67d960f33",
"/assets/images/logo.png": "901d520264ad857036b79948cd64ba86",
"/assets/LICENSE": "26147adb53f643c068e8f556c4203afd",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "ad077d0397ee554626d7278f1f3398c4",
"/main.dart.js": "d3770381e63892200cfe90f1f082033b",
"/manifest.json": "93ab866980272c9af7e2540e8c70a198"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
