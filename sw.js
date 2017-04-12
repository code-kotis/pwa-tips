importScripts('sw-lib.v0.0.18.min.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method cacheRevisionedAssets() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use sw-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/2017/04/04/Issue-1.html",
    "revision": "f021fa1c2f0b39b2b05ca43f170b56ec"
  },
  {
    "url": "/2017/04/11/Issue-2.html",
    "revision": "b21fb91406c2d7eba4abb6cb523ce2db"
  },
  {
    "url": "/404.html",
    "revision": "654de47775fc221c5e783dd6f7df044a"
  },
  {
    "url": "/archives.html",
    "revision": "5448ccdb303fcff6b1757c869d9fc779"
  },
  {
    "url": "/css/archives.css",
    "revision": "f6958fb798d3df57c41b18bafbea2512"
  },
  {
    "url": "/css/base.css",
    "revision": "5195f6a38e5b35d8acf5f11f5e1d65fa"
  },
  {
    "url": "/css/issues.css",
    "revision": "73ae79ce8c4ab22c5c280e6a4b2ac15c"
  },
  {
    "url": "/css/main.css",
    "revision": "4a726ce9502017fb68e06acf5cbb2101"
  },
  {
    "url": "/css/menu.css",
    "revision": "fd99f071408f5ff4c29de3faa198c280"
  },
  {
    "url": "/css/modal.css",
    "revision": "d91f766c5d64913352bfc34fdbdf08f4"
  },
  {
    "url": "/css/opensources.css",
    "revision": "fc12b6482842758c3b72c88ccdd81913"
  },
  {
    "url": "/css/reset.css",
    "revision": "7e9de0bae21fd193dd472c0d6f549a06"
  },
  {
    "url": "/css/toast.css",
    "revision": "fc3dfe3dc3bbb224a3a95849f583ac92"
  },
  {
    "url": "/favicon.ico",
    "revision": "06585e25a4e84098cb8dbcb75aa82a70"
  },
  {
    "url": "/images/banner.png",
    "revision": "0c7f1b0bf784a9138327951fae613ed3"
  },
  {
    "url": "/images/engaging.png",
    "revision": "f996517995fb7b9bac65587a3bbfc049"
  },
  {
    "url": "/images/fast.png",
    "revision": "4d3919c4f1630820874c225e4b530ee6"
  },
  {
    "url": "/images/icons/android-chrome-192x192.png",
    "revision": "82bc271f22740691fd42471e0de00498"
  },
  {
    "url": "/images/icons/android-chrome-512x512.png",
    "revision": "783c26ec29338744f8387e47d68b81de"
  },
  {
    "url": "/images/icons/apple-touch-icon.png",
    "revision": "82f9354661134ebca5df90614871ae97"
  },
  {
    "url": "/images/icons/banner.png",
    "revision": "6ba512e9b05e77acf246c867831bf1fa"
  },
  {
    "url": "/images/icons/favicon-16x16.png",
    "revision": "e6a881a6518032a908e91fcc1ff61eff"
  },
  {
    "url": "/images/icons/favicon-32x32.png",
    "revision": "415e3ba47c69d584850c843f673fd35b"
  },
  {
    "url": "/images/icons/favicon.ico",
    "revision": "06585e25a4e84098cb8dbcb75aa82a70"
  },
  {
    "url": "/images/icons/mstile-150x150.png",
    "revision": "9e66ab59303ff4369b4084454194422b"
  },
  {
    "url": "/images/issues/april-2017-2.png",
    "revision": "cd29adc0f8abfef4eeebde82133e83d7"
  },
  {
    "url": "/images/issues/april-2017.png",
    "revision": "fc83c78ec6d3a9b64879c4fd4c6ef722"
  },
  {
    "url": "/images/menu_black.svg",
    "revision": "d346927b079c06d3a5364e5a8dd9a62c"
  },
  {
    "url": "/images/pwa-codelabs.png",
    "revision": "99ffcb4fd39c407d4e8d4caa6b7ac01a"
  },
  {
    "url": "/images/reliable.png",
    "revision": "42fb8def018bb3f80a3805226383a57f"
  },
  {
    "url": "/index.html",
    "revision": "17d5e2c3215c90b273fb4a3307830701"
  },
  {
    "url": "/js/main.js",
    "revision": "badc9b00526e20846388078c4fa0e5e8"
  },
  {
    "url": "/js/menu.js",
    "revision": "aba5e0ac92bedd7ce29db702399dbdf5"
  },
  {
    "url": "/manifest.json",
    "revision": "4a6161a5ac1a974527ecd45a6a243528"
  },
  {
    "url": "/opensources.html",
    "revision": "3367951e50f12545f76ac93aa6436ec3"
  }
];

self.goog.swlib.cacheRevisionedAssets(fileManifest);
