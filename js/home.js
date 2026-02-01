/* ===================================
   Home page only: Active nav on scroll & Stats counter
   =================================== */
(function () {
    'use strict';

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Active navigation link on scroll
    function updateActiveNav() {
        const scrollY = window.pageYOffset;
        sections.forEach(function (section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 200;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector('.main-nav a[href="#' + sectionId + '"]');
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(function (link) { link.classList.remove('active'); });
                if (navLink) navLink.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    // Stats counter animation (home page only)
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
                    var targetValues = [120, 500, 50, 15];
                    statNumbers.forEach(function (stat, index) {
                        animateCounter(stat, targetValues[index], 2000);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }
})();
