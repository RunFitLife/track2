/* RunFitLife: service worker. Si cambias la app, sube el número de versión para que todos reciban la actualización. */
var CACHE = 'runfitlife-v3';
var SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'favicon.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  /* Página principal: primero la red (para recibir actualizaciones) y, sin conexión, la copia guardada */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put('index.html', copy); });
        return res;
      }).catch(function () { return caches.match('index.html').then(function (r) { return r || caches.match('./'); }); })
    );
    return;
  }

  /* Archivos propios y tipografías: sirve la copia guardada y la refresca en segundo plano */
  var propio = url.origin === self.location.origin;
  var fuentes = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (propio || fuentes) {
    e.respondWith(
      caches.match(req).then(function (hit) {
        var red = fetch(req).then(function (res) {
          if (res && (res.ok || res.type === 'opaque')) {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) { c.put(req, copy); });
          }
          return res;
        }).catch(function () { return hit; });
        return hit || red;
      })
    );
  }
});
