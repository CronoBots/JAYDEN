/* JAYDEN — enregistrement du Service Worker (installation sur l'accueil) */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").catch(function () {});
  });
}
