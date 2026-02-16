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
