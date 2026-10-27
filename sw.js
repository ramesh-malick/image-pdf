const CACHE = 'pdf-studio-offline-v1';
const ASSETS = ['./','./index.html','./style.css','./app.js','./pro.html','./pro.css','./pro.js','./offline.js','./vendor/pdf-lib.min.js','./vendor/pdf.min.js','./vendor/pdf.worker.min.js','./vendor/jszip.min.js'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('pdf-studio-offline-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
