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
// Data dial l-marques (Exemple)
const database = {
    nourriture: [
        { name: "Atlas Oils", logo: "atlas.png", story: "Producteur d'huile d'olive bio...", loc: "Marrakech", contact: "05XX-XXXXXX" },
        { name: "Miel du Souss", logo: "miel.png", story: "Miel pur artisanal...", loc: "Agadir", contact: "contact@miel.ma" }
    ],
    // Zid l-categories l-khorin hna...
};

// 1. Jbed l-category m l-URL
const params = new URLSearchParams(window.location.search);
const category = params.get('type');
document.getElementById('category-title').innerText = category.charAt(0).toUpperCase() + category.slice(1);

// 2. Affichi l-marques
const list = document.getElementById('marques-list');
database[category].forEach(brand => {
    const card = document.createElement('div');
    card.className = 'brand-card';
    card.innerHTML = `
        <div class="brand-header">
            <img src="${brand.logo}" class="brand-logo">
            <h3>${brand.name}</h3>
        </div>
        <div class="brand-details">
            <div class="info-box"><h4>Storytelling</h4><p>${brand.story}</p></div>
            <div class="info-box"><h4>Localisation</h4><p>${brand.loc}</p></div>
            <div class="info-box"><h4>Contact</h4><p>${brand.contact}</p></div>
        </div>
    `;

    // 3. Animation Click
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });

    list.appendChild(card);
});
