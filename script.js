document.addEventListener('DOMContentLoaded', () => {
    // Reveal Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const dashboard = document.querySelector('.dashboard-container');
    if (dashboard) {
        observer.observe(dashboard);
    }

    // Dynamic Header Interaction
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Modal Logic
    const modal = document.getElementById('infoModal');
    const btn = document.getElementById('infoBtn');
    const span = document.getElementsByClassName('close')[0];

    if (btn && modal && span) {
        btn.onclick = function () {
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }

        span.onclick = function () {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            }
        }
    }
});
