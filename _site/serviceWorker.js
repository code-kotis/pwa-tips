//Cache polyfil to support cacheAPI in all browsers
importScripts("./cache-polyfill.js");

var cacheName = "cache-v4";

//Files to cache
var files = [
  "/",
  "/css/main.css",
  "/js/main.js",
  "/js/menu.js",
  "/images/icons/android-chrome-192x192.png",
  "/images/icons/android-chrome-512x512.png",
  "/images/engaging.png",
  "/images/fast.png",
  "/images/reliable.png",
  "/images/pwa-codelabs.png",
  "/images/menu_black.svg",
  "/manifest.json"
];

//Adding `install` event listener
self.addEventListener('install', (event) => {
  console.info('Event: Install');
  
  self.skipWaiting(); //To forces the waiting service worker to become the active service worker

  event.waitUntil(
    caches.open(cacheName)
    .then((cache) => {
      //[] of files to cache & if any of the file not present `addAll` will fail
      return cache.addAll(files)
      .then(() => {
        console.info('All files are cached');
        return self.skipWaiting(); //To forces the waiting service worker to become the active service worker
      })
      .catch((error) =>  {
        console.error('Failed to cache', error);
      })
    })
  );
});

/*
  FETCH EVENT: triggered for every request made by index page, after install.
*/

//Adding `fetch` event listener
self.addEventListener('fetch', (event) => {
  console.info('Event: Fetch');

  var request = event.request;

  //Tell the browser to wait for newtwork request and respond with below
  event.respondWith(
    //If request is already in cache, return it
    caches.match(request).then((response) => {
      if (response) {
        return response;
      }

      //if request is not cached, add it to cache
      return fetch(request).then((response) => {
        var responseToCache = response.clone();
        caches.open(cacheName).then((cache) => {
            cache.put(request, responseToCache).catch((err) => {
              console.warn(request.url + ': ' + err.message);
            });
          });

        return response;
      });
    })
  );
});

/*
  ACTIVATE EVENT: triggered once after registering, also used to clean up caches.
*/

//Adding `activate` event listener
self.addEventListener('activate', (event) => {
  console.info('Event: Activate');

  //Remove old and unwanted caches
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map((cache) => {
        if (cache !== cacheName) {
          return caches.delete(cache); //Deleting the old cache
        }
      })
    ))
    .then(() => {
      console.log('Old caches are cleared!');
      return self.clients.claim(); 
    })
  );
});
