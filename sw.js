const K="shaxmat-v4";
const F=["./","index.html","bot.js","qosh.js","qoida.js","rokirovka.js","ikonka.svg","ikonka512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(K).then(c=>c.addAll(F))));
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
