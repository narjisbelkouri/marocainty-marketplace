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

// 4. Smooth Scroll
document.querySelectorAll('a[href^="#"], #scroll-to-offres').forEach(element => {
    element.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href') || '#offres';
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// 5. Database Marques (Smiyat dial Word dialek)
if (document.getElementById('marques-list')) {
    const database = {
        nourriture: [{ name: "Amlou Prestige", img: "nourr.png", story: "Le fleuron du terroir marocain. Un mélange onctueux d'amandes, d'huile d'argan et de miel.", loc: "Agadir", contact: "contact@amlouprestige.ma" }],
        vetement: [{ name: "Diamantine", img: "vett.webp", story: "L'élégance traditionnelle marocaine revisitée pour le quotidien moderne.", loc: "Casablanca", contact: "info@diamantine.com" }],
        cosmetique: [
            { name: "Natus Marrakech", img: "nat.webp", story: "Rituels de beauté ancestraux. Des produits naturels d'exception.", loc: "Marrakech", contact: "hello@natus.ma" },
            { name: "BioProGeen", img: "bio.png", story: "Cosmétique naturelle et innovation bio.", loc: "Agadir", contact: "sales@bioprogreen.com" }
        ],
        decoration: [{ name: "Chabi Chic", img: "ch.png", story: "Art de la table et décoration marocaine chic et moderne.", loc: "Marrakech", contact: "store@chabi-chic.com" }],
        accessoire: [{ name: "Olga DSN", img: "olga.webp", story: "Maroquinerie design de luxe fabriquée à la main.", loc: "Rabat", contact: "contact@olgadsn.ma" }],
        bijoux: [{ name: "Artisans du Sud", img: "bij.png", story: "L'éclat de l'argent de Tiznit dans des créations contemporaines.", loc: "Tiznit", contact: "bijoux@marocainty.ma" }]
    };

    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || 'nourriture';
    document.getElementById('category-title').innerText = "Univers : " + type.toUpperCase();
    const list = document.getElementById('marques-list');
    
    if (database[type]) {
        database[type].forEach(brand => {
            const item = document.createElement('div');
            item.className = 'brand-item';
            item.innerHTML = `
                <div class="brand-header">
                    <img src="${brand.img}">
                    <div>
                        <h3>${brand.name}</h3>
                        <p>📍 ${brand.loc}</p>
                    </div>
                </div>
                <div class="brand-story">
                    <p>${brand.story}</p>
                    <p><strong>Contact:</strong> ${brand.contact}</p>
                </div>
            `;
            item.onclick = function() {
                const story = this.querySelector('.brand-story');
                story.style.display = story.style.display === 'block' ? 'none' : 'block';
            };
            list.appendChild(item);
        });
    }
}
