# JAYDEN — Site officiel

Site vitrine de l'artiste **JAYDEN** — *Voix. Guitare. Vérité.*
Une page unique, déroulante, dans un esprit sombre & doré (inspiration : le site de Lenny Kravitz), pensée pour **grandir** au fil des sorties.

🌐 Domaine : **jaydenmusic.com** (enregistré chez Combell)

## Structure

```
.
├── index.html              # La page complète (une seule page, sections en scroll)
├── css/style.css           # Design system (thème noir & or) + responsive
├── js/main.js              # Nav, reveal au scroll, lecteur audio, menu mobile, formulaires
├── CNAME                   # Domaine personnalisé (utile si hébergement GitHub Pages)
└── assets/
    ├── img/
    │   ├── logo-gold.png            # Logo JAYDEN doré (fond transparent)
    │   ├── logo-white.png           # Logo JAYDEN blanc (fond transparent)
    │   ├── favicon.png / -32.png    # Icônes d'onglet
    │   ├── hero-gold.jpg            # Photo de garde (version claire/dorée) — fond du hero
    │   ├── hero-dark.jpg            # Photo de garde (version foncée) — section À propos / poster vidéo
    │   ├── single-cover.jpg         # Pochette du single « Somethin' Inside My Mind »
    │   ├── mockup-reference.jpg     # Maquette de référence (aussi image de partage Open Graph)
    │   └── logo-pack.jpg            # Pack logos (référence)
    ├── video/
    │   └── teaser.mp4               # Teaser IA (MP4 H.264, lecture universelle)
    └── audio/
        └── (à venir) somethin-inside-my-mind.mp3
```

## Sections
1. **Accueil (hero)** — reproduction fidèle de la maquette : logo, taglines, accroche, bouton, bandeau « nouveau single » + citation.
2. **Musique** — le single mis en avant avec un lecteur audio + liens plateformes, et une discographie évolutive.
3. **Vidéos** — le teaser.
4. **À propos** — biographie.
5. **Actus & dates** — actualités et futures dates de concert.
6. **Newsletter** — inscription.
7. **Contact** — e-mail, réseaux, formulaire.

## À brancher plus tard (emplacements déjà prêts)
- **Extrait audio du single** → déposer le fichier `assets/audio/somethin-inside-my-mind.mp3`. Le lecteur le détecte automatiquement.
- **Vidéo** → le teaser est en **MP4 (H.264/AAC)** (`assets/video/teaser.mp4`), lisible par tous les navigateurs. Pour le remplacer, déposer un nouveau `teaser.mp4` au même emplacement.
- **Liens réseaux/plateformes** → remplacer les URL génériques (instagram.com, open.spotify.com, etc.) par les vrais profils de JAYDEN dans `index.html`.
- **Newsletter** → le formulaire fonctionne côté visuel ; le relier à un service (Mailchimp, Brevo…) pour collecter réellement les e-mails.
- **Contact** → utilise `mailto:contact@jaydenmusic.com` (à adapter à la vraie adresse).

## Développement local
Aucune dépendance. Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python3 -m http.server 8080
# puis http://localhost:8080
```

## Mise en ligne sur jaydenmusic.com (Combell)
Uploader le contenu du dépôt (index.html, css/, js/, assets/) à la racine web (`www` / `public_html`) via le gestionnaire de fichiers ou FTP de Combell. Le site est statique : aucun serveur applicatif nécessaire.
