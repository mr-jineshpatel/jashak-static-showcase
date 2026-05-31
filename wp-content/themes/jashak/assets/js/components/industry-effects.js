jQuery(function ($) {
    const $cards = $('.js-tilt-card');

    $cards.each(function () {
        const card = this;

        card.addEventListener('mousemove', function (event) {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateY = ((x / rect.width) - 0.5) * 8;
            const rotateX = ((0.5 - (y / rect.height)) * 8);

            card.style.setProperty('--tilt-x', rotateX.toFixed(2) + 'deg');
            card.style.setProperty('--tilt-y', rotateY.toFixed(2) + 'deg');
            card.classList.add('is-tilting');
        });

        card.addEventListener('mouseleave', function () {
            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');
            card.classList.remove('is-tilting');
        });
    });

    const revealItems = document.querySelectorAll('.js-reveal-line');

    if (!('IntersectionObserver' in window) || !revealItems.length) {
        revealItems.forEach((item) => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    revealItems.forEach((item) => observer.observe(item));
});
