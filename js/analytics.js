/* =====================================================================
   JAYDEN — Collecte anonyme d'une visite
   - Une seule fois par session (sessionStorage)
   - Géolocalisation approximative par IP (pays + position arrondie ~11 km)
   - AUCUNE IP brute n'est stockée, seulement pays + lat/lng arrondies
   - Inactif tant que js/analytics-config.js n'est pas rempli
   ===================================================================== */
(function () {
  var cfg = window.JAYDEN_ANALYTICS;
  if (!cfg || !cfg.url || !cfg.key) return;               // non configuré → inactif
  try { if (sessionStorage.getItem("jyd_v")) return; } catch (e) {} // déjà compté cette session

  var round1 = function (n) { return (n === null || n === undefined) ? null : Math.round(n * 10) / 10; };
  var base = cfg.url.replace(/\/+$/, "");

  fetch("https://ipwho.is/?fields=success,country,country_code,city,latitude,longitude")
    .then(function (r) { return r.json(); })
    .then(function (g) {
      if (!g || g.success === false) return;
      var body = {
        country: g.country || null,
        country_code: g.country_code || null,
        city: g.city || null,
        lat: round1(g.latitude),
        lng: round1(g.longitude)
      };
      return fetch(base + "/rest/v1/visits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": cfg.key,
          "Authorization": "Bearer " + cfg.key,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(body)
      });
    })
    .then(function () { try { sessionStorage.setItem("jyd_v", "1"); } catch (e) {} })
    .catch(function () { /* silencieux : la collecte ne doit jamais gêner le site */ });
})();
