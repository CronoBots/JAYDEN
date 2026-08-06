# JAYDEN — Site officiel

Site vitrine de l'artiste **JAYDEN** — esprit sombre & doré (inspiration : le site de Lenny Kravitz).
Page unique déroulante, 100 % statique (HTML / CSS / JS, aucune dépendance de build), pensée pour **grandir** au fil des sorties.

🌐 **jaydenmusic.com** — hébergé sur **GitHub Pages** (déploiement automatique à chaque push sur `main`).

## Structure

```
.
├── index.html                  # Page principale (sections en scroll)
├── legal.html                  # Mentions légales, confidentialité & cookies
├── backstage/
│   ├── index.html              # Tableau de bord privé des visites (URL secrète, noindex)
│   └── manifest.webmanifest    # App installable « BACKSTAGE »
├── css/style.css               # Design system (thème noir & or) + responsive
├── js/
│   ├── main.js                 # Nav, reveal au scroll, mini-lecteur audio, menu mobile, i18n, formulaires
│   ├── analytics.js            # Comptage de visites anonyme (pays + point approx.), 1 visite / session
│   ├── analytics-config.js     # URL Supabase + clé publique « anon » (protégée par RLS)
│   └── pwa.js                  # Enregistrement du Service Worker
├── sw.js                       # Service Worker (app-shell en cache, secours hors-ligne)
├── site.webmanifest            # App installable « JAYDEN »
├── supabase/schema.sql         # Schéma de la base de stats (table + RLS + RPC)
├── CNAME                       # Domaine personnalisé (jaydenmusic.com)
├── .nojekyll                   # Sert les fichiers tels quels (pas de traitement Jekyll)
└── assets/
    ├── img/
    │   ├── jayden-logo.png             # Logo doré « JAYDEN » (wordmark, fond transparent)
    │   ├── hero-dark.jpg               # Photo de garde du hero
    │   ├── single-cover.jpg            # Pochette du single « Somethin' Inside My Mind »
    │   ├── signature.png               # Signature manuscrite
    │   ├── og-preview.jpg              # Image de partage (Open Graph / Twitter)
    │   ├── favicon.png / favicon-32.png# Icônes d'onglet
    │   ├── apple-touch-icon.png        # Icône iOS « ajouter à l'accueil »
    │   └── icon-192 / 512 / maskable   # Icônes PWA (logo doré sur fond noir)
    ├── audio/
    │   └── somethin-inside-my-mind.mp3 # Extrait du single (chargé par le mini-lecteur)
    ├── video/
    │   └── teaser.mp4                   # Teaser (section À propos)
    └── vendor/jsvectormap/             # Carte du monde (hébergée localement) pour /backstage
```

## Sections (page d'accueil)
1. **Accueil (hero)** — logo, code morse, accroche « What if a sound could Save Our Soul? », signature.
2. **Musique** — le single mis en avant + liens plateformes, et une discographie évolutive.
3. **À propos** — biographie + teaser vidéo.
4. **Actus & dates** — actualités et dates de concert.
5. **Contact** — e-mail, réseaux, formulaire.

Un **mini-lecteur** fixe (extrait du single) est présent en bas de page.

## PWA — installable sur l'écran d'accueil
Le site et la page de stats sont installables comme applications :
- **JAYDEN** — le site (`site.webmanifest`, scope `/`)
- **BACKSTAGE** — les statistiques (`backstage/manifest.webmanifest`, scope `/backstage/`)

Icône = le logo doré sur fond noir. Le Service Worker (`sw.js`) met l'app-shell en cache
(démarrage rapide + secours hors-ligne) sans jamais intercepter les requêtes externes
(polices, Supabase, géo-IP).

## Statistiques (page privée `/backstage`)
Comptage de visites **anonyme et conforme RGPD** : aucune IP brute stockée, une visite par
session, pays + point de connexion approximatif affichés sur une carte du monde.
Backend **Supabase** (Postgres + RLS + RPC `get_visit_stats`). Détails dans `supabase/schema.sql`.
La page est en `noindex` et accessible uniquement via son URL.

## Internationalisation
Bilingue **EN / FR** via les attributs `data-i18n` (bascule côté client dans `main.js`).

## Développement local
Aucune dépendance. Servir le dossier à la racine (les chemins `/assets`, `/js` sont absolus) :

```bash
python3 -m http.server 8080
# puis http://localhost:8080
```

> Le Service Worker et l'installation PWA nécessitent `http://localhost` ou HTTPS
> (contexte sécurisé) — c'est le cas en local et sur jaydenmusic.com.

## Mise en ligne
Push sur `main` → le workflow **« pages build and deployment »** de GitHub Pages
publie automatiquement le contenu du dépôt sur jaydenmusic.com. Rien à uploader à la main.
