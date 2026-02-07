/* ===================================
   Home page only: Hero background carousel, Active nav, Stats counter
   =================================== */
(function () {
    'use strict';

    function init() {
        // Hero background image carousel
        var heroSlides = document.getElementById('heroBgSlides');
        if (heroSlides) {
            var slides = heroSlides.querySelectorAll('.hero-bg-slide');
            var current = 0;
            var interval = 5000;

            function nextSlide() {
                if (slides.length === 0) return;
                slides[current].classList.remove('active');
                current = (current + 1) % slides.length;
                slides[current].classList.add('active');
            }

            setInterval(nextSlide, interval);
        }

        initNavAndStats();
    }

    function initNavAndStats() {
        var sections = document.querySelectorAll('section[id]');
        var navLinks = document.querySelectorAll('.main-nav a');

        function updateActiveNav() {
            var scrollY = window.pageYOffset;
            sections.forEach(function (section) {
                var sectionHeight = section.offsetHeight;
                var sectionTop = section.offsetTop - 200;
                var sectionId = section.getAttribute('id');
                var navLink = document.querySelector('.main-nav a[href="#' + sectionId + '"]');
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(function (link) { link.classList.remove('active'); });
                    if (navLink) navLink.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', updateActiveNav, { passive: true });
        updateActiveNav();

        function animateCounter(element, target, duration) {
            duration = duration || 2000;
            var start = 0;
            var increment = target / (duration / 16);
            var timer = setInterval(function () {
                start += increment;
                if (start >= target) {
                    element.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start) + '+';
                }
            }, 16);
        }

        var statsSection = document.querySelector('.statistics');
        if (statsSection) {
            var statsObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var statNumbers = entry.target.querySelectorAll('.stat-number');
                        var targetValues = [120, 500, 50];
                        statNumbers.forEach(function (stat, index) {
                            animateCounter(stat, targetValues[index], 2000);
                        });
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            statsObserver.observe(statsSection);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
