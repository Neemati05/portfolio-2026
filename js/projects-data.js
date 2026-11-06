/* ==========================================================================
   projects-data.js
   Liste de tous les projets du portfolio, utilisée par projets.html
   pour générer les cartes automatiquement + gérer le filtrage.

   POUR AJOUTER UN PROJET : copie un bloc { ... } ci-dessous, remplis les
   champs, et crée le fichier projets/ton-projet.html (tu peux dupliquer
   projets/_template.html comme point de départ).
   ========================================================================== */

const PROJECTS = [
  {
    id: "mocha",
    name: "MŌCHA", // MODIFIER LE NOM
    category: "Branding", // Branding | Affiches | Web | Audiovisuel
    year: "2026", // MODIFIER L'ANNÉE
    featured: true,
    description: "Identité de marque complète pour un matcha premium fictif — direction artistique, packaging, campagne et digital.", // MODIFIER LA DESCRIPTION
    image: "assets/images/mocha-cover.jpg",
    link: "projets/mocha.html", // MODIFIER LE LIEN
    skills: ["Branding", "Direction artistique", "Packaging", "Illustrator", "Figma"]
  },
  {
    id: "calufa-beer",
    name: "Calufa Beer — Identité, packaging & site web",
    category: "Branding",
    year: "2023",
    featured: true,
    description: "Marque de bière fictive inspirée des cocktails d'Amérique latine : logo, packaging, étiquettes et site e-commerce complet.",
    image: "assets/images/calufa-ipanema-photo.jpg",
    link: "projets/calufa-beer.html",
    skills: ["Branding", "Packaging", "Illustrator", "Site web", "E-commerce", "Projet MMI"]
  },
  {
    id: "festival-greenland",
    name: "Festival Greenland",
    category: "Affiches",
    year: "2024",
    featured: true,
    description: "Affiche du festival fictif Greenland à Lieusaint — identité verte et festive, typographie expressive.",
    image: "assets/images/greenland-poster.jpg",
    link: "projets/festival-greenland.html",
    skills: ["Affiche", "Événementiel", "Typographie", "Illustrator"]
  },
  {
    id: "logo-mn",
    name: "Logo Portfolio — mN",
    category: "Branding",
    year: "2024",
    featured: false,
    description: "Création du logo personnel « mN », typographie organique et bubbly, contour jaune.",
    image: "assets/images/logo-mn.png",
    link: "projets/logo-mn.html",
    skills: ["Branding", "Illustrator", "Logo", "Identité"]
  },
  {
    id: "miss-tic",
    name: "Miss Tic — Biographie visuelle",
    category: "Affiches",
    year: "2024",
    featured: true,
    description: "Affiche typographique et infographique retraçant la vie de Radhia Aounallah (Miss Tic), artiste de street art parisienne.",
    image: "assets/images/miss-tic-poster.jpg",
    link: "projets/miss-tic.html",
    skills: ["Typographie", "Illustrator", "Infographie", "Street Art"],
    downloadLabel: "PDF"
  },
  {
    id: "juste-une-illusion",
    name: "Juste une illusion",
    category: "Affiches",
    year: "2024",
    featured: false,
    description: "Affiche pour le film « Juste une illusion » d'Éric Toledano & Olivier Nakache.",
    image: "assets/images/illusion-cover.jpg", // à ajouter
    link: "projets/juste-une-illusion.html",
    skills: ["Affiche cinéma", "Typographie", "Photoshop"],
    downloadLabel: "PNG"
  },
  {
    id: "projet-tennis",
    name: "Projet Tennis",
    category: "Affiches",
    year: "2024",
    featured: false,
    description: "Illustration vectorielle sur la thématique du tennis — composition et tracé vectoriel sous Illustrator.",
    image: "assets/images/tennis-cover.jpg", // à ajouter
    link: "projets/projet-tennis.html",
    skills: ["Illustrator", "Vectoriel", "Sport"],
    downloadLabel: "JPG"
  },
  {
    id: "cours-production",
    name: "Différentes créations — Production & culture artistique",
    category: "Affiches",
    year: "2024",
    featured: false,
    description: "Ensemble de créations réalisées en cours : compositions graphiques, mockups, illustrations et affiches variées.",
    image: "assets/images/cours-cover.jpg", // à ajouter
    link: "projets/cours-production-artistique.html",
    skills: ["Photoshop", "Illustrator", "Composition", "Cours"]
  },
  {
    id: "blog-hailey",
    name: "Mon blog — Hailey Bieber Vibes",
    category: "Web",
    year: "2024",
    featured: true,
    description: "Blog beauté & lifestyle sous WordPress, identité visuelle épurée inspirée de l'esthétique de Hailey Bieber.",
    image: "assets/images/blog-accueil.jpg",
    link: "projets/blog-hailey-bieber.html",
    skills: ["WordPress", "Web design", "Beauté", "Lifestyle", "SEO"]
  },
  {
    id: "nature-morte-3d",
    name: "Nature morte — Dépendance aux écrans",
    category: "Audiovisuel",
    year: "2024",
    featured: true,
    description: "Scène 3D modélisée sous Autodesk Maya explorant l'addiction numérique à travers une nature morte contemporaine.",
    image: "assets/images/naturemorte-hero.jpg",
    link: "projets/nature-morte-3d.html",
    skills: ["Maya 3D", "Modélisation", "Nature morte"]
  },
  {
    id: "animation-point",
    name: "Animation — Point M'chinda",
    category: "Audiovisuel",
    year: "2024",
    featured: false,
    description: "Projet d'animation réalisé sous Adobe Animate (.fla — calques, images clés, symboles).",
    image: "assets/images/animation-cover.jpg", // à ajouter
    link: "projets/animation-point-mchinda.html",
    skills: ["Adobe Animate", "Animation", "Flash"]
  }
];

// Exposé globalement pour être utilisé par script.js sur projets.html et index.html
window.PROJECTS = PROJECTS;
