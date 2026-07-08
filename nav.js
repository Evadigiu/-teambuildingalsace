// ============================================================
// nav.js — Navigation partagée TeamBuildingAlsace.fr
// Inclure ce fichier dans toutes les pages :
// <script src="nav.js"></script> juste avant </body>
// ============================================================
// Favicon
['<link rel="icon" type="image/x-icon" href="/favicon.ico">',
 '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">',
 '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">']
.forEach(function(h) {
  document.head.insertAdjacentHTML('beforeend', h);
});
(function() {

  // ── Google Analytics ──
  if (!document.getElementById('gtag-script')) {
    var gtagScript = document.createElement('script');
    gtagScript.id = 'gtag-script';
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-X6RP21L6W8';
    document.head.appendChild(gtagScript);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments);};
    gtag('js', new Date());
    gtag('config', 'G-X6RP21L6W8');
  }


  // ── Microsoft Clarity ──
  if (!document.getElementById('clarity-script')) {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      t.id='clarity-script';
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "x1sywk2trp");
  }

  // ── Injecter le CSS mobile-nav (une seule fois) ──
  if (!document.getElementById('nav-shared-styles')) {
    var style = document.createElement('style');
    style.id = 'nav-shared-styles';
    style.textContent = `
      #mobile-nav {
        display: none;
        position: fixed;
        top: 68px; left: 0; right: 0; bottom: 0;
        background: #0D0D0D;
        z-index: 999;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 28px;
        padding: 0 40px;
        overflow-y: auto;
      }
      #mobile-nav.open { display: flex; }
      #mobile-nav > a {
        color: rgba(255,255,255,0.7);
        text-decoration: none;
        font-size: 1rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 600;
        width: 100%;
      }
      #mobile-nav > a:hover { color: #00E5A0; }
      .mob-accordion { width: 100%; }
      .mob-accordion-btn {
        background: none;
        border: none;
        color: rgba(255,255,255,0.7);
        font-size: 1rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .mob-accordion-btn:hover,
      .mob-accordion-btn.open { color: #00E5A0; }
      .mob-arrow { font-size: 0.55rem; transition: transform 0.25s; display: inline-block; }
      .mob-accordion-btn.open .mob-arrow { transform: rotate(180deg); }
      .mob-accordion-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease, padding-top 0.2s;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding-left: 16px;
      }
      .mob-accordion-content.open { max-height: 700px; padding-top: 14px; }
      .mob-accordion-content a {
        color: rgba(255,255,255,0.55);
        text-decoration: none;
        font-size: 0.88rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-weight: 600;
      }
      .mob-accordion-content a:hover { color: #00E5A0 !important; }
      .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      .hamburger.open span:nth-child(2) { opacity: 0; }
      .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    `;
    document.head.appendChild(style);
  }

  // ── Injecter le header (seulement s'il est vide — certaines pages,
  //     comme index.html, ont leur propre header codé en dur avec des
  //     compteurs dynamiques et ne doivent pas être écrasées) ──
  var header = document.querySelector('header');
  if (header && header.innerHTML.trim() === '') {
    header.innerHTML = `
  <a href="/" class="logo">Team Building <span>Alsace</span></a>
  <nav>
    <a href="/">Accueil</a>
    <div class="nav-dropdown">
      <button class="nav-dropdown-btn" onclick="toggleDropdown(event)" aria-label="Navigation par ville" aria-haspopup="true">Par ville <span class="arrow">▼</span></button>
      <div class="dropdown-menu">
        <a href="strasbourg.html" class="dropdown-item">
          <span class="d-emoji">🏛️</span>
          <span class="d-info"><span class="d-name">Strasbourg</span><span class="d-count">Team building à Strasbourg</span></span>
        </a>
        <a href="colmar.html" class="dropdown-item">
          <span class="d-emoji">🍷</span>
          <span class="d-info"><span class="d-name">Colmar</span><span class="d-count">Team building à Colmar</span></span>
        </a>
        <a href="mulhouse.html" class="dropdown-item">
          <span class="d-emoji">🏭</span>
          <span class="d-info"><span class="d-name">Mulhouse</span><span class="d-count">Team building à Mulhouse</span></span>
        </a>
        <a href="vosges.html" class="dropdown-item">
          <span class="d-emoji">⛰️</span>
          <span class="d-info"><span class="d-name">Vosges</span><span class="d-count">Team building dans les Vosges</span></span>
        </a>
        <a href="selestat.html" class="dropdown-item">
          <span class="d-emoji">🏰</span>
          <span class="d-info"><span class="d-name">Sélestat</span><span class="d-count">Team building à Sélestat</span></span>
        </a>
        <a href="saint-louis.html" class="dropdown-item">
          <span class="d-emoji">🌉</span>
          <span class="d-info"><span class="d-name">Saint-Louis</span><span class="d-count">Team building à Saint-Louis</span></span>
        </a>
        <div class="dropdown-divider"></div>
        <a href="/#activites" class="dropdown-item" style="color:var(--violet)">
          <span class="d-emoji">🗺️</span>
          <span class="d-info"><span class="d-name">Toutes les activités</span><span class="d-count">Voir toute l'Alsace</span></span>
        </a>
      </div>
    </div>
    <div class="nav-dropdown">
      <button class="nav-dropdown-btn" onclick="toggleDropdown(event)" aria-label="Navigation par univers" aria-haspopup="true">Par univers <span class="arrow">▼</span></button>
      <div class="dropdown-menu">
        <a href="nature.html" class="dropdown-item">
          <span class="d-emoji">🌿</span>
          <span class="d-info"><span class="d-name">Nature & Plein air</span><span class="d-count">Outdoor, forêt, randonnée</span></span>
        </a>
        <a href="gastronomie.html" class="dropdown-item">
          <span class="d-emoji">🍽️</span>
          <span class="d-info"><span class="d-name">Gastronomie & Vins</span><span class="d-count">Dégustations, cuisine</span></span>
        </a>
        <a href="creatif.html" class="dropdown-item">
          <span class="d-emoji">🎨</span>
          <span class="d-info"><span class="d-name">Artistique & Créatif</span><span class="d-count">Ateliers, art, création</span></span>
        </a>
        <a href="bienetre.html" class="dropdown-item">
          <span class="d-emoji">🧘</span>
          <span class="d-info"><span class="d-name">Bien-être & Slow</span><span class="d-count">Détente, ressourcement</span></span>
        </a>
        <a href="sport.html" class="dropdown-item">
          <span class="d-emoji">⚡</span>
          <span class="d-info"><span class="d-name">Sport & Adrénaline</span><span class="d-count">Défis sportifs</span></span>
        </a>
        <a href="jeux.html" class="dropdown-item">
          <span class="d-emoji">🎮</span>
          <span class="d-info"><span class="d-name">Jeux & Digital</span><span class="d-count">Escape game, quiz, VR</span></span>
        </a>
        <a href="culture.html" class="dropdown-item">
          <span class="d-emoji">🎭</span>
          <span class="d-info"><span class="d-name">Culture & Patrimoine</span><span class="d-count">Alsace, histoire</span></span>
        </a>
        <a href="wtf.html" class="dropdown-item">
          <span class="d-emoji">🛸</span>
          <span class="d-info"><span class="d-name">What the Fuck</span><span class="d-count">Activités inclassables</span></span>
        </a>
        <a href="strategie.html" class="dropdown-item">
          <span class="d-emoji">🧠</span>
          <span class="d-info"><span class="d-name">Stratégie & Logique</span><span class="d-count">Réflexion, construction</span></span>
        </a>
      </div>
    </div>
    <a href="blog.html">Blog</a>
    <a href="contact.html">Contact</a>
    <a href="referencer.html" class="nav-cta" onclick="if(typeof gtag!=='undefined')gtag('event','referencer_clic',{source:'nav_desktop'})">+ Référencer</a>
  </nav>
  <button class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>`;
  }

  // ── Injecter le mobile-nav (seulement s'il est vide, même logique que le header) ──
  var mobileNav = document.getElementById('mobile-nav');
  if (mobileNav && mobileNav.innerHTML.trim() === '') {
    mobileNav.innerHTML = `
  <a href="/" onclick="toggleMenu()">Accueil</a>
  <div class="mob-accordion">
    <button class="mob-accordion-btn" onclick="toggleAccordion(this)">
      Par ville <span class="mob-arrow">▼</span>
    </button>
    <div class="mob-accordion-content">
      <a href="strasbourg.html" onclick="toggleMenu()">🏛️ Strasbourg</a>
      <a href="colmar.html" onclick="toggleMenu()">🍷 Colmar</a>
      <a href="mulhouse.html" onclick="toggleMenu()">🏭 Mulhouse</a>
      <a href="vosges.html" onclick="toggleMenu()">⛰️ Vosges</a>
      <a href="selestat.html" onclick="toggleMenu()">🏰 Sélestat</a>
      <a href="saint-louis.html" onclick="toggleMenu()">🌉 Saint-Louis</a>
    </div>
  </div>
  <div class="mob-accordion">
    <button class="mob-accordion-btn" onclick="toggleAccordion(this)">
      Par univers <span class="mob-arrow">▼</span>
    </button>
    <div class="mob-accordion-content">
      <a href="nature.html" onclick="toggleMenu()">🌿 Nature & Plein air</a>
      <a href="gastronomie.html" onclick="toggleMenu()">🍽️ Gastronomie & Vins</a>
      <a href="creatif.html" onclick="toggleMenu()">🎨 Artistique & Créatif</a>
      <a href="bienetre.html" onclick="toggleMenu()">🧘 Bien-être & Slow</a>
      <a href="sport.html" onclick="toggleMenu()">⚡ Sport & Adrénaline</a>
      <a href="jeux.html" onclick="toggleMenu()">🎮 Jeux & Digital</a>
      <a href="culture.html" onclick="toggleMenu()">🎭 Culture & Patrimoine</a>
      <a href="wtf.html" onclick="toggleMenu()">🛸 What the Fuck</a>
      <a href="strategie.html" onclick="toggleMenu()">🧠 Stratégie & Logique</a>
    </div>
  </div>
  <a href="blog.html" onclick="toggleMenu()">Blog</a>
  <a href="referencer.html" onclick="if(typeof gtag!=='undefined')gtag('event','referencer_clic',{source:'nav_mobile'});toggleMenu()">+ Référencer</a>
  <a href="contact.html" onclick="toggleMenu()">Contact</a>`;
  }

  // ── Fonctions nav ──
  window.toggleDropdown = function(e) {
    e.stopPropagation();
    var dd = e.currentTarget.closest('.nav-dropdown');
    var isOpen = dd.classList.contains('open');
    document.querySelectorAll('.nav-dropdown').forEach(function(d) { d.classList.remove('open'); });
    if (!isOpen) dd.classList.add('open');
  };

  document.addEventListener('click', function() {
    document.querySelectorAll('.nav-dropdown').forEach(function(d) { d.classList.remove('open'); });
  });

  window.toggleAccordion = function(btn) {
    var content = btn.nextElementSibling;
    var isOpen = content.classList.contains('open');
    document.querySelectorAll('.mob-accordion-content').forEach(function(c) { c.classList.remove('open'); });
    document.querySelectorAll('.mob-accordion-btn').forEach(function(b) { b.classList.remove('open'); });
    if (!isOpen) { content.classList.add('open'); btn.classList.add('open'); }
  };

  window.toggleMenu = function() {
    var btn = document.getElementById('hamburger');
    var nav = document.getElementById('mobile-nav');
    if (!btn || !nav) return;
    btn.classList.toggle('open');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  };

})();
