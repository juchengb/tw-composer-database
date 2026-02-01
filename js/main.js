/* ===================================
   Shared: Header scroll & Mobile menu
   =================================== */
(function () {
    'use strict';

    const header = document.querySelector('.site-header');
    const mobileMenuToggle = document.querySelector('#mobileMenuToggle');
    const mainNav = document.querySelector('#mainNav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (!header) return;

    // Header: add .scrolled on scroll (skip on composer page – already light)
    function updateHeaderScroll() {
        if (document.body.classList.contains('page-composer')) {
            header.classList.add('scrolled');
            return;
        }
        if (window.pageYOffset > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
    updateHeaderScroll();

    // Mobile menu toggle
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links (with header offset)
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var headerHeight = header ? header.offsetHeight : 0;
                var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });
})();
