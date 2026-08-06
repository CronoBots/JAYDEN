/* =====================================================================
   JAYDEN — Service Worker (PWA)
   - Rend le site installable sur l'écran d'accueil (mobile & desktop)
   - Cache l'app-shell pour un démarrage rapide + un mode hors-ligne
   - N'intercepte JAMAIS les requêtes vers d'autres domaines
     (polices Google, Supabase/analytics, géo-IP) : elles passent
     directement au réseau, sans altération.
   ===================================================================== */
const CACHE = "jayden-v43";

const CORE = [
  "/",
  "/index.html",
  "/css/style.css?v=43",
  "/js/main.js?v=43",
  "/assets/img/jayden-logo.png?v=2",
  "/assets/img/hero-dark.jpg?v=2",
  "/assets/img/signature.png?v=2",
  "/assets/img/icon-192.png",
  "/assets/img/icon-512.png",
  "/assets/img/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(CORE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  // Laisse passer tout ce qui n'est pas sur notre domaine (polices, Supabase, géo-IP…)
  if (url.origin !== self.location.origin) return;

  // Pages (navigation) : réseau d'abord, cache en secours (hors-ligne)
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("/index.html")))
    );
    return;
  }

  // Ressources statiques : cache d'abord, réseau en secours
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.ok && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      });
    })
  );
});
