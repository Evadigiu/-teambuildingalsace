// ============================================================
// TeamBuildingAlsace.fr — Données partagées
// Ce fichier est la source unique de vérité pour toutes les
// activités du site. Modifier ici = mis à jour partout.
// ============================================================

const activities = [
    {
      id: 1,
      revendiquee: true,
      offre: "categorie",
      partenaire: {
        nom: "Pomelo",
        tagline: "L\'agence événementielle pour faire l\'expérience de la nature",
        logo: "images/logo_pomelo.png",
        site: "https://pomelo-events.fr",
        categorie: "nature",
        interview: [
          { q: "Qu\'est-ce qui rend votre activité unique ?", r: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
          { q: "Pour quel type d\'équipe est-ce idéal ?", r: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
          { q: "Votre meilleur souvenir avec une équipe ?", r: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }
        ]
      },
      title: "Potager collaboratif et plus si affinitées",
      location: "Sur votre lieu de travail, Mulhouse",
      lat: 47.75096893310547,
      lng: 7.345345497131348,
      description: "Installez un nouvel outil compétitif, anti-stress, cool, collaboratif et stratégique sur votre lieux de travail. En une journée vos collaborateurs découvrent la permaculture, font des choix stratégiques d'espèces à planter et mettent en terre leur vieil ami ;-). Pendant ce temps là, nous analysons les capacités de collaboration de vos équipes!",
      objectifs: ["leadership", "cohesion", "stress", "innovation", "rse"],
      univers: ["nature", "bienetre", "strategie"],
      format: ["journee", "demijournee"],
      saison: ["printempsete"],
      env: ["outdoor"],
      prixMin: 80,
      participantsMin: 5,
      participantsMax: 50,
      duree: "Journée ou Demi-journée",
      emoji: "🌱",
      gradient: "linear-gradient(135deg, #134E5E, #71B280)",
      image: "images/pomelo.png",
      tags: [
        { label: "Cohésion", cls: "cat-cohesion" },
        { label: "RSE", cls: "cat-rse" },
        { label: "Nature & Plein air", cls: "cat-nature" },
        { label: "Outdoor", cls: "cat-outdoor" }
      ]
    },
    {
      id: 2,
      revendiquee: false,
      offre: "gratuit",
      title: "Survie & Leadership en Forêt Vosgienne",
      location: "Massif des Vosges, Obernai",
      lat: 48.4613,
      lng: 7.4831,
      description: "Immersion en pleine forêt vosgienne pour tester et développer les aptitudes de leadership de vos managers. Orienteering, construction de camp, gestion de crise simulée et prise de décision collective sous pression. Un programme conçu pour révéler les leaders naturels et renforcer la confiance mutuelle.",
      objectifs: ["leadership", "stress"],
      univers: ["nature", "sport"],
      format: ["journee"],
      saison: ["printempsete"],
      env: ["outdoor"],
      prixMin: 95,
      participantsMin: 8,
      participantsMax: 40,
      duree: "Journée complète",
      emoji: "🌲",
      gradient: "linear-gradient(135deg, #0F2027, #203A43, #2C5364)",
      tags: [
        { label: "Leadership", cls: "cat-leadership" },
        { label: "Gestion du stress", cls: "cat-stress" },
        { label: "Nature", cls: "cat-nature" },
        { label: "Challenge", cls: "cat-challenge" }
      ]
    },
    {
      id: 3,
      revendiquee: false,
      offre: "gratuit",
      title: "Atelier Poterie & Céramique Alsacienne",
      location: "Strasbourg",
      lat: 48.6317,
      lng: 7.7291,
      description: "Découvrez l'art de la poterie alsacienne dans un atelier artisanal authentique. En équipes, concevez et réalisez des pièces inspirées des motifs traditionnels d'Alsace. Un moment de créativité, de détente et de partage qui favorise l'expression individuelle et la coopération. Session de bien-être incluse.",
      objectifs: ["communication", "cohesion"],
      univers: ["creatif", "bienetre"],
      format: ["moins2h"],
      saison: ["toutesaisons"],
      env: ["indoor"],
      prixMin: 55,
      participantsMin: 6,
      participantsMax: 30,
      duree: "3 heures",
      emoji: "🏺",
      gradient: "linear-gradient(135deg, #8E2DE2, #4A00E0)",
      image: null,
      tags: [
        { label: "Créatif", cls: "cat-creatif" },
        { label: "Bien-être", cls: "cat-bienetre" },
        { label: "Communication", cls: "cat-communication" },
        { label: "Indoor", cls: "cat-indoor" }
      ]
    },
    {
  id: 4,
  revendiquee: false,
  offre: "gratuit",
  title: "Quiz",
  location: "Mulhouse",
  lat: 47.7499531,
  lng: 7.3416211,
  description: "Avec les manches et les jokers, vos collaborateurs vont devoir s’adapter en permanence, réfléchir ensemble, prendre des décisions rapidement… et les assumer en équipe. Bref, ça bouge, ça challenge, et surtout, c’est un super moment à partager tous·tes ensemble !",
  objectifs: ["communication", "cohesion"],
  univers: ["jeux"],
  format: ["moins2h"],
  saison: ["toutesaisons"],
  env: ["indoor"],
  prixMin: 35,
  participantsMin: 4,
  participantsMax: 50,
  duree: "1h15",
  emoji: "🧠",
  gradient: "linear-gradient(135deg, #1A1A2E, #5B2EFF)",
  image: null,
  tags: [
    { label: "Communication", cls: "cat-communication" },
    { label: "Cohésion", cls: "cat-cohesion" },
    { label: "Jeux & Digital", cls: "cat-jeux" },
    { label: "Indoor", cls: "cat-indoor" }
  ]
},
      {
      id: 5,
      revendiquee: false,
      offre: "gratuit",
      title: "Lancer de hache",
      location: "Wittenheim",
      lat: 47.7982383,
      lng: 7.3118694,
      description: "Le lancer de haches apporte une touche d’originalité à n'importe quelle sortie. C'est l'occasion de s'évader de la routine quotidienne. Cette activité insolite favorise aussi la camaraderie et la communication. Elle est adaptée à tous les niveaux, même sans expérience préalable. De plus, elle permet de libérer le stress et offre un sentiment d'accomplissement unique. Participer à une session de lancer de haches rendra votre sortie inoubliable. Ce mélange de compétition amicale et de plaisir pur captive les participants de tout âge.",
      objectifs: ["stress", "cohesion"],
      univers: ["sport", "wtf"],
      format: ["moins2h"],
      saison: ["toutesaisons"],
      env: ["indoor"],
      prixMin: 20,
      participantsMin: 1,
      participantsMax: 100,
      duree: "2h",
      emoji: "🪓",
      gradient: "linear-gradient(135deg, #134E5E, #71B280)",
      image: null,
      tags: [
        { label: "Cohésion", cls: "cat-cohesion" },
        { label: "Sport & Adrénaline", cls: "cat-sport" },
        { label: "Indoor", cls: "cat-indoor" }
      ]
    },
{
  id: 6,
  revendiquee: false,
  offre: "gratuit",
  title: "Escape game dans votre entreprise",
  location: "Dans votre entreprise, Strasbourg",
  lat: 48.5897,
  lng: 7.7407,
  description: "Transformez vos locaux en terrain d'aventure avec un escape game clé en main. Scénario d'espionnage immersif, énigmes et manipulation d'objets en équipes encadrées par des maîtres du jeu. Communication, logique et gestion du temps sont essentielles. Idéal pour animer un séminaire ou renforcer la cohésion sans contrainte logistique.",
  objectifs: ["communication", "cohesion"],
  univers: ["jeux"],
  env: ["indoor"],
  format: ["moins2h"],
  saison: ["toutesaisons"],
  prixMin: 33,
  participantsMin: 2,
  participantsMax: 24,
  duree: "1h30",
  emoji: "🧩",
  gradient: "linear-gradient(135deg, #1A1A2E, #5B2EFF)",
  image: null,
  tags: [
    { label: "Communication", cls: "cat-communication" },
    { label: "Cohésion", cls: "cat-cohesion" },
    { label: "Jeux & Digital", cls: "cat-jeux" },
    { label: "Indoor", cls: "cat-indoor" }
  ]
},
    {
  id: 7,
  revendiquee: true,
  offre: "partenaire",
  partenaire: {
    nom: "EVA",
    site: "https://www.eva.gg/fr-FR/your-events/team-building",
  },
  title: "Team Building Réalité Virtuelle — EVA Mulhouse",
  location: "6 Rue du Nonnenbruch, Wittenheim",
  lat: 47.8089,
  lng: 7.3364,
  description: "Plongez vos équipes dans une arène de réalité virtuelle de 500m² à Wittenheim. Battle Arena en équipes, escape games VR dans les univers Assassin's Creed et Prince of Persia, fléchettes augmentées au Cyber Bar. Un team building immersif clé en main, accessible à tous les niveaux, avec accompagnement personnalisé et espace restauration sur place.",
  objectifs: ["cohesion", "communication", "stress"],
  univers: ["jeux", "sport"],
  env: ["indoor"],
  format: ["moins2h", "demijournee"],
  saison: ["toutesaisons"],
  prixMin: 19,
  participantsMin: 2,
  participantsMax: 200,
  duree: "40 min à demi-journée",
  emoji: "🥽",
  gradient: "linear-gradient(135deg, #0D0D0D, #5B2EFF)",
  image: "images/EVA.webp",
  tags: [
    { label: "Jeux & Digital", cls: "cat-jeux" },
    { label: "Sport & Adrénaline", cls: "cat-sport" },
    { label: "Indoor", cls: "cat-indoor" },
    { label: "What the Fuck", cls: "cat-wtf" }
  ]
},
    {
  id: 8,
  revendiquee: true,
  offre: "partenaire",
  partenaire: {
    nom: "Xperience Park",
    site: "https://www.xperience-park.com/evenements/team-building/",
  },
  title: "Team Building Trampoline & Sports Indoor - Xperience Park",
  location: "6 Rue du Nonnenbruch, Wittenheim",
  lat: 47.8089,
  lng: 7.3364,
  description: "1 500 m² d'espaces de jeux à Wittenheim pour un team building original et sur-mesure. Trampoline, Ninja Warrior, Puissance 4 basket, arcades — jusqu'à 100 personnes dans un cadre fun et convivial. Salle de 200 m² avec écran et vidéoprojecteur disponible pour vos temps de travail.",
  objectifs: ["cohesion", "communication", "stress"],
  univers: ["sport", "jeux"],
  env: ["indoor"],
  format: ["demijournee", "journee"],
  saison: ["toutesaisons"],
  prixMin: 20,
  participantsMin: 10,
  participantsMax: 100,
  duree: "Demi-journée ou journée",
  emoji: "🤸",
  gradient: "linear-gradient(135deg, #B71C1C, #E53935)",
  image: "images/Xperiencepark.jpg",
  tags: [
    { label: "Sport & Adrénaline", cls: "cat-sport" },
    { label: "Cohésion", cls: "cat-cohesion" },
    { label: "Jeux & Digital", cls: "cat-jeux" },
    { label: "Indoor", cls: "cat-indoor" }
  ]
},
  {
    id: 9,
    revendiquee: false,
    offre: "gratuit",
    title: "Rallye gourmand dans le centre historique",
    location: "Colmar",
    lat: 48.0793589,
    lng: 7.358512,
    description: "Partez à la découverte du centre historique de Colmar à travers un rallye gourmand mêlant énigmes, dégustations et défis en équipe. Entre maisons à colombages et ruelles pittoresques, les participants avancent d\'étape en étape en découvrant les spécialités locales. Ce format ludique stimule la réflexion collective et encourage la communication dans une ambiance conviviale.",
    objectifs: ["cohesion", "communication"],
    univers: ["gastronomie", "culture"],
    env: ["outdoor"],
    format: ["demijournee"],
    saison: ["toutesaisons"],
    prixMin: 35,
    participantsMin: 6,
    participantsMax: 60,
    duree: "2h30",
    emoji: "🥨",
    gradient: "linear-gradient(135deg, #F2994A, #F2C94C)",
    image: "images/rallye-gourmand-colmar.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Gastronomie & Vins", cls: "cat-gastronomie" },{ label: "Culture & Patrimoine", cls: "cat-culture" },{ label: "Outdoor", cls: "cat-outdoor" }]
  },
  {
    id: 10,
    revendiquee: false,
    offre: "gratuit",
    title: "Escape game immersif",
    location: "Colmar",
    lat: 48.0793589,
    lng: 7.358512,
    description: "Enfermés dans une salle thématique, les participants résolvent des énigmes pour s\'échapper dans un temps imparti. Chaque scénario plonge les équipes dans un univers captivant où logique, observation et communication sont essentielles. Ce format révèle les dynamiques de groupe et renforce la coopération.",
    objectifs: ["cohesion", "communication"],
    univers: ["jeux"],
    env: ["indoor"],
    format: ["moins2h"],
    saison: ["toutesaisons"],
    prixMin: 22,
    participantsMin: 3,
    participantsMax: 30,
    duree: "1h30",
    emoji: "🧩",
    gradient: "linear-gradient(135deg, #1D2671, #C33764)",
    image: "images/escape-game-colmar.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Communication", cls: "cat-communication" },{ label: "Jeux & Digital", cls: "cat-jeux" },{ label: "Indoor", cls: "cat-indoor" }]
  },
  {
    id: 11,
    revendiquee: false,
    offre: "gratuit",
    title: "Atelier cuisine en équipe",
    location: "Colmar",
    lat: 48.0793,
    lng: 7.3585,
    description: "Répartis en brigades, les participants préparent un menu complet sous la direction d\'un chef. Organisation, communication et gestion du temps sont essentielles pour réussir le service. L\'activité stimule la coopération et valorise chaque rôle dans une dynamique collective, avant un moment convivial de dégustation.",
    objectifs: ["cohesion", "communication"],
    univers: ["gastronomie"],
    env: ["indoor"],
    format: ["demijournee"],
    saison: ["toutesaisons"],
    prixMin: 45,
    participantsMin: 6,
    participantsMax: 40,
    duree: "3h",
    emoji: "👨‍🍳",
    gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
    image: "images/atelier-cuisine-equipe.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Communication", cls: "cat-communication" },{ label: "Gastronomie & Vins", cls: "cat-gastronomie" },{ label: "Indoor", cls: "cat-indoor" }]
  },
  {
    id: 12,
    revendiquee: false,
    offre: "gratuit",
    title: "Chasse au trésor dans le vignoble",
    location: "Ribeauvillé",
    lat: 48.1951,
    lng: 7.3196,
    description: "Explorez les vignobles alsaciens à travers une chasse au trésor en équipe. Entre énigmes, dégustations et étapes dans les villages pittoresques, les participants avancent en résolvant des missions collectives. L\'expérience combine découverte du territoire, coopération et convivialité dans un cadre naturel exceptionnel.",
    objectifs: ["cohesion", "communication"],
    univers: ["gastronomie", "nature", "culture"],
    env: ["outdoor"],
    format: ["demijournee"],
    saison: ["printempsete"],
    prixMin: 30,
    participantsMin: 6,
    participantsMax: 80,
    duree: "2h30",
    emoji: "🍇",
    gradient: "linear-gradient(135deg, #7F00FF, #E100FF)",
    image: "images/chasse-tresor-vignoble.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Gastronomie & Vins", cls: "cat-gastronomie" },{ label: "Nature & Plein air", cls: "cat-nature" },{ label: "Outdoor", cls: "cat-outdoor" }]
  },
  {
    id: 13,
    revendiquee: false,
    offre: "gratuit",
    title: "Parcours ninja et défis physiques",
    location: "Wittenheim",
    lat: 47.7508,
    lng: 7.3359,
    description: "Plongez vos équipes dans un parcours d\'obstacles inspiré des émissions type Ninja Warrior. Sauts, équilibre, franchissements et défis physiques s\'enchaînent dans un environnement ludique et sécurisé. L\'activité encourage le dépassement de soi tout en créant une dynamique collective basée sur l\'encouragement.",
    objectifs: ["cohesion", "stress"],
    univers: ["sport", "jeux"],
    env: ["indoor"],
    format: ["moins2h"],
    saison: ["toutesaisons"],
    prixMin: 18,
    participantsMin: 6,
    participantsMax: 100,
    duree: "2h",
    emoji: "🔥",
    gradient: "linear-gradient(135deg, #F00000, #DC281E)",
    image: "images/parcours-ninja.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Sport & Adrénaline", cls: "cat-sport" },{ label: "Jeux & Digital", cls: "cat-jeux" },{ label: "Indoor", cls: "cat-indoor" }]
  },
  {
    id: 14,
    revendiquee: false,
    offre: "gratuit",
    title: "Escape game narratif immersif",
    location: "Strasbourg",
    lat: 48.581,
    lng: 7.745,
    description: "Plongez dans un scénario immersif où chaque détail compte : décors poussés, narration engageante et énigmes scénarisées. Les équipes collaborent pour progresser dans l\'histoire et atteindre leur objectif. Particulièrement adapté aux groupes souhaitant une expérience qualitative, il favorise une cohésion naturelle.",
    objectifs: ["cohesion", "communication"],
    univers: ["jeux", "creatif"],
    env: ["indoor"],
    format: ["moins2h"],
    saison: ["toutesaisons"],
    prixMin: 25,
    participantsMin: 3,
    participantsMax: 25,
    duree: "1h30",
    emoji: "🔍",
    gradient: "linear-gradient(135deg, #434343, #000000)",
    image: "images/escape-game-narratif-strasbourg.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Communication", cls: "cat-communication" },{ label: "Jeux & Digital", cls: "cat-jeux" },{ label: "Créatif", cls: "cat-creatif" },{ label: "Indoor", cls: "cat-indoor" }]
  },
  {
    id: 15,
    revendiquee: false,
    offre: "gratuit",
    title: "Atelier brassage de bière artisanale",
    location: "Strasbourg",
    lat: 48.6005,
    lng: 7.7769,
    description: "Initiez vos équipes à la fabrication de bière artisanale en participant à toutes les étapes du brassage. Les participants travaillent ensemble pour créer leur propre recette, favorisant coopération et créativité. L\'activité se conclut par une dégustation conviviale autour des créations.",
    objectifs: ["cohesion", "communication", "innovation"],
    univers: ["gastronomie", "creatif"],
    env: ["indoor"],
    format: ["demijournee"],
    saison: ["toutesaisons"],
    prixMin: 40,
    participantsMin: 6,
    participantsMax: 30,
    duree: "2h30",
    emoji: "🍺",
    gradient: "linear-gradient(135deg, #f12711, #f5af19)",
    image: "images/brassage-biere-artisanale.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Innovation", cls: "cat-innovation" },{ label: "Gastronomie & Vins", cls: "cat-gastronomie" },{ label: "Indoor", cls: "cat-indoor" }]
  },
  {
    id: 16,
    revendiquee: false,
    offre: "gratuit",
    title: "Atelier street-art collaboratif",
    location: "Mulhouse",
    lat: 47.7486,
    lng: 7.3392,
    description: "Encadrées par un artiste, les équipes participent à la création d\'une fresque street-art collective. Chaque groupe contribue à une partie de l\'œuvre finale. Ce format favorise la créativité, l\'expression collective et la coordination. Le résultat constitue une œuvre commune forte, symbole du travail collaboratif.",
    objectifs: ["cohesion", "innovation"],
    univers: ["creatif", "wtf"],
    env: ["indoor"],
    format: ["demijournee"],
    saison: ["toutesaisons"],
    prixMin: 35,
    participantsMin: 8,
    participantsMax: 120,
    duree: "2h30",
    emoji: "🎨",
    gradient: "linear-gradient(135deg, #fc4a1a, #f7b733)",
    image: "images/street-art-collaboratif-mulhouse.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Innovation", cls: "cat-innovation" },{ label: "Créatif", cls: "cat-creatif" },{ label: "What the Fuck", cls: "cat-wtf" },{ label: "Indoor", cls: "cat-indoor" }]
  },
  {
    id: 17,
    revendiquee: false,
    offre: "gratuit",
    title: "Rallye en voitures vintage",
    location: "Colmar",
    lat: 48.079,
    lng: 7.358,
    description: "Partez en équipe à bord de véhicules vintage pour un rallye à travers les paysages alsaciens. Entre énigmes, défis et étapes gourmandes, les participants avancent d\'un point à un autre en autonomie. Cette expérience premium combine découverte du territoire, esprit d\'équipe et plaisir de conduite.",
    objectifs: ["cohesion", "communication"],
    univers: ["gastronomie", "culture", "wtf"],
    env: ["outdoor"],
    format: ["demijournee"],
    saison: ["printempsete"],
    prixMin: 80,
    participantsMin: 6,
    participantsMax: 50,
    duree: "3h",
    emoji: "🚗",
    gradient: "linear-gradient(135deg, #8360c3, #2ebf91)",
    image: "images/rallye-voitures-vintage-alsace.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Gastronomie & Vins", cls: "cat-gastronomie" },{ label: "Culture & Patrimoine", cls: "cat-culture" },{ label: "What the Fuck", cls: "cat-wtf" },{ label: "Outdoor", cls: "cat-outdoor" }]
  },
  {
    id: 18,
    revendiquee: false,
    offre: "gratuit",
    title: "Création de fresque collaborative",
    location: "Mulhouse",
    lat: 47.75,
    lng: 7.335,
    description: "Invitez vos équipes à créer une œuvre collective à travers un atelier artistique guidé. Chaque groupe travaille sur une partie d\'une fresque globale, révélée à la fin de l\'activité. Ce format favorise la créativité, l\'expression individuelle et la coordination collective dans une ambiance positive.",
    objectifs: ["cohesion", "innovation"],
    univers: ["creatif", "bienetre"],
    env: ["indoor"],
    format: ["demijournee"],
    saison: ["toutesaisons"],
    prixMin: 35,
    participantsMin: 8,
    participantsMax: 100,
    duree: "2h30",
    emoji: "🖼️",
    gradient: "linear-gradient(135deg, #FF7E5F, #FEB47B)",
    image: "images/fresque-collaborative-mulhouse.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Innovation", cls: "cat-innovation" },{ label: "Créatif", cls: "cat-creatif" },{ label: "Bien-être", cls: "cat-bienetre" },{ label: "Indoor", cls: "cat-indoor" }]
  },
  {
    id: 19,
    revendiquee: false,
    offre: "gratuit",
    title: "Construction de radeau en équipe",
    location: "Sélestat",
    lat: 48.259,
    lng: 7.454,
    description: "Relevez un défi collectif en construisant un radeau à partir de matériaux fournis. Les équipes imaginent, conçoivent et assemblent une structure capable de flotter avant de la tester sur l\'eau. Fun et fédératrice, cette activité favorise l\'entraide, la communication et la créativité en plein air.",
    objectifs: ["cohesion", "communication", "innovation"],
    univers: ["sport", "nature"],
    env: ["outdoor"],
    format: ["demijournee"],
    saison: ["printempsete"],
    prixMin: 45,
    participantsMin: 8,
    participantsMax: 80,
    duree: "3h",
    emoji: "🛶",
    gradient: "linear-gradient(135deg, #56CCF2, #2F80ED)",
    image: "images/construction-radeau-selestat.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Communication", cls: "cat-communication" },{ label: "Sport & Adrénaline", cls: "cat-sport" },{ label: "Nature & Plein air", cls: "cat-nature" },{ label: "Outdoor", cls: "cat-outdoor" }]
  },
  {
    id: 20,
    revendiquee: false,
    offre: "gratuit",
    title: "Création de parfum sur mesure",
    location: "Strasbourg",
    lat: 48.5734,
    lng: 7.7521,
    description: "Initiez vos équipes à l\'art de la parfumerie en créant leur propre fragrance. Encadrés par un expert, les participants découvrent les bases de la composition olfactive. Chaque groupe collabore pour imaginer une identité sensorielle unique dans un format original et accessible à tous.",
    objectifs: ["innovation", "cohesion"],
    univers: ["creatif", "bienetre"],
    env: ["indoor"],
    format: ["moins2h"],
    saison: ["toutesaisons"],
    prixMin: 50,
    participantsMin: 6,
    participantsMax: 30,
    duree: "2h",
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    image: "images/creation-parfum-strasbourg.webp",
    tags: [{ label: "Innovation", cls: "cat-innovation" },{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Créatif", cls: "cat-creatif" },{ label: "Bien-être", cls: "cat-bienetre" },{ label: "Indoor", cls: "cat-indoor" }]
  },
  {
    id: 21,
    revendiquee: false,
    offre: "gratuit",
    title: "Rallye en gyropode",
    location: "Strasbourg",
    lat: 48.5734,
    lng: 7.7521,
    description: "Parcourez la ville en gyropode à travers un rallye ludique ponctué d\'énigmes et de défis. Les équipes s\'orientent, collaborent et relèvent des challenges tout au long du parcours. Accessible après une rapide prise en main, ce format offre une expérience originale mêlant mobilité et jeu collectif.",
    objectifs: ["cohesion", "communication"],
    univers: ["sport", "wtf", "culture"],
    env: ["outdoor"],
    format: ["moins2h"],
    saison: ["printempsete"],
    prixMin: 45,
    participantsMin: 6,
    participantsMax: 40,
    duree: "2h",
    emoji: "🛴",
    gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
    image: "images/rallye-gyropode-strasbourg.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Communication", cls: "cat-communication" },{ label: "Sport & Adrénaline", cls: "cat-sport" },{ label: "What the Fuck", cls: "cat-wtf" },{ label: "Outdoor", cls: "cat-outdoor" }]
  },
  {
    id: 22,
    revendiquee: false,
    offre: "gratuit",
    title: "Parcours accrobranche en équipe",
    location: "Haguenau",
    lat: 48.8156,
    lng: 7.7906,
    description: "Évoluez en équipe sur des parcours en hauteur mêlant tyroliennes, ponts suspendus et défis d\'équilibre. Les participants s\'encouragent et se soutiennent pour progresser. Ce format favorise la confiance, l\'entraide et le dépassement de soi dans un environnement naturel exceptionnel.",
    objectifs: ["cohesion", "stress"],
    univers: ["sport", "nature"],
    env: ["outdoor"],
    format: ["demijournee"],
    saison: ["printempsete"],
    prixMin: 28,
    participantsMin: 6,
    participantsMax: 100,
    duree: "2h30",
    emoji: "🌳",
    gradient: "linear-gradient(135deg, #134E5E, #71B280)",
    image: "images/accrobranche-haguenau.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Sport & Adrénaline", cls: "cat-sport" },{ label: "Nature & Plein air", cls: "cat-nature" },{ label: "Outdoor", cls: "cat-outdoor" }]
  },
  {
    id: 23,
    revendiquee: false,
    offre: "gratuit",
    title: "Atelier chocolat en équipe",
    location: "Colmar",
    lat: 48.0793,
    lng: 7.3585,
    description: "Encadrés par un artisan chocolatier, les participants réalisent différentes créations en équipe. Organisation, précision et collaboration sont essentielles pour réussir les recettes. L\'activité combine apprentissage, créativité et moment de partage avant une dégustation conviviale.",
    objectifs: ["cohesion", "communication"],
    univers: ["gastronomie", "creatif"],
    env: ["indoor"],
    format: ["moins2h"],
    saison: ["toutesaisons"],
    prixMin: 40,
    participantsMin: 6,
    participantsMax: 30,
    duree: "2h",
    emoji: "🍫",
    gradient: "linear-gradient(135deg, #654321, #d7ccc8)",
    image: "images/atelier-chocolat-colmar.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Communication", cls: "cat-communication" },{ label: "Gastronomie & Vins", cls: "cat-gastronomie" },{ label: "Créatif", cls: "cat-creatif" },{ label: "Indoor", cls: "cat-indoor" }]
  },
  {
    id: 24,
    revendiquee: false,
    offre: "gratuit",
    title: "Dégustation sensorielle à l'aveugle",
    location: "Strasbourg",
    lat: 48.5734,
    lng: 7.7521,
    description: "Plongez vos équipes dans une expérience sensorielle unique autour de dégustations à l\'aveugle. Les participants identifient arômes, textures et saveurs sans repères visuels. Ce format stimule l\'écoute, la communication et la confiance dans une ambiance conviviale et immersive.",
    objectifs: ["communication", "cohesion"],
    univers: ["gastronomie", "bienetre"],
    env: ["indoor"],
    format: ["moins2h"],
    saison: ["toutesaisons"],
    prixMin: 35,
    participantsMin: 6,
    participantsMax: 40,
    duree: "2h",
    emoji: "👃",
    gradient: "linear-gradient(135deg, #8360c3, #2ebf91)",
    image: "images/degustation-aveugle-strasbourg.webp",
    tags: [{ label: "Communication", cls: "cat-communication" },{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Gastronomie & Vins", cls: "cat-gastronomie" },{ label: "Bien-être", cls: "cat-bienetre" },{ label: "Indoor", cls: "cat-indoor" }]
  },
  {
    id: 25,
    revendiquee: false,
    offre: "gratuit",
    title: "Fabrication de fromage fermier",
    location: "Altkirch",
    lat: 47.6246,
    lng: 7.2386,
    description: "Découvrez les secrets de fabrication du fromage au sein d\'une ferme locale. Les équipes participent aux différentes étapes : transformation du lait, moulage et affinage. Cette activité offre une immersion authentique dans le terroir alsacien, idéale pour créer du lien dans un cadre naturel.",
    objectifs: ["cohesion", "communication"],
    univers: ["gastronomie", "nature"],
    env: ["outdoor"],
    format: ["demijournee"],
    saison: ["toutesaisons"],
    prixMin: 45,
    participantsMin: 6,
    participantsMax: 30,
    duree: "2h30",
    emoji: "🧀",
    gradient: "linear-gradient(135deg, #F7971E, #FFD200)",
    image: "images/fabrication-fromage-alsace.webp",
    tags: [{ label: "Cohésion", cls: "cat-cohesion" },{ label: "Communication", cls: "cat-communication" },{ label: "Gastronomie & Vins", cls: "cat-gastronomie" },{ label: "Nature & Plein air", cls: "cat-nature" },{ label: "Outdoor", cls: "cat-outdoor" }]
  },
  ]

// ── Correspondances ville → mots-clés de localisation ──
var activeVille = null;
var villeMap = {
    strasbourg: ['strasbourg', 'souffelweyersheim', 'sur votre lieu de travail', 'dans votre entreprise'],
    colmar: ['colmar', 'route des vins'],
    selestat: ['selestat', 'sélestat'],
    ribeauville: ['ribeauvillé', 'ribeauville'],
    altkirch: ['altkirch'],
    haguenau: ['haguenau'],
    'saint-louis': ['saint-louis', 'saint louis'],
    mulhouse: ['mulhouse', 'wittenheim'],
    vosges: ['vosges', 'massif', 'obernai']
  };

// ── Labels affichés pour chaque univers ──
const universLabels = {
  nature: 'Nature & Plein air',
  gastronomie: 'Gastronomie & Vins',
  creatif: 'Artistique & Créatif',
  bienetre: 'Bien-être & Slow',
  sport: 'Sport & Adrénaline',
  jeux: 'Jeux & Digital',
  culture: 'Culture & Patrimoine',
  evenementiel: 'Événementiel',
  wtf: 'What the Fuck',
  strategie: 'Stratégie & Logique',
};

// ── Rendu d'une carte activité (utilisé sur toutes les pages) ──
function getOffreBadge(a) {
  if (!a.revendiquee) return '';
  const offre = a.offre || 'essentiel';
  if (offre === 'visible') return '<div class="offre-badge offre-visible">✓ Vérifié</div>';
  if (offre === 'partenaire') return '<div class="offre-badge offre-partenaire">⭐ Partenaire</div>';
  if (offre === 'categorie') return '<div class="offre-badge offre-categorie">🏆 Partenaire Officiel</div>';
  return '';
}

function getCardClass(a) {
  if (!a.revendiquee) return 'act-card';
  const offre = a.offre || 'essentiel';
  if (offre === 'partenaire') return 'act-card act-card--partenaire';
  if (offre === 'categorie') return 'act-card act-card--categorie';
  return 'act-card';
}

function renderActivityCard(a) {
  const tagHtml = (a.tags || []).map(t =>
    `<span class="card-tag ${t.cls}">${t.label}</span>`
  ).join('');

  const offre = a.offre || (a.revendiquee ? 'essentiel' : 'gratuit');

  // Photo : uniquement si offre >= essentiel ET revendiquee
  const showPhoto = a.revendiquee && a.image && offre !== 'gratuit';

  // Toujours afficher le gradient comme fond (placeholder pendant le chargement)
  const containerStyle = `background:${a.gradient}`;

  const unclaimedBanner = !a.revendiquee ? `
    <div class="card-unclaimed">
      <span class="card-unclaimed-text">Fiche non revendiquée</span>
      <a href="referencer.html" class="card-unclaimed-btn" onclick="event.stopPropagation()">Revendiquer →</a>
    </div>` : '';

  const offreBadge = getOffreBadge(a);

  // Image avec lazy loading et fondu à l'apparition
  const imgHtml = showPhoto ? `
    <img
      src="${a.image}"
      alt="${a.title}"
      loading="lazy"
      decoding="async"
      onload="this.classList.add('loaded')"
      class="card-lazy-img"
    >` : `<div class="card-img-placeholder">${a.emoji}</div>`;

  // Lien site : uniquement visible+
  const siteLink = (offre === 'visible' || offre === 'partenaire' || offre === 'categorie') && a.partenaire && a.partenaire.site
    ? `<a href="${a.partenaire.site}" target="_blank" class="card-site-link" onclick="event.stopPropagation()">🔗 Voir le site</a>`
    : '';

  return `
    <div class="${getCardClass(a)}" onclick="openModal(${a.id})">
      <div class="card-img" style="${containerStyle}">
        ${imgHtml}
        <div class="card-badge">${a.duree}</div>
        ${offreBadge}
        ${unclaimedBanner}
      </div>
      <div class="card-body">
        <div class="card-tags">${tagHtml}</div>
        <div class="card-title">${a.title}</div>
        <div class="card-location">📍 ${a.location}</div>
        <div class="card-footer">
          <span class="card-price">À partir de <strong>${a.prixMin} €</strong>/pers.</span>
          ${siteLink || `<span class="card-participants">👥 ${a.participantsMin}–${a.participantsMax}</span>`}
        </div>
      </div>
    </div>`;
}

// ── Trier les activités par offre (partenaires en premier) ──
function sortByOffre(acts) {
  const order = { categorie: 0, partenaire: 1, visible: 2, essentiel: 3, gratuit: 4 };
  return [...acts].sort((a, b) => {
    const oa = order[a.offre || (a.revendiquee ? 'essentiel' : 'gratuit')] ?? 4;
    const ob = order[b.offre || (b.revendiquee ? 'essentiel' : 'gratuit')] ?? 4;
    return oa - ob;
  });
}
