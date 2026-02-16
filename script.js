// Initialize Animations
AOS.init({
    duration: 1000,
    once: true,
});

// Smooth Scroll l-categories
document.getElementById('scroll-to-offres').addEventListener('click', function() {
    document.getElementById('offres').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Navbar change on scroll
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
// Animation de texte (Typing Effect)
var typed = new Typed('#typing-text', {
    strings: [
        'Célébrons le savoir-faire marocain.',
        'Découvrez des marques locales marocaines.',
        'Le meilleur de l\'artisanat marocain en ligne.',
        'Consommer local, c\'est MAROCAINTY.'
    ],
    typeSpeed: 50,    // Vitesse d'écriture
    backSpeed: 30,    // Vitesse d'effacement
    backDelay: 2000,  // Temps d'attente avant d'effacer
    loop: true        // Recommencer à l'infini
});

// Smooth Scroll pour les liens de la navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialisation des animations AOS
AOS.init({
    duration: 1000,
    once: true
});
