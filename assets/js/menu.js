// Mobile hamburger menu toggle
(function () {
  'use strict';

  // Create and insert hamburger button
  function initMobileMenu() {
    const header = document.querySelector('.site-header');
    const nav = document.querySelector('.site-nav');

    if (!header || !nav) return;

    // Create hamburger button
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'メニューを開く');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = '<span></span><span></span><span></span>';

    // Insert button into header (before nav)
    const headerInner = document.querySelector('.site-header__inner');
    if (headerInner) {
      headerInner.appendChild(menuToggle);
    }

    // Toggle menu
    menuToggle.addEventListener('click', function () {
      const isOpen = nav.classList.contains('is-open');

      nav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active');
      menuToggle.setAttribute('aria-expanded', !isOpen);
      menuToggle.setAttribute('aria-label', isOpen ? 'メニューを開く' : 'メニューを閉じる');

      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'メニューを開く');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    nav.addEventListener('click', function (e) {
      if (e.target === nav || e.target.classList.contains('nav-list')) {
        nav.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'メニューを開く');
        document.body.style.overflow = '';
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'メニューを開く');
        document.body.style.overflow = '';
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
