'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/profile_image.png": "9fb2acd050e3dc0547ee8f19aed3d46e",
"assets/assets/images/nodejs.png": "cd1ecdbc98e88285bdc1d08543eee4a1",
"assets/assets/images/github_actions.png": "dc30fd9a0af62e9dad9475e6943f348c",
"assets/assets/images/portfolio/pspayment.png": "3d55b79fab6e5802b6f52178c93f4c31",
"assets/assets/images/portfolio/quantz.png": "64a12aff2e0b287dee218f8c8325c0d7",
"assets/assets/images/portfolio/witty.png": "7ea3d29e774557f2e9ad87dbecf6d360",
"assets/assets/images/portfolio/portfolio.png": "d61e03863cb5a2b5b100b452e542be60",
"assets/assets/images/portfolio/beaconforce.png": "e388f3b7ceab20dc24700289c20daaef",
"assets/assets/images/portfolio/momentum.png": "cba3d6bc14763d5d1fcf8f1626553fe2",
"assets/assets/images/portfolio/orbit.png": "de03fbf1a52f22ac9ecbfbf78acccad4",
"assets/assets/images/portfolio/relative_scale.png": "15aa442a478dfff6d785b56408ecfc9e",
"assets/assets/images/portfolio/btx.png": "e202f3a8bfdad6c1f2b1fc12915a86b6",
"assets/assets/images/portfolio/owensmx.png": "6d9a318f6091c114c860b0d23d379842",
"assets/assets/images/flutter_small.png": "48f83cd956f840b946e4449bf90537cb",
"assets/assets/images/flutter.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/assets/images/firebase.png": "e9c691a7a574afac430fcb406be57cf4",
"assets/assets/data/portfolio.json": "3e14b3354fd8c4f769ed2e3aac373068",
"assets/assets/data/skills.json": "f8a311a76c1cf465c7c34ebec61caba0",
"assets/assets/data/profile.json": "a5c7c7186206b0b35470739701e11571",
"assets/assets/data/about_me.json": "7eae476561e03de92355ee53d4247600",
"assets/assets/data/experience.json": "dd7939cd4e04d9f115677b465a58f3cc",
"assets/NOTICES": "6dc8d86f1fb1ef4dc870b45eef83c333",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "51cc5dc20a32688208ae636758795ef0",
"assets/shaders/ink_sparkle.frag": "bb6af69544daba10b8bb89e60edaa055",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "1cb6b7e8c32593b66a53a6f19b90ca4d",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"index.html": "a43de66457658a9452146bdac7205bad",
"/": "a43de66457658a9452146bdac7205bad",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"manifest.json": "4d2a074e955647542596586cbde41715",
"styles.css": "274233a5737cea43f98ca496da0889dd",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "ed2890eb2afc3cfb9f6eeb0c9fe1b79c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
