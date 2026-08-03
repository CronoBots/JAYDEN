/* =========================================================
   JAYDEN — interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Nav : fond au scroll ---------- */
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Bouton retour en haut ---------- */
  toTop.addEventListener("click", () => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });

  /* ---------- Menu mobile ---------- */
  const burger = document.getElementById("burger");
  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", "false");
  };
  burger.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll("#navLinks a").forEach((a) =>
    a.addEventListener("click", closeMenu)
  );

  /* ---------- Lien actif selon la section ---------- */
  const sections = [...document.querySelectorAll("section[id]")];
  const links = new Map(
    [...document.querySelectorAll("#navLinks a")].map((a) => [
      a.getAttribute("href").slice(1),
      a,
    ])
  );
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          const link = links.get(e.target.id);
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  /* ---------- Reveal on scroll ---------- */
  const revealer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    },
    // se déclenche un peu avant que l'élément entre dans l'écran (évite les zones vides au scroll)
    { threshold: 0, rootMargin: "0px 0px 14% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 70 + "ms";
    revealer.observe(el);
  });

  /* ---------- Parallaxe douce du hero ---------- */
  const heroBg = document.querySelector(".hero__bg");
  if (heroBg && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        if (y < window.innerHeight) heroBg.style.transform = `translateY(${y * 0.12}px)`;
      },
      { passive: true }
    );
  }

  /* ---------- Lecteur fixe (barre en bas) ---------- */
  const mp = document.getElementById("miniplayer");
  if (mp) {
    const mpIcon = document.getElementById("mpIcon");
    const mpBar = document.getElementById("mpBar");
    const mpFill = document.getElementById("mpFill");
    const mpCur = document.getElementById("mpCur");
    const mpDur = document.getElementById("mpDur");

    const PLAY = "M8 5v14l11-7z";
    const PAUSE = "M6 5h4v14H6zM14 5h4v14h-4z";
    const fmt = (s) =>
      isFinite(s)
        ? Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0")
        : "0:00";

    const audio = new Audio();
    audio.preload = "auto";

    // Précharge tout l'extrait dès l'ouverture (téléchargement immédiat en mémoire)
    // → lecture instantanée au clic, sans démarrage automatique.
    fetch(mp.dataset.src)
      .then((r) => (r.ok ? r.blob() : Promise.reject(r.status)))
      .then((blob) => { audio.src = URL.createObjectURL(blob); audio.load(); })
      .catch(() => { audio.src = mp.dataset.src; audio.load(); });

    audio.addEventListener("loadedmetadata", () => { mpDur.textContent = fmt(audio.duration); });
    audio.addEventListener("timeupdate", () => {
      const p = (audio.currentTime / audio.duration) * 100 || 0;
      mpFill.style.right = 100 - p + "%";
      mpCur.textContent = fmt(audio.currentTime);
    });
    audio.addEventListener("ended", () => { mpFill.style.right = "100%"; });

    // L'icône suit toujours l'état réel de l'audio (play <-> pause synchronisés)
    audio.addEventListener("play", () => mpIcon.setAttribute("d", PAUSE));
    audio.addEventListener("pause", () => mpIcon.setAttribute("d", PLAY));

    const toggle = () => {
      if (!audio.src) return;
      if (audio.paused) audio.play().catch(() => {});
      else audio.pause();
    };

    document.getElementById("mpPlay").addEventListener("click", toggle);
    const coverPlay = document.getElementById("coverPlay");
    const sectionPlay = document.getElementById("sectionPlay");
    if (coverPlay) coverPlay.addEventListener("click", toggle);
    if (sectionPlay) sectionPlay.addEventListener("click", toggle);

    const seek = (clientX) => {
      if (!isFinite(audio.duration)) return;
      const rect = mpBar.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      audio.currentTime = ratio * audio.duration;
    };
    mpBar.addEventListener("click", (e) => seek(e.clientX));
    mpBar.addEventListener("keydown", (e) => {
      if (!isFinite(audio.duration)) return;
      if (e.key === "ArrowRight") audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
      else if (e.key === "ArrowLeft") audio.currentTime = Math.max(0, audio.currentTime - 5);
    });
  }

  /* ---------- Newsletter (front seul — à relier à un service) ---------- */
  const nl = document.getElementById("newsletterForm");
  const nlNote = document.getElementById("nlNote");
  if (nl) {
    nl.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = nl.querySelector("input").value.trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        nlNote.textContent = "Merci d'entrer une adresse e-mail valide.";
        nlNote.style.color = "var(--gold)";
        return;
      }
      nlNote.textContent = "Merci ! Tu fais désormais partie de l'aventure. 🖤";
      nlNote.style.color = "var(--gold-lite)";
      nl.reset();
    });
  }
})();
