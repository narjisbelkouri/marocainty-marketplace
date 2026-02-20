// 1. Initialize Animations (AOS)
// Drna init mra whda f l-wel dial l-fichie
AOS.init({
    duration: 1000,
    once: true,
    offset: 100 // Bach t-bda l-animation chwiya 9bel mayoussel l-user
});

// 2. Animation de texte (Typing Effect)
// Hna bdelna l-kelmat bach i-welliw kisharho l-concept dial "Visibilité"
var typed = new Typed('#typing-text', {
    strings: [
        'Propulseur de marques locales marocaines.',
        'La vitrine n°1 du savoir-faire marocain.',
        'Donnez de la visibilité à votre authenticité.',
        'Découvrez l\'excellence du Made in Morocco.'
    ],
    typeSpeed: 60,    // Zedna chwiya f s-sor3a
    backSpeed: 40,    
    backDelay: 2500,  // Khllina l-user i-9ra l-kelma mzyan
    loop: true        
});

// 3. Navbar Styling on Scroll
// Kat-welli l-navbar sghira w stylish melli kat-hbet
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "10px 8%";
        nav.style.background = "rgba(255, 255, 255, 0.95)"; // Chwiya dial t-shafafiya
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        nav.style.backdropFilter = "blur(5px)"; // Effect dial l-mraya (Glassmorphism)
    } else {
        nav.style.padding = "20px 8%";
        nav.style.background = "white";
        nav.style.boxShadow = "none";
        nav.style.backdropFilter = "none";
    }
});

// 4. Smooth Scroll pour tous les liens
// Hadi kat-ghatti l-bouton dial hero w l-links dial navbar kamlin
document.querySelectorAll('a[href^="#"], #scroll-to-offres').forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Ila kan bouton (machi link), khassna n-akhdou l-id dyal target direct
        const targetId = this.getAttribute('href') || '#offres';
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 5. Bonus: Form Submission (Simple Alert)
// Bach melli chi marca t-sift l-message, i-tle3 lihom message t-chakour
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci ! Votre demande de visibilité a été envoyée avec succès. L’équipe MAROCAINTY vous contactera bientôt.');
        contactForm.reset();
    });
}
