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
      "hero.quote": "“What if a sound could <span class=\"sos\">S</span>ave <span class=\"sos\">O</span>ur <span class=\"sos\">S</span>oul?”",
      "hero.quoteCite": "Jayden",
      "hero.next": "Next live",
      "music.label": "The music", "music.title": "The new single",
      "single.badge": "New single",
      "single.meta": "JAYDEN",
      "single.desc": "A dark, sincere first taste — the beginning of a story meant to grow.",
      "single.listen": "Play the preview",
      "streams.soon": "Coming soon on all platforms",
      "disc.title": "Discography",
      "disc.sub": "The beginning of a journey. New tracks coming soon.",
      "disc.soon": "Soon",
      "videos.label": "Watch", "videos.title": "Videos",
      "videos.caption": "Teaser — the mood of the album to come.",
      "about.label": "The artist", "about.title": "About",
      "about.lead": "Some artists chase trends. Others spend years searching for a voice that truly belongs to them. JAYDEN chose the second path.",
      "about.p1": "Singer, songwriter and performer, he has spent years shaping an artistic identity driven by one simple belief: music should make people feel something long after the last note has faded.",
      "about.p2": "Long before launching his solo project, JAYDEN built his reputation on stage. In 2004, he was selected for <strong>ROCKSTAR INXS</strong>, before joining major international productions, including <em>Thriller Live</em> in London, the acclaimed show celebrating the legacy of Michael Jackson.",
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
      "footer.tag": "··· ——— ···",
      "footer.copy": "© 2026 JAYDEN — All rights reserved",
      "footer.credit": "Website by",
      "footer.legal": "Legal notice",
      "footer.privacy": "Privacy policy",
      "footer.cookies": "Cookie policy",
      "cookie.text": "This site uses only essential storage (language &amp; playback). No tracking, no advertising. <a href=\"legal.html#cookies\">Learn more</a>.",
      "cookie.ok": "Got it",
      "legal.back": "← Back to site",
      "mp.artist": "JAYDEN · Preview"
    },
    fr: {
      "doc.title": "JAYDEN — Site officiel · Voix. Guitare. Vérité.",
      "nav.home": "Accueil", "nav.music": "Musique", "nav.videos": "Vidéos",
      "nav.about": "À propos", "nav.news": "Actus", "nav.contact": "Contact",
      "hero.quote": "“What if a sound could <span class=\"sos\">S</span>ave <span class=\"sos\">O</span>ur <span class=\"sos\">S</span>oul?”",
      "hero.quoteCite": "Jayden",
      "hero.next": "Prochain live",
      "music.label": "La musique", "music.title": "Le nouveau single",
      "single.badge": "Nouveau single",
      "single.meta": "JAYDEN",
      "single.desc": "Un premier extrait sombre et sincère — le début d'une histoire appelée à grandir.",
      "single.listen": "Écouter l'extrait",
      "streams.soon": "Bientôt sur les plateformes",
      "disc.title": "Discographie",
      "disc.sub": "Le début d'une aventure. De nouveaux titres arrivent bientôt.",
      "disc.soon": "Bientôt",
      "videos.label": "En images", "videos.title": "Vidéos",
      "videos.caption": "Teaser — l'ambiance de l'album à venir.",
      "about.label": "L'artiste", "about.title": "À propos",
      "about.lead": "Certains artistes courent après les tendances. D'autres passent des années à chercher une voix qui leur appartienne vraiment. JAYDEN a choisi la seconde voie.",
      "about.p1": "Chanteur, auteur-compositeur et interprète, il a passé des années à façonner une identité artistique guidée par une conviction simple : la musique doit faire ressentir quelque chose bien après la dernière note.",
      "about.p2": "Bien avant de lancer son projet solo, JAYDEN s'est forgé une réputation sur scène. En 2004, il est sélectionné pour <strong>ROCKSTAR INXS</strong>, avant de rejoindre de grandes productions internationales, dont <em>Thriller Live</em> à Londres, le spectacle acclamé célébrant l'héritage de Michael Jackson.",
      "about.p3": "Il devient ensuite le chanteur principal d'<strong>OCTOBER Plays U2</strong> et d'<strong>INXS Xperience</strong>, se produisant en Belgique et à travers l'Europe, tout en se forgeant une réputation de performeur scénique passionné et authentique.",
      "about.p4": "Pourtant, derrière chaque concert, chaque répétition et chaque kilomètre parcouru, une autre histoire prenait forme en silence.",
      "about.p5": "Pendant des années, JAYDEN a écrit, réécrit et peaufiné ses chansons sans courir après les tendances ni les algorithmes. Son ambition n'a jamais été de simplement sortir de la musique, mais de créer des chansons capables de toucher les gens comme la musique de son enfance l'avait toujours touché.",
      "about.p6": "Cette vision est devenue <strong><em>SOS – Save Our Soul</em></strong>.",
      "about.p7": "Plus qu'un album, <em>SOS</em> est conçu comme un véritable voyage artistique. Chaque chanson représente un chapitre de son histoire. Elles explorent la vulnérabilité, l'espoir, la résilience, l'amour, le doute et la force d'avancer, même dans les moments les plus sombres.",
      "about.p8": "Influencé par des artistes comme Michael Jackson, Prince, INXS, Lenny Kravitz, Steven Tyler et Mick Jagger, il puise dans leur liberté artistique tout en créant un son et une identité qui n'appartiennent qu'à lui.",
      "about.p9": "JAYDEN ne crée pas de musique pour suivre les tendances.<br>Il crée de la musique pour faire ressentir.",
      "about.p10": "Parce que chaque chanson raconte une histoire.<br>Et chaque histoire laisse une trace.",
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
      "footer.tag": "··· ——— ···",
      "footer.copy": "© 2026 JAYDEN — Tous droits réservés",
      "footer.credit": "Site réalisé par",
      "footer.legal": "Mentions légales",
      "footer.privacy": "Confidentialité",
      "footer.cookies": "Cookies",
      "cookie.text": "Ce site n'utilise que du stockage essentiel (langue &amp; lecture). Aucun traçage, aucune publicité. <a href=\"legal.html#cookies\">En savoir plus</a>.",
      "cookie.ok": "J'ai compris",
      "legal.back": "← Retour au site",
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
    // Pages avec long texte bilingue (ex. mentions légales) : bascule des blocs EN/FR
    document.querySelectorAll("[data-lang-block]").forEach((el) => {
      el.style.display = el.getAttribute("data-lang-block") === lang ? "" : "none";
    });
    langBtns.forEach((b) => b.classList.toggle("is-on", b.dataset.lang === lang));
    try { localStorage.setItem("jayden_lang", lang); } catch (e) {}
  }
  langBtns.forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  let savedLang = "en";
  try { savedLang = localStorage.getItem("jayden_lang") || "en"; } catch (e) {}
  applyLang(savedLang);

  /* ---------- Nav : fond au scroll + bouton retour en haut ---------- */
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("toTop");
  // Sur mobile, le bouton « remonter » apparaît dès qu'on commence à scroller ;
  // sur PC on attend d'avoir bien descendu.
  const isMobile = window.matchMedia("(max-width: 760px)");
  if (nav || toTop) {
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle("scrolled", y > 40);
      if (toTop) toTop.classList.toggle("show", y > (isMobile.matches ? 60 : 700));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    if (isMobile.addEventListener) isMobile.addEventListener("change", onScroll);
    onScroll();
  }
  if (toTop) {
    toTop.addEventListener("click", () => {
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  }

  /* ---------- Menu mobile ---------- */
  const burger = document.getElementById("burger");
  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    if (burger) burger.setAttribute("aria-expanded", "false");
  };
  if (burger) {
    burger.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll("#navLinks a").forEach((a) =>
      a.addEventListener("click", closeMenu)
    );
  }

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
    const mpCurM = document.getElementById("mpCurM");
    const mpDurM = document.getElementById("mpDurM");

    const PLAY = "M8 5v14l11-7z";
    const PAUSE = "M6 5h4v14H6zM14 5h4v14h-4z";
    const fmt = (s) =>
      isFinite(s)
        ? Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0")
        : "0:00";

    const audio = new Audio();
    // Chargement différé : RIEN n'est téléchargé au chargement de la page.
    // Le fichier (~4,7 Mo) n'est récupéré qu'au premier clic sur lecture,
    // ce qui allège fortement le chargement initial (surtout sur mobile).
    audio.preload = "none";
    audio.loop = false; // la chanson ne se relance jamais toute seule

    let loadStarted = null;
    const ensureLoaded = () => {
      if (loadStarted) return loadStarted;
      // Téléchargement en mémoire (blob) → lecture fluide, puis on relit sans re-télécharger.
      loadStarted = fetch(mp.dataset.src)
        .then((r) => (r.ok ? r.blob() : Promise.reject(r.status)))
        .then((blob) => { audio.src = URL.createObjectURL(blob); })
        .catch(() => { audio.src = mp.dataset.src; });
      return loadStarted;
    };

    // Met à jour la barre, les temps (inline + mobile) et l'accessibilité du curseur.
    const syncUI = () => {
      const cur = fmt(audio.currentTime);
      mpCur.textContent = cur;
      if (mpCurM) mpCurM.textContent = cur;
      if (isFinite(audio.duration)) {
        const dur = fmt(audio.duration);
        mpDur.textContent = dur;
        if (mpDurM) mpDurM.textContent = dur;
      }
      const p = (audio.currentTime / audio.duration) * 100 || 0;
      mpFill.style.right = 100 - p + "%";
      mpBar.setAttribute("aria-valuenow", Math.round(p));
      mpBar.setAttribute("aria-valuetext", cur + " / " + (isFinite(audio.duration) ? fmt(audio.duration) : "…"));
    };

    audio.addEventListener("loadedmetadata", syncUI);
    audio.addEventListener("timeupdate", syncUI);
    audio.addEventListener("ended", () => {
      // Fin du morceau : on s'arrête et on revient au début (aucune relecture auto)
      audio.currentTime = 0;
      syncUI();
    });

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
      if (audio.paused) ensureLoaded().then(() => audio.play().catch(() => {}));
      else audio.pause();
    };

    document.getElementById("mpPlay").addEventListener("click", toggle);
    const sectionPlay = document.getElementById("sectionPlay");
    if (sectionPlay) sectionPlay.addEventListener("click", toggle);

    // Déplacement dans le morceau : clic OU glissement (souris + tactile),
    // avec retour visuel immédiat même en pause.
    const seekToX = (clientX) => {
      if (!isFinite(audio.duration)) return;
      const rect = mpBar.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      audio.currentTime = ratio * audio.duration;
      syncUI();
    };
    let dragging = false;
    mpBar.addEventListener("pointerdown", (e) => {
      dragging = true;
      try { mpBar.setPointerCapture(e.pointerId); } catch (err) {}
      seekToX(e.clientX);
      e.preventDefault();
    });
    mpBar.addEventListener("pointermove", (e) => { if (dragging) seekToX(e.clientX); });
    const endDrag = () => { dragging = false; };
    mpBar.addEventListener("pointerup", endDrag);
    mpBar.addEventListener("pointercancel", endDrag);
    mpBar.addEventListener("keydown", (e) => {
      if (!isFinite(audio.duration)) return;
      if (e.key === "ArrowRight") { audio.currentTime = Math.min(audio.duration, audio.currentTime + 5); syncUI(); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { audio.currentTime = Math.max(0, audio.currentTime - 5); syncUI(); e.preventDefault(); }
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

  /* ---------- Séparateur « SOS » en morse : chaque caractère apparaît à SA place ----------
     Les caractères sont tous posés (mise en page figée) puis révélés un à un, une seule fois. */
  const morseEl = document.querySelector(".hero__subtitle");
  if (morseEl) {
    const full = (morseEl.textContent || "··· ——— ···").trim();
    const chars = Array.from(full);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    morseEl.textContent = "";
    const spans = chars.map((ch) => {
      const s = document.createElement("span");
      s.className = "morse-ch";
      s.textContent = ch === " " ? " " : ch; // espace insécable pour garder la place
      morseEl.appendChild(s);
      return s;
    });
    if (reduce || !chars.length) {
      spans.forEach((s) => s.classList.add("on"));
    } else {
      const delayFor = (ch) => (ch === "·" ? 180 : ch === "—" ? 440 : 520);
      let i = 0;
      const reveal = () => {
        if (i >= spans.length) return; // écrit une seule fois, ne recommence pas
        spans[i].classList.add("on");
        const ch = chars[i];
        i++;
        setTimeout(reveal, delayFor(ch));
      };
      setTimeout(reveal, 1200); // démarre après l'apparition du logo
    }
  }

  /* ---------- Bandeau cookies ---------- */
  const cookieBar = document.getElementById("cookieBar");
  if (cookieBar) {
    let consent = null;
    try { consent = localStorage.getItem("jayden_cookie_consent"); } catch (e) {}
    if (!consent) {
      setTimeout(() => cookieBar.classList.add("show"), 900);
    }
    const accept = document.getElementById("cookieAccept");
    if (accept) {
      accept.addEventListener("click", () => {
        try { localStorage.setItem("jayden_cookie_consent", "ok"); } catch (e) {}
        cookieBar.classList.remove("show");
      });
    }
  }
})();
