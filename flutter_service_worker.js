'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b22cb184c5a56569be6e52b33cd3eac5",
".git/config": "739fc2655fc2135c7402162e0a7f509e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8106fb0d10509b7bcfc838a66981ae8a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "193e3dfacb40d969d4b4dd6956c23bda",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "614056fcd6041c8e1654c55f46504af0",
".git/logs/refs/heads/main": "4295ab93014f33bab7bbda96798d2261",
".git/logs/refs/remotes/origin/main": "5d008113d6670bb569e3bed553eef219",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/c293c6fd592d03ae3a9307cbda197cdb2667f6": "efd12d287b016614a8c78a56a3b4543e",
".git/objects/0f/848aedcca1757b2bb2ae5fc7f446ee6acc03d8": "852424c5f2253c07f3a976b81336597c",
".git/objects/12/cc5c82520bcd8dcd6ab9535fd70d339d5cfde3": "72826228b0d087ea2cc9c1295e47023f",
".git/objects/15/99ebdb5caa25449b5b1481cd2eaa1522085bd4": "36a828a98bc01c2700678cdc8196583a",
".git/objects/1a/463e18244e8a9a8219eb5776c8ba06d53d839e": "108cac549eb6905b440a3832e5bccf33",
".git/objects/30/025a76d406f72fa9b8c32243d5ad9dba68da8d": "101fb174965edaa5296176fd944dabb2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b23fca86d57f155a4d321cd6f9e5d143f6c334": "cc28bc6bcd1dbaa926f6d122cc18e418",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/37/99bdf7cb1d254e349aed54b7ca2fbbbd8b52fa": "22729523e08a08fd6e8598c389e4afb7",
".git/objects/3b/3e0078017d6dd5ea8fe18266ff2cf8105e97f5": "600f5dedf009793cbe7c19d71fbdac81",
".git/objects/3b/3f1436c218b0a2a0bc035f52602863435eda6b": "6a49af94b657d61ecbfaf3143c36add2",
".git/objects/44/74103d78ec5dab37b0ae71f89dcb04fa873059": "d4c9be394741ae484298517b53b57f8c",
".git/objects/45/b1037a8789723327d42a1a4a68f580f904b6d9": "ccddc476c02fd3058324caab807e63da",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/c79cf76b74bbc05941e6f7a3dd6f6c0f52eef6": "45412158ec87fa32f94a1e2febfb46ee",
".git/objects/55/8db697c376765a3c443632f489934ce25bb797": "c5bc7ba2e7d5782ee81468393df0bbec",
".git/objects/56/c39f8cadd6160038b7746fa69a919058246ce0": "ca463347c0f060d15ff8b9b8b0ed166a",
".git/objects/57/fc397c74ec2f036a6ed94ffccd1746af9c2360": "d8079259e8f91982945942febb803904",
".git/objects/58/89b6d0b245d56a3a166323f76b9c7b1b879fda": "444c9372fcd1df4e3f7b28810ef43cff",
".git/objects/59/22bd4c29cf763cfb0e130b14b14ea3acaf45d2": "26a31ed90a459608601b27904757b56a",
".git/objects/5b/54189536b633a9eea9c0c17e0a9d21cee18439": "62052997e448402726431dd5c948ca91",
".git/objects/66/4fd14e4a50495ccc1758a1c3dbc064e31e9bb7": "2ed4cb79b3ea64b30663165094d988e3",
".git/objects/67/3312322e243db90be82d08720a223fb2c91cac": "1c52c7ffa6894d214d654590fcecbb5c",
".git/objects/69/700bf54c867a81014062eae10df06b19f78835": "9677ebc0d55730d640c76dccb9a4fc65",
".git/objects/6c/5dff41596e9e4b4682450a03a815d086f6ef7f": "7f71e4f1465d888235fc320d069c7942",
".git/objects/6f/44244b852cb6629700366960cce616e08aba04": "1f076e8d4a4f4b8fe664ea6327a992ba",
".git/objects/71/73270f27f025a3a55c95bac0ae9deb97b07175": "f82430829adeb391239deef5c46462f4",
".git/objects/74/c3531ada137578a4cd8a5eaef44c4f5f1c940b": "04953c003c27bea83aebb6d866c8b46d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/0a07648765cbc73c39ac16c68457ac3a4f4374": "261f3d537de94adeae0b023d0edd6cbb",
".git/objects/7c/4c0b935f0b8267bd588fc566a694db37f56e1d": "e015b528f076f8952f57e570ed959e14",
".git/objects/80/3246396756cee345d7d3c32f79d862a4d45baa": "d5b12c5b69b0e5f60d4744ff7420c4f9",
".git/objects/82/094ac70e7ff8d76049f5423b04a4a7be0b75f4": "6e7ab40bff6b3915517cfbf5730d8fe5",
".git/objects/83/187de59a9719fdd7490f955036edaf2950426d": "23599d559ed92b9ec5c604e0333310be",
".git/objects/84/1099c82936058e34a5b42f433f927718f764af": "f603d6983f8219e65857d2c4eae86e5c",
".git/objects/84/ab830178493926e96b49d8fca368ac3cf10120": "58fcaab4994e2807c176ee8488fadd9d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fd1083b1d7aa1bab159700d4c36987e027cf8d": "87cb75436c87b4648ba4cdd582116978",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/91/b73a0568d755a1595586a233b938ee39c199ad": "0df2df698021c79b822ce8d8f9210fd9",
".git/objects/99/21bf31a31c616f13d1c1d9c1ba2f1fe8bdf2ed": "143aba5dae8f85096cde7fc31eb80733",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9d/79456b29a10597ca3a2c509480a04626616f9b": "e74d612e23c021a52401375ad38a5db6",
".git/objects/9d/99cd52fa3230fddc604af8fd5eac1f00ceebd5": "5b3f6e155769cabaa3e36ec5c4179d11",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/2db7bbd79778b6b666fe2d61e9994559f61c57": "bff5210b6a858aaa4145d89c166e70fa",
".git/objects/a6/fbccf7ff9c0f39efa1269e3558129bfa8b186f": "66e4331b14ffb34c386b66ca074be08e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/e1a9a2133b4455bd05f95c11e919de68771691": "8ee74d06560ddeb4ef6146908935e486",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/d9e3b1701d19c81d8511cacc8da50703455eb0": "e6452941229ed72e3cc8116cf0ea4cd1",
".git/objects/ce/f2c932b10cf73940deb5ec958cf2c65cd890f1": "70b68240ebf821ad3d31d8e42d182970",
".git/objects/d2/7eaa5c5b6e5735fcb8d879c7b394b23d53e4b6": "c124416f86f3ade40fe720df3589e21d",
".git/objects/d4/dd0d6247a2f75f70519b1abeec42932f66aec1": "c6017311712b2eb080bc04475bc628be",
".git/objects/d5/a96fe9b11a3b972bf9476e6ec12a9522d8faa2": "22775c2571660649d1b2bb7a5a29203d",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/da/21e3701c963c5dd66c12343d45af7480aee7f0": "88450ffe8d2790ec785c38ec466a6bc3",
".git/objects/dd/3af953a3d317bdc8d862f8c769d019d07f97ea": "8b40e405b3cdc071a67af89aa0ea6f21",
".git/objects/df/417cc0f121509588ba4adad1a79e4934cded5d": "c84eafab53adfbba33d9f04a3b1ae480",
".git/objects/e3/9e012759c11ca974ddb92cf798ff69bdef309c": "335d31682e16262675c60dd169d3aa0f",
".git/objects/e3/9ef0a6fee3c46c9935cdf2c40430c385b3263a": "06bc2c2b0dba05dc473f40f8c995f8dd",
".git/objects/e4/93248f046f50c74946943ee296a66e6adf6216": "8b3299cbc56adc9c86a2855531437caa",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/bf0fdba731cfa3a5851fec80931c666c218580": "a0d03c68b12ff907bd8a41c0961f295c",
".git/objects/ea/dbe468e624dcc0e30016e7f4aa6ff6bc741cb4": "367891a11cf8eb58095913c8bbe95e36",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/c62d8f83ccb4f5a7e7077a7776160501da2413": "25b3d220eec6f6075e28e37d1d49bb7f",
".git/objects/f5/376bc67a4800026e2b5aebfcaf4cffe432b83e": "30869dd92fd6e33c15d9086922d19697",
".git/objects/f8/43edc32171ef83f3509afd848855e89c63c83b": "8a8fcfa276ae5e2f4641987a83846004",
".git/objects/fd/3c97c48ed50df08b075a2b110e41e1ac475366": "5f761e33dd0978f730d1332222303841",
".git/ORIG_HEAD": "ecc5c62f3618fc12ff9d69a8791a7280",
".git/refs/heads/main": "e4ecc8c616ff44dcbbf09ed2deee4548",
".git/refs/remotes/origin/main": "e4ecc8c616ff44dcbbf09ed2deee4548",
"assets/AssetManifest.json": "c81cc1474c35b219835464bb6a9598a0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/img/AOicon.png": "e9fad6c15d23b72c97bd896eac5e0ba4",
"assets/img/blueprintpic.png": "b52a0e0d215c3b9cdcdb82f9d2b905f6",
"assets/img/myicon.png": "2d1c23bf23d43cbfedcf4d2712be06f8",
"assets/img/profilepic.png": "94c9faea77c8d63f3607359ba4e652a3",
"assets/img/speechpic.png": "4aee2f59171e13c4e6cf466337cd5f01",
"assets/NOTICES": "a7721524c5a5835a704436e52f3749a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8b9dc8fedb381fb222a51807f3cdfee5",
"/": "8b9dc8fedb381fb222a51807f3cdfee5",
"main.dart.js": "8ec6a4fd8ce4fc4f2055199d0d1717ba",
"manifest.json": "b845784bd3165c06ded65713989d1ede",
"version.json": "b15ede7573cd8a8c47d8d1d14586050a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
