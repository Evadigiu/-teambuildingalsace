[CLAUDE.md](https://github.com/user-attachments/files/29805060/CLAUDE.md)
# CLAUDE.md — TeamBuildingAlsace.fr (TBA)

Ce fichier oriente Claude Code sur le projet. Lis-le en entier avant toute modification.

## Ce qu'est le projet

TeamBuildingAlsace.fr est un **annuaire B2B d'activités de team building en Alsace**, ciblant
les **RH et dirigeants** (côté demande) et les **prestataires** (côté offre, secondaire).

- **Stack : site statique en HTML / CSS / JavaScript vanilla.** Aucun framework, aucune étape de
  build, aucun bundler. Hébergé sur **GitHub Pages**.
- **On ne teste PAS via un serveur local** : on ouvre le fichier `.html` dans un navigateur, ou on
  vérifie le rendu une fois poussé sur GitHub Pages.
- **Livrer des fichiers complets, prêts à déployer.** L'utilisatrice bosse via GitHub — pas de
  snippets à recoller à la main sauf demande explicite.

## Architecture (à respecter, ne pas casser)

- **`activities.js` = source unique de vérité** pour les activités. Il définit aussi `villeMap`,
  `activeVille`, `sortByOffre()` et `renderActivityCard()`, utilisés par toutes les pages.
  Ne jamais dupliquer la logique de rendu des cartes ailleurs.
- **`nav.js` injecte le header, la nav desktop et le menu mobile** dans chaque page (dans un
  `<header></header>` vide et un `<div id="mobile-nav"></div>` vide). C'est le patron d'injection
  de partiels à imiter pour tout élément partagé.
- **`index.html`** contient les filtres, la modale devis (Formspree) et lit les paramètres d'URL
  `?ville=`, `?univers=`, `?activite=` pour filtrer / ouvrir une fiche.
- **Pages-villes** : `strasbourg.html`, `colmar.html`, `mulhouse.html`, `vosges.html`,
  `selestat.html`, `saint-louis.html`. Chacune est un fichier HTML autonome avec son `<style>` inline.
  ⚠️ **Elles ont divergé** (voir « Dette technique connue »).
- **Pages-univers** : nature, gastronomie, creatif, bienetre, sport, jeux, culture, wtf, strategie.
- Autres : `blog.html`, `contact.html`, `referencer.html`, `cgv.html`, `mentions-legales.html`.

## Conventions NON négociables

### URLs / SEO
- **Canonical = `https://teambuildingalsace.fr/<page>.html`** — domaine apex (PAS de `www`),
  AVEC `.html`. C'est la forme servie par GitHub Pages.
- `og:url` et le champ `url` du JSON-LD **doivent être identiques au canonical**.
- Dans le JSON-LD, le breadcrumb « Accueil » pointe vers `https://teambuildingalsace.fr/`.
- Chaque page doit avoir : un canonical correct, un bloc Open Graph (og:title, og:description,
  og:type, og:url), et un JSON-LD `WebPage` + `BreadcrumbList` cohérent.
- **Année-libellé** (titre, og, nom du schema, fil d'ariane) : convention du site = **2026**.

### Années : distinction critique
- **NE JAMAIS modifier une année attachée à une donnée sourcée** (ex : « INSEE 2024 »,
  « CCI 2025 », « Deloitte 2024 », « chômage T3 2025 », « OFS Suisse 2024 »). Changer ces
  millésimes = falsifier la donnée. Interdit.
- Ne modifier que les **années-libellés purement décoratives** (titre SEO, eyebrow de section
  sans donnée dessous). En cas de doute : ne pas toucher, signaler.

### Formulaire concierge (lead)
- Toutes les pages-villes finissent par une **section concierge** (formulaire) qui POST vers
  **Formspree : `https://formspree.io/f/xwvaajow`** (même endpoint que la modale devis d'index).
- Champs cachés obligatoires : `source` (ex. `"Page Colmar — concierge RH"`, un par page pour
  filtrer les leads), `_subject`, et un honeypot `_gotcha` (display:none).
- Sur succès (`res.ok`) : masquer le formulaire, afficher le bloc succès, envoyer l'event GA4
  `devis_soumis` avec `source: "page_<ville>_concierge"`.

### Design tokens (identité visuelle)
- Violet `#5B2EFF` (`--violet`), violet clair `#7B5FFF`, vert `#00E5A0` (`--vert`),
  noir `#0D0D0D`, bordure `#E8E4FF`, gris clair `#F4F2FF`, blanc `#FAFAFA`.
- Typos : **Outfit** (titres, 700–900), **Plus Jakarta Sans** (corps).
- Ancres internes : `#activites` et `#devis` doivent avoir `scroll-margin-top: 80px`
  (header sticky de 68px).

## Garde-fous
- Ne pas introduire de framework, de build, de dépendance npm, ni de localStorage/sessionStorage.
- Ne pas casser `activities.js` comme source unique.
- `activeVille` est déclarée dans `activities.js` (`var activeVille = null;`) — ne PAS la
  re-déclarer ailleurs (conflit de scope → SyntaxError).
- Vérifier les liens : `activites.html` **n'existe pas** — c'est un lien mort à traquer. Les
  liens « voir les activités » doivent pointer vers `index.html#activites` ou `index.html?ville=...`.
- Après toute édition d'une page : valider que le JSON-LD reste du JSON valide et que les balises
  sont équilibrées.

## Dette technique connue (chantiers prioritaires)
1. **Les pages-villes sont dupliquées et ont divergé** (canonical parfois cassé, OG parfois absent,
   doublons de `toggleFaq`, années figées). **Objectif cible : dé-dupliquer** — extraire les parties
   communes (formulaire concierge, footer, CTA) en **partiels injectés par JS**, sur le modèle de
   `nav.js`, pour qu'une modif touche 1 fichier au lieu de 6.
2. `cards.css` est lié sur certaines pages (strasbourg) mais pas d'autres (vosges, selestat, qui
   inline leurs styles de cartes). À harmoniser.

## Workflow attendu
- Travaille par tâche claire. Pour un changement transverse, applique-le à TOUTES les pages
  concernées en une passe (elles ne sont PAS identiques : audite chaque fichier séparément).
- Propose les changements ; l'utilisatrice les relit dans GitHub Desktop (diff visuel) avant de
  commit/push. Ne fais pas de commit/push sans validation.
- Sois direct : signale les hypothèses faibles et les angles morts plutôt que d'exécuter aveuglément.
