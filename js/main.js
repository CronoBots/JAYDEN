/* =========================================================
   JAYDEN — interactions
   ========================================================= */
(function () {
  "use strict";

  /* =========================================================
     LANGUE — Anglais par défaut, bascule EN / FR
     ========================================================= */
  const I18N = {
    en: {
      "doc.title": "JAYDEN — Official site · Voice. Guitar. Truth.",
      "nav.home": "Home", "nav.music": "Music", "nav.videos": "Videos",
      "nav.about": "About", "nav.news": "News", "nav.contact": "Contact",
      "hero.eyebrow": "Music. Soul. Freedom.",
      "hero.subtitle": "Voice. Guitar. Truth.",
      "hero.lead": "Between rock, soul and urban poetry — songs born from lived experience.",
      "hero.quote": "“I don't make music to please.<br>I make it to transmit.”",
      "hero.quoteCite": "Jayden",
      "hero.next": "Next live",
      "music.label": "The music", "music.title": "The new single",
      "single.badge": "New single",
      "single.meta": "JAYDEN · Rock · Soul · Urban poetry",
      "single.desc": "A dark, sincere first taste — the beginning of a story meant to grow.",
      "single.listen": "Play the preview",
      "streams.soon": "Coming soon on all platforms",
      "disc.title": "Discography",
      "disc.sub": "The beginning of a journey. New tracks coming soon.",
      "disc.soon": "Soon",
      "videos.label": "Watch", "videos.title": "Videos",
      "videos.caption": "Teaser — the mood of the album to come.",
      "about.label": "The artist", "about.title": "About",
      "about.lead": "One voice, one guitar, and truth as the only rule.",
      "about.p1": "JAYDEN writes songs born from lived experience, where rock, soul and urban poetry meet. Sincere lyrics carried by raw energy and a dark elegance.",
      "about.p2": "Far from ready-made formulas, his music seeks less to please than to transmit — an emotion, a memory, a night spent under the streetlights. The new single <em>Somethin' Inside My Mind</em> opens this chapter, the first of a story meant to grow.",
      "about.sign": "Jayden",
      "news.label": "News", "news.title": "Shows &amp; news",
      "news.sanremo.month": "Sep",
      "news.sanremo.title": "Live in San Remo",
      "news.sanremo.sub": "San Remo, Italy · September 12, 2026",
      "news.tag.live": "Live",
      "news.single.title": "New single “Somethin' Inside My Mind”",
      "news.single.sub": "Preview available on the site",
      "news.tag.release": "Release",
      "nl.title": "Stay in the loop",
      "nl.sub": "Be the first to get JAYDEN's music, videos and news.",
      "nl.placeholder": "Your email address", "nl.submit": "Subscribe",
      "nl.invalid": "Please enter a valid email address.",
      "nl.thanks": "Thank you! You're now part of the journey. 🖤",
      "form.required": "Please fill out this field.",
      "form.email": "Please enter a valid email address.",
      "contact.label": "Get in touch", "contact.title": "Contact",
      "contact.intro": "Booking, press, collaborations — or just a word. Feel free to reach out.",
      "contact.name": "Name", "contact.email": "Email", "contact.message": "Message",
      "contact.send": "Send",
      "footer.tag": "Voice. Guitar. Truth.",
      "footer.copy": "© 2026 JAYDEN — All rights reserved",
      "footer.credit": "Website by",
      "mp.artist": "JAYDEN · Preview"
    },
    fr: {
      "doc.title": "JAYDEN — Site officiel · Voix. Guitare. Vérité.",
      "nav.home": "Accueil", "nav.music": "Musique", "nav.videos": "Vidéos",
      "nav.about": "À propos", "nav.news": "Actus", "nav.contact": "Contact",
      "hero.eyebrow": "Music. Soul. Freedom.",
      "hero.subtitle": "Voix. Guitare. Vérité.",
      "hero.lead": "Entre rock, soul et poésie urbaine, des chansons nées du vécu.",
      "hero.quote": "« Je ne fais pas de musique pour plaire.<br>Je la fais pour transmettre. »",
      "hero.quoteCite": "Jayden",
      "hero.next": "Prochain live",
      "music.label": "La musique", "music.title": "Le nouveau single",
      "single.badge": "Nouveau single",
      "single.meta": "JAYDEN · Rock · Soul · Poésie urbaine",
      "single.desc": "Un premier extrait sombre et sincère — le début d'une histoire appelée à grandir.",
      "single.listen": "Écouter l'extrait",
      "streams.soon": "Bientôt sur les plateformes",
      "disc.title": "Discographie",
      "disc.sub": "Le début d'une aventure. De nouveaux titres arrivent bientôt.",
      "disc.soon": "Bientôt",
      "videos.label": "En images", "videos.title": "Vidéos",
      "videos.caption": "Teaser — l'ambiance de l'album à venir.",
      "about.label": "L'artiste", "about.title": "À propos",
      "about.lead": "Une voix, une guitare, et la vérité pour seule ligne de conduite.",
      "about.p1": "JAYDEN écrit des chansons nées du vécu, à la croisée du rock, de la soul et de la poésie urbaine. Des textes sincères, portés par une énergie brute et une élégance sombre.",
      "about.p2": "Loin des formules toutes faites, sa musique cherche moins à plaire qu'à transmettre : une émotion, un souvenir, une nuit passée sous les lampadaires. Le nouveau single <em>Somethin' Inside My Mind</em> ouvre ce chapitre — le premier d'une histoire appelée à grandir.",
      "about.sign": "Jayden",
      "news.label": "L'actualité", "news.title": "Concerts &amp; actus",
      "news.sanremo.month": "Sep",
      "news.sanremo.title": "En concert à San Remo",
      "news.sanremo.sub": "San Remo, Italie · 12 septembre 2026",
      "news.tag.live": "Live",
      "news.single.title": "Nouveau single « Somethin' Inside My Mind »",
      "news.single.sub": "Extrait à écouter sur le site",
      "news.tag.release": "Sortie",
      "nl.title": "Reste dans la boucle",
      "nl.sub": "Reçois en avant-première la musique, les vidéos et les actus de JAYDEN.",
      "nl.placeholder": "Ton adresse e-mail", "nl.submit": "S'inscrire",
      "nl.invalid": "Merci d'entrer une adresse e-mail valide.",
      "nl.thanks": "Merci ! Tu fais désormais partie de l'aventure. 🖤",
      "form.required": "Veuillez remplir ce champ.",
      "form.email": "Veuillez saisir une adresse e-mail valide.",
      "contact.label": "Écris-moi", "contact.title": "Contact",
      "contact.intro": "Booking, presse, collaborations ou simplement un mot : n'hésite pas.",
      "contact.name": "Nom", "contact.email": "E-mail", "contact.message": "Message",
      "contact.send": "Envoyer",
      "footer.tag": "Voix. Guitare. Vérité.",
      "footer.copy": "© 2026 JAYDEN — Tous droits réservés",
      "footer.credit": "Site réalisé par",
      "mp.artist": "JAYDEN · Extrait"
    }
  };
  let currentLang = "en";
  const langBtns = document.querySelectorAll(".lang__opt");
  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = I18N[lang][el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const v = I18N[lang][el.getAttribute("data-i18n-ph")];
      if (v != null) el.setAttribute("placeholder", v);
    });
    if (I18N[lang]["doc.title"]) document.title = I18N[lang]["doc.title"];
    langBtns.forEach((b) => b.classList.toggle("is-on", b.dataset.lang === lang));
    try { localStorage.setItem("jayden_lang", lang); } catch (e) {}
  }
  langBtns.forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  let savedLang = "en";
  try { savedLang = localStorage.getItem("jayden_lang") || "en"; } catch (e) {}
  applyLang(savedLang);

  /* ---------- Nav : fond au scroll ---------- */
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("toTop");
  // Sur mobile, le bouton « remonter » apparaît dès qu'on commence à scroller ;
  // sur PC on attend d'avoir bien descendu.
  const isMobile = window.matchMedia("(max-width: 760px)");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > (isMobile.matches ? 60 : 700));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  if (isMobile.addEventListener) isMobile.addEventListener("change", onScroll);
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

  /* ---------- Héros mobile : hauteur VERROUILLÉE en pixels ----------
     Aucune parallaxe. Sur mobile, la barre d'adresse du navigateur qui apparaît/disparaît
     au scroll modifie la hauteur "viewport" (svh/vh) et fait re-calculer le cadrage
     "cover" de la photo → effet de zoom. On fige donc la hauteur de la photo (et de
     l'overlay) sur une valeur en pixels capturée une seule fois, jamais mise à jour au
     scroll. La photo devient totalement immobile. */
  (function lockHeroHeight() {
    const heroEl = document.querySelector(".hero");
    const heroBg = document.querySelector(".hero__bg");
    const heroInner = document.querySelector(".hero__inner");
    if (!heroEl || !heroBg) return;
    const mq = window.matchMedia("(max-width: 760px)");
    const apply = () => {
      if (mq.matches) {
        const h = window.innerHeight;
        heroBg.style.height = h + "px";
        heroEl.style.minHeight = h + "px";
        if (heroInner) heroInner.style.minHeight = h + "px";
      } else {
        heroBg.style.height = "";
        heroEl.style.minHeight = "";
        if (heroInner) heroInner.style.minHeight = "";
      }
    };
    apply();
    // On NE réagit PAS au scroll ni au resize dû à la barre d'adresse.
    // Uniquement au changement d'orientation (vraie modification d'écran).
    window.addEventListener("orientationchange", () => setTimeout(apply, 250));
    if (mq.addEventListener) mq.addEventListener("change", apply);
  })();

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
    audio.addEventListener("play", () => {
      mpIcon.setAttribute("d", PAUSE);
      mp.classList.add("playing");
    });
    audio.addEventListener("pause", () => {
      mpIcon.setAttribute("d", PLAY);
      mp.classList.remove("playing");
    });

    const toggle = () => {
      if (!audio.src) return;
      if (audio.paused) audio.play().catch(() => {});
      else audio.pause();
    };

    document.getElementById("mpPlay").addEventListener("click", toggle);
    const sectionPlay = document.getElementById("sectionPlay");
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
        nlNote.textContent = I18N[currentLang]["nl.invalid"];
        nlNote.style.color = "var(--gold)";
        return;
      }
      nlNote.textContent = I18N[currentLang]["nl.thanks"];
      nlNote.style.color = "var(--gold-lite)";
      nl.reset();
    });
  }

  /* ---------- Messages de validation natifs traduits (EN/FR) ---------- */
  document.querySelectorAll("input[required], textarea[required]").forEach((field) => {
    const setMsg = () => {
      field.setCustomValidity("");
      if (field.validity.valid) return;
      if (field.validity.valueMissing) {
        field.setCustomValidity(I18N[currentLang]["form.required"]);
      } else if (field.validity.typeMismatch) {
        field.setCustomValidity(I18N[currentLang]["form.email"]);
      }
    };
    field.addEventListener("invalid", setMsg);
    field.addEventListener("input", () => field.setCustomValidity(""));
  });

  /* ---------- Vidéo « vivante » À propos ---------- */
  const aboutVideo = document.getElementById("aboutVideo");
  const aboutSound = document.getElementById("aboutSound");
  if (aboutVideo) {
    // Met la vidéo en pause dès qu'elle n'est plus à l'écran, la relance à son retour.
    if ("IntersectionObserver" in window) {
      const vObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) aboutVideo.play().catch(() => {});
            else aboutVideo.pause();
          });
        },
        { threshold: 0.25 }
      );
      vObs.observe(aboutVideo);
    }
    // Son on / off
    if (aboutSound) {
      aboutSound.addEventListener("click", () => {
        aboutVideo.muted = !aboutVideo.muted;
        const on = !aboutVideo.muted;
        aboutSound.classList.toggle("is-on", on);
        aboutSound.setAttribute("aria-pressed", String(on));
        if (on) aboutVideo.play().catch(() => {});
      });
    }
  }
})();
