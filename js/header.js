/* ========================================================
   WESTSIDE COLIVING — shared header
   --------------------------------------------------------
   The header markup lives in this file (the HEADER_HTML
   string below). Each page only needs:

       <div id="site-header"></div>
       <script src="js/header.js"></script>

   Edit HEADER_HTML once — every page updates.

   A page with a LIGHT hero that wants the navbar to start
   see-through adds data-header="transparent" to the div:

       <div id="site-header" data-header="transparent"></div>

   No fetch(), no build step — works offline (file://) too.
   ======================================================== */

(function () {
  'use strict';

  var HEADER_HTML = [
    '<!-- ========== NAVBAR ========== -->',
    '<nav id="navbar" class="fixed top-0 inset-x-0 z-50 border-b border-transparent">',
    '  <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-[80px]">',
    '    <a href="index.html" class="flex items-center group">',
    '      <img src="images/logo_side_icon.png" alt="Westside Coliving" class="h-14 w-auto" />',
    '    </a>',
    '',
    '    <ul class="hidden lg:flex items-center gap-8 text-[14px] font-medium">',
    '      <li><a href="index.html" data-nav="index.html" class="hover:text-gold-deep underline-grow transition-colors">Home</a></li>',
    '      <li><a href="about.html" data-nav="about.html" class="hover:text-gold-deep underline-grow transition-colors">About</a></li>',
    '      <li><a href="rooms.html" data-nav="rooms.html" class="hover:text-gold-deep underline-grow transition-colors">Rooms &amp; Pricing</a></li>',
    '      <li><a href="amenities.html" data-nav="amenities.html" class="hover:text-gold-deep underline-grow transition-colors">Amenities</a></li>',
    '      <li><a href="food-menu.html" data-nav="food-menu.html" class="hover:text-gold-deep underline-grow transition-colors">Food Menu</a></li>',
    '      <li><a href="gallery.html" data-nav="gallery.html" class="hover:text-gold-deep underline-grow transition-colors">Gallery</a></li>',
    '      <li><a href="faq.html" data-nav="faq.html" class="hover:text-gold-deep underline-grow transition-colors">FAQ</a></li>',
    '      <li>',
    '        <a href="contact.html" class="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 hover:bg-gold hover:text-ink transition-colors">',
    '          Enquire Now <svg class="ic w-4 h-4"><use href="#i-arrow"/></svg>',
    '        </a>',
    '      </li>',
    '    </ul>',
    '',
    '    <button id="hamburger" aria-label="Open menu" aria-controls="mobileMenu" aria-expanded="false" class="lg:hidden relative flex flex-col gap-[5px] w-11 h-11 items-center justify-center rounded-lg border border-ink/15">',
    '      <span class="hb-line block w-5 h-[2px] bg-ink"></span>',
    '      <span class="hb-line block w-5 h-[2px] bg-ink"></span>',
    '      <span class="hb-line block w-5 h-[2px] bg-ink"></span>',
    '    </button>',
    '  </div>',
    '</nav>',
    '',
    '<!-- ===== Mobile Off-canvas Menu ===== -->',
    '<div id="navBackdrop" class="lg:hidden fixed inset-0 z-[60] bg-ink/55 backdrop-blur-sm opacity-0 invisible"></div>',
    '<aside id="mobileMenu" aria-label="Mobile navigation" aria-hidden="true" class="lg:hidden fixed top-0 right-0 z-[70] flex h-[100dvh] w-[84%] max-w-xs flex-col bg-cream shadow-2xl shadow-ink/40 translate-x-full">',
    '  <div class="flex items-center justify-between h-[72px] px-5 border-b border-ink/10">',
    '    <span class="flex items-center">',
    '      <img src="images/logo_side_icon.png" alt="Westside Coliving" class="h-11 w-auto" />',
    '    </span>',
    '    <button id="menuClose" aria-label="Close menu" class="grid place-items-center w-10 h-10 rounded-lg border border-ink/15 text-ink hover:bg-ink hover:text-cream transition-colors">',
    '      <svg class="ic w-5 h-5"><use href="#i-close"/></svg>',
    '    </button>',
    '  </div>',
    '  <nav class="flex-1 overflow-y-auto px-5 py-4 text-[15px] font-medium">',
    '    <a href="index.html" data-nav="index.html" class="flex items-center justify-between py-3.5 border-b border-ink/8 hover:text-gold-deep transition-colors">Home <svg class="ic w-4 h-4 opacity-40"><use href="#i-arrow"/></svg></a>',
    '    <a href="about.html" data-nav="about.html" class="flex items-center justify-between py-3.5 border-b border-ink/8 hover:text-gold-deep transition-colors">About <svg class="ic w-4 h-4 opacity-40"><use href="#i-arrow"/></svg></a>',
    '    <a href="rooms.html" data-nav="rooms.html" class="flex items-center justify-between py-3.5 border-b border-ink/8 hover:text-gold-deep transition-colors">Rooms &amp; Pricing <svg class="ic w-4 h-4 opacity-40"><use href="#i-arrow"/></svg></a>',
    '    <a href="amenities.html" data-nav="amenities.html" class="flex items-center justify-between py-3.5 border-b border-ink/8 hover:text-gold-deep transition-colors">Amenities <svg class="ic w-4 h-4 opacity-40"><use href="#i-arrow"/></svg></a>',
    '    <a href="food-menu.html" data-nav="food-menu.html" class="flex items-center justify-between py-3.5 border-b border-ink/8 hover:text-gold-deep transition-colors">Food Menu <svg class="ic w-4 h-4 opacity-40"><use href="#i-arrow"/></svg></a>',
    '    <a href="gallery.html" data-nav="gallery.html" class="flex items-center justify-between py-3.5 border-b border-ink/8 hover:text-gold-deep transition-colors">Gallery <svg class="ic w-4 h-4 opacity-40"><use href="#i-arrow"/></svg></a>',
    '    <a href="faq.html" data-nav="faq.html" class="flex items-center justify-between py-3.5 hover:text-gold-deep transition-colors">FAQ <svg class="ic w-4 h-4 opacity-40"><use href="#i-arrow"/></svg></a>',
    '  </nav>',
    '  <div class="px-5 pb-7 pt-3 border-t border-ink/10">',
    '    <a href="contact.html" class="flex justify-center items-center gap-2 rounded-full bg-ink text-cream px-5 py-3.5 font-semibold hover:bg-gold hover:text-ink transition-colors">',
    '      Enquire Now <svg class="ic w-4 h-4"><use href="#i-arrow"/></svg>',
    '    </a>',
    '    <a href="tel:+919059434949" class="mt-3 flex justify-center items-center gap-2 text-[13px] font-semibold text-ink-muted">',
    '      <svg class="ic w-4 h-4"><use href="#i-phone"/></svg> +91 90594 34949',
    '    </a>',
    '  </div>',
    '</aside>'
  ].join('\n');

  var mount = document.getElementById('site-header');
  if (!mount) return;

  mount.innerHTML = HEADER_HTML;
  highlightActiveLink();
  initScrollEffect();
  initMobileMenu();

  // ── Highlight the link for the page we're on ──────────
  function highlightActiveLink() {
    var current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

    mount.querySelectorAll('[data-nav]').forEach(function (link) {
      if (link.getAttribute('data-nav').toLowerCase() !== current) return;

      link.classList.add('text-gold-deep');
      link.classList.remove('hover:text-gold-deep', 'transition-colors');
      link.setAttribute('aria-current', 'page');

      var arrow = link.querySelector('svg');
      if (arrow) {
        arrow.classList.remove('opacity-40');
        arrow.classList.add('opacity-60');
      }
    });
  }

  // ── Navbar background on scroll ───────────────────────
  // Default: solid cream background from the top (dark nav links
  // stay readable on any hero colour). A page with a light hero
  // sets data-header="transparent" to start see-through.
  function initScrollEffect() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;

    var alwaysSolid = (mount.getAttribute('data-header') !== 'transparent');
    var scrolledClasses = ['bg-cream/95', 'backdrop-blur-md', 'shadow-sm', 'border-ink/10'];

    function onScroll() {
      if (alwaysSolid || window.scrollY > 40) {
        navbar.classList.add.apply(navbar.classList, scrolledClasses);
      } else {
        navbar.classList.remove.apply(navbar.classList, scrolledClasses);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile off-canvas menu ────────────────────────────
  function initMobileMenu() {
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobileMenu');
    var menuClose = document.getElementById('menuClose');
    var navBackdrop = document.getElementById('navBackdrop');
    var root = document.documentElement;

    if (!hamburger || !mobileMenu) return;

    function openMenu() {
      root.classList.add('nav-open');
      document.body.classList.add('menu-lock');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
    }
    function closeMenu() {
      root.classList.remove('nav-open');
      document.body.classList.remove('menu-lock');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
    function toggleMenu() {
      root.classList.contains('nav-open') ? closeMenu() : openMenu();
    }

    hamburger.addEventListener('click', toggleMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (navBackdrop) navBackdrop.addEventListener('click', closeMenu);

    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Auto-close when resizing up to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) closeMenu();
    });
  }
})();
