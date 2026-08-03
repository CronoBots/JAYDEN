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

  /* ---------- Lecteur audio ---------- */
  const player = document.getElementById("player");
  const playBtn = document.getElementById("playBtn");
  const playIcon = document.getElementById("playIcon");
  const bar = document.getElementById("bar");
  const fill = document.getElementById("fill");
  const curEl = document.getElementById("cur");
  const durEl = document.getElementById("dur");
  const note = document.getElementById("playerNote");

  const PLAY = "M8 5v14l11-7z";
  const PAUSE = "M6 5h4v14H6zM14 5h4v14h-4z";
  const fmt = (s) =>
    isFinite(s)
      ? Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0")
      : "--:--";

  if (player) {
    const audio = new Audio();
    audio.preload = "metadata";
    audio.src = player.dataset.src;
    let ready = false;

    audio.addEventListener("loadedmetadata", () => {
      ready = true;
      durEl.textContent = fmt(audio.duration);
      if (note) note.textContent = "Extrait du nouveau single.";
    });
    audio.addEventListener("timeupdate", () => {
      const p = (audio.currentTime / audio.duration) * 100 || 0;
      fill.style.right = 100 - p + "%";
      curEl.textContent = fmt(audio.currentTime);
    });
    audio.addEventListener("ended", () => {
      playIcon.setAttribute("d", PLAY);
      fill.style.right = "100%";
    });
    // Fichier audio absent pour l'instant : on garde les liens plateformes actifs.
    audio.addEventListener("error", () => {
      ready = false;
    });

    playBtn.addEventListener("click", () => {
      if (!ready) {
        if (note) {
          note.textContent = "L'extrait audio sera bientôt en ligne.";
          note.style.color = "var(--gold)";
        }
        return;
      }
      if (audio.paused) {
        audio.play();
        playIcon.setAttribute("d", PAUSE);
      } else {
        audio.pause();
        playIcon.setAttribute("d", PLAY);
      }
    });

    bar.addEventListener("click", (e) => {
      if (!ready) return;
      const rect = bar.getBoundingClientRect();
      audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
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
