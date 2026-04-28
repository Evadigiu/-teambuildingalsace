// ============================================================
// TeamBuildingAlsace.fr — Données partagées
// Ce fichier est la source unique de vérité pour toutes les
// activités du site. Modifier ici = mis à jour partout.
// ============================================================

const activities = [
    {
      id: 1,
      revendiquee: true,
      title: "Potager collaboratif et plus si affinitées",
      location: "Mulhouse",
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
      title: "Survie & Leadership en Forêt Vosgienne",
      location: "Vosges",
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
      title: "Lancer de hache",
      location: "Mulhouse",
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
  title: "Escape game dans votre entreprise",
  location: "Strasbourg",
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
  title: "Team Building Réalité Virtuelle — EVA Mulhouse",
  location: "Mulhouse",
  lat: 47.8089,
  lng: 7.3364,
  description: "Plongez vos équipes dans une arène de réalité virtuelle de 450m² à Wittenheim. Battle Arena en équipes, escape games VR dans les univers Assassin's Creed et Prince of Persia, fléchettes augmentées au Cyber Bar. Un team building immersif clé en main, accessible à tous les niveaux, avec accompagnement personnalisé et espace restauration sur place.",
  objectifs: ["cohesion", "communication", "stress"],
  univers: ["jeux", "sport"],
  env: ["indoor"],
  format: ["moins2h", "demijournee"],
  saison: ["toutesaisons"],
  prixMin: 40,
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
  title: "Team Building Trampoline & Sports Indoor - Xperience Park",
  location: "Mulhouse",
  lat: 47.8089,
  lng: 7.3364,
  description: "1 500 m² d'espaces de jeux à Wittenheim pour un team building original et sur-mesure. Trampoline, Ninja Warrior, Puissance 4 basket, réalité augmentée Hado, arcades — jusqu'à 100 personnes dans un cadre fun et convivial. Salle de 200 m² avec écran et vidéoprojecteur disponible pour vos temps de travail.",
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
  ]

// ── Correspondances ville → mots-clés de localisation ──
var activeVille = null;
  var villeMap = {
    strasbourg: ['strasbourg', 'souffelweyersheim', 'sur votre lieu de travail', 'dans votre entreprise'],
    colmar: ['colmar', 'route des vins'],
    selestat: ['selestat', 'sélestat'],
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
function renderActivityCard(a) {
  const tagHtml = (a.tags || []).map(t =>
    `<span class="card-tag ${t.cls}">${t.label}</span>`
  ).join('');

  const imgStyle = a.image
    ? `background-image:url('${a.image}');background-size:cover;background-position:center`
    : `background:${a.gradient}`;

  const unclaimedBanner = !a.revendiquee ? `
    <div class="card-unclaimed">
      <span class="card-unclaimed-text">Fiche non revendiquée</span>
      <a href="referencer.html" class="card-unclaimed-btn" onclick="event.stopPropagation()">Revendiquer →</a>
    </div>` : '';

  return `
    <div class="act-card" onclick="openModal(${a.id})">
      <div class="card-img" style="${imgStyle}">
        ${!a.image ? `<div class="card-img-placeholder">${a.emoji}</div>` : ''}
        <div class="card-badge">${a.duree}</div>
        ${unclaimedBanner}
      </div>
      <div class="card-body">
        <div class="card-tags">${tagHtml}</div>
        <div class="card-title">${a.title}</div>
        <div class="card-location">📍 ${a.location}</div>
        <div class="card-footer">
          <span class="card-price">À partir de <strong>${a.prixMin} €</strong>/pers.</span>
          <span class="card-participants">👥 ${a.participantsMin}–${a.participantsMax}</span>
        </div>
      </div>
    </div>`;
}
