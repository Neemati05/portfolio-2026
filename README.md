# Portfolio — Neemati M'chinda

Refonte du portfolio existant : structure multi-fichiers, éditable, compatible GitHub Pages.

## Structure

```
/
├── index.html              → page d'accueil
├── projets.html             → liste de tous les projets (avec filtre par catégorie)
├── a-propos.html
├── competences.html
├── contact.html
├── projets/
│   ├── mocha.html            → étude de cas MŌCHA (nouveau projet)
│   ├── calufa-beer.html
│   ├── logo-mn.html
│   ├── festival-greenland.html
│   ├── miss-tic.html
│   ├── juste-une-illusion.html
│   ├── projet-tennis.html
│   ├── cours-production-artistique.html
│   ├── blog-hailey-bieber.html
│   ├── nature-morte-3d.html
│   ├── animation-point-mchinda.html
│   └── _template.html        → à dupliquer pour un nouveau projet
├── css/
│   ├── style.css             → toutes les couleurs/typos sont des variables en haut du fichier
│   └── responsive.css
├── js/
│   ├── projects-data.js      → liste des projets (utilisée par la page Projets et la homepage)
│   └── script.js             → navigation mobile, animations, filtre, formulaire
└── assets/
    ├── images/  (à remplir — voir plus bas)
    ├── logos/
    ├── icons/
    └── fonts/
```

## ⚠️ Images manquantes

Je n'ai pas eu accès aux vraies images de ton portfolio (seulement au texte). Tous les emplacements visuels sont marqués par des blocs en pointillés « Image à ajouter (nom-de-fichier.jpg) ». Pour les remplacer, dans chaque page HTML remplace :

```html
<div class="media-hero">Visuel principal à ajouter (assets/images/xxx.jpg)</div>
```

par :

```html
<div class="media-hero"><img src="../assets/images/xxx.jpg" alt="Description du visuel"></div>
```

Fais de même pour les `.card-media` (page Projets / accueil) et les `.media-slot`.

## Ajouter un nouveau projet

1. Duplique `projets/_template.html`, renomme-le, remplis les zones marquées `<!-- MODIFIER ... -->`.
2. Ajoute un objet correspondant dans `js/projects-data.js` (copie un bloc existant).
3. C'est tout — le projet apparaît automatiquement sur `projets.html`, et sur la homepage si `featured: true`.

## Informations à compléter (non présentes dans le portfolio actuel)

- Nom de l'établissement de formation (page À propos)
- Objectifs professionnels / type de stage-alternance recherché (page À propos)
- URL LinkedIn réelle (actuellement un lien générique dans `contact.html`)
- Compétences UI/UX si applicable (Figma, prototypage...)
- Le formulaire de contact est une démo : il faut le relier à un service d'envoi réel (Formspree, EmailJS, ou un backend) — voir le commentaire `MODIFIER ICI` dans `js/script.js`

## Publier sur GitHub Pages

1. Pousse ce dossier sur la branche `main` de ton repo `portfolio-neemati`.
2. Dans les réglages GitHub Pages du repo, choisis la branche `main` et le dossier racine `/`.
3. Le site se met à jour automatiquement à chaque push.

## Design system

Toutes les couleurs et polices du site sont centralisées en haut de `css/style.css` (variables CSS `:root`). Change-les à un seul endroit pour modifier tout le site. Le projet MŌCHA utilise sa propre palette (verte/beige), définie localement dans `projets/mocha.html` uniquement, pour ne pas affecter le reste du site.
