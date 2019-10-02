/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/position.css",
    "revision": "a678fd313dacb0e8b569178e6d8936cb"
  },
  {
    "url": "css/style.css",
    "revision": "1907a3f52bd55ee4804c65e754e800b7"
  },
  {
    "url": "css/stylisation.css",
    "revision": "a72fa9b7db8e160f1b4ff91844768b26"
  },
  {
    "url": "images/dislike.svg",
    "revision": "a0eb004449fabd2b2c55564ed68f5a8b"
  },
  {
    "url": "images/leaf.svg",
    "revision": "d9db1d4246f08cc2aa943028cdc5db43"
  },
  {
    "url": "images/like.svg",
    "revision": "d654ce194e0660d047d6913124f8d562"
  },
  {
    "url": "images/menu.svg",
    "revision": "597d55c7cb03e1062ab7677d83e35917"
  },
  {
    "url": "images/menu2.svg",
    "revision": "3a900fca7258b90b1f2c93645123db11"
  },
  {
    "url": "images/pollution-plastique.jpg",
    "revision": "da68de708908720f19e5d3a1448bc323"
  },
  {
    "url": "images/pollution-ville.jpg",
    "revision": "c0b563527330529c36e480d9dd54dfb0"
  },
  {
    "url": "index.html",
    "revision": "ee75dc601abeac45aa9db423d6cde1d8"
  },
  {
    "url": "js/main.js",
    "revision": "2c6059693623f14ab1d0210eee8f3105"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
