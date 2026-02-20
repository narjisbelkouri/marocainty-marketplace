// 1. Initialize Animations
AOS.init({
    duration: 1000,
    once: true,
});

// 2. Typing Effect (Promotion Focus)
var typed = new Typed('#typing-text', {
    strings: [
        'Propulseur de marques locales marocaines.',
        'La vitrine n°1 du savoir-faire marocain.',
        'Célébrons l\'authenticité du Made in Morocco.',
        'Donnez de la visibilité à votre marque.'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2500,
    loop: true
});

// 3. Navbar Styling on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "10px 8%";
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    } else {
        nav.style.padding = "20px 8%";
        nav.style.boxShadow = "none";
    }
});

// 4. Smooth Scroll for all links
document.querySelectorAll('a[href^="#"], #scroll-to-offres').forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href') || '#offres';
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
