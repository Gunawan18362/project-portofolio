document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.hero, .about, .projects');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    function initBioModal() {
        const profileImg = document.querySelector('.profile-img');
        const modal = document.getElementById('bioModal');
        const closeBtn = document.querySelector('.close');

        if (!profileImg || !modal || !closeBtn) {
            console.warn("Modal elements not found. Check: profile.jpg exists and HTML structure.");
            return;
        }

        profileImg.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    if (document.readyState === 'loading') {
        window.addEventListener('load', initBioModal);
    } else {
        initBioModal();
    }
});