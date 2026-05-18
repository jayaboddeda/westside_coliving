/* ========================================
   WESTSIDE COLIVING — main.js
   ======================================== */

(function () {
  'use strict';

  // ── Navbar scroll effect ──────────────────────────
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.remove('transparent');
      navbar.classList.add('scrolled');
    } else {
      if (navbar.classList.contains('transparent') || document.body.classList.contains('has-transparent-nav')) {
        navbar.classList.add('transparent');
        navbar.classList.remove('scrolled');
      }
    }
  }

  if (navbar && navbar.classList.contains('transparent')) {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // ── Mobile Menu Toggle ─────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });

    // Close on nav link click
    mobileMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── Scroll-triggered fade animations ──────────────
  const fadeElements = document.querySelectorAll('.fade-up');

  if (fadeElements.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all elements if IntersectionObserver unsupported
    fadeElements.forEach(function (el) { el.classList.add('visible'); });
  }

  // ── Food Menu Day Switcher (Homepage) ─────────────
  const dayBtns = document.querySelectorAll('.food-day-btn');
  const menuCards = document.querySelectorAll('.food-menu-card');

  dayBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const day = btn.getAttribute('data-day');

      dayBtns.forEach(function (b) { b.classList.remove('active'); });
      menuCards.forEach(function (c) { c.classList.remove('active'); });

      btn.classList.add('active');
      const target = document.getElementById('menu-' + day);
      if (target) target.classList.add('active');
    });
  });

  // ── Food Menu Tabs (food-menu.html) ───────────────
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuPanels = document.querySelectorAll('.menu-day-panel');

  menuTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const panel = tab.getAttribute('data-panel');

      menuTabs.forEach(function (t) { t.classList.remove('active'); });
      menuPanels.forEach(function (p) { p.classList.remove('active'); });

      tab.classList.add('active');
      const target = document.getElementById('panel-' + panel);
      if (target) target.classList.add('active');
    });
  });

  // ── FAQ Accordion ──────────────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');

        // Close all others
        faqItems.forEach(function (i) { i.classList.remove('open'); });

        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // ── Gallery Filter (gallery.html) ─────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      // Filter logic can be extended when real images are added with data-category attributes
    });
  });

  // ── Active nav link highlighting ──────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-menu .nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // ── Smooth scroll for anchor links ────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ── Contact Form basic validation ─────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const name = document.getElementById('name');
      const phone = document.getElementById('phone');
      const roomType = document.getElementById('roomType');

      if (!name.value.trim() || !phone.value.trim() || !roomType.value) {
        e.preventDefault();
        alert('Please fill in your name, phone number and preferred room type before submitting.');
        return;
      }

      // If using mailto action, it opens email client — user-friendly note
      // For production, replace with an actual form handler
    });
  }

  // ── Page load animation ───────────────────────────
  document.body.style.opacity = '0';
  window.addEventListener('load', function () {
    document.body.style.transition = 'opacity 0.4s ease';
    document.body.style.opacity = '1';
  });

})();
