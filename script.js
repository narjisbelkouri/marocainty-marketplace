// 1. Initialize Animations
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 1000, once: true });
}

// 2. Typing Effect
if (document.getElementById('typing-text')) {
    new Typed('#typing-text', {
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
}

// 3. Navbar Styling on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (nav && window.scrollY > 50) {
        nav.style.padding = "10px 8%";
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    } else if (nav) {
        nav.style.padding = "20px 8%";
        nav.style.boxShadow = "none";
    }
});

// 4. Database Marques (Directement depuis categori.docx)
if (document.getElementById('marques-list')) {
    const database = {
        nourriture: [
            { name: "Amlou Prestige", img: "nourr.png", story: "Le fleuron du terroir marocain. Un mélange luxueux d'amandes grillées et de miel.", loc: "Agadir", contact: "contact@amlouprestige.ma" }
        ],
        vetement: [
            { name: "Diamantine", img: "vett.webp", story: "L'élégance traditionnelle marocaine revisitée avec une touche moderne.", loc: "Casablanca", contact: "info@diamantine.com" }
        ],
        cosmetique: [
            { name: "Natus Marrakech", img: "nat.webp", story: "Rituels de beauté ancestraux à base de produits naturels d'exception.", loc: "Marrakech", contact: "hello@natus.ma" },
            { name: "BioProGeen", img: "bio.png", story: "Innovation bio et naturelle au service de la cosmétique marocaine.", loc: "Agadir", contact: "sales@bioprogreen.com" }
        ],
        decoration: [
            { name: "Chabi Chic", img: "ch.png", story: "Art de la table et décoration marocaine chic et contemporaine.", loc: "Marrakech", contact: "store@chabi-chic.com" }
        ],
        accessoire: [
            { name: "Olga DSN", img: "olga.webp", story: "Maroquinerie de luxe faite main alliant design et tradition.", loc: "Rabat", contact: "contact@olgadsn.ma" }
        ],
        bijoux: [
            { name: "Artisans du Sud", img: "bij.png", story: "Bijoux en argent massif inspirés du savoir-faire de Tiznit.", loc: "Tiznit", contact: "bijoux@marocainty.ma" }
        ]
    };

    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || 'nourriture';
    
    // Titre de la catégorie
    const titleElement = document.getElementById('category-title');
    if (titleElement) titleElement.innerText = "Univers : " + type.toUpperCase();

    const list = document.getElementById('marques-list');
    
    if (database[type]) {
        database[type].forEach(brand => {
            const item = document.createElement('div');
            item.className = 'brand-item';
            item.innerHTML = `
                <div class="brand-header">
                    <img src="${brand.img}" onerror="this.src='https://via.placeholder.com/140'">
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
                story.style.display = (story.style.display === 'block') ? 'none' : 'block';
            };
            
            list.appendChild(item);
        });
    } else {
        list.innerHTML = "<p style='text-align:center;'>Bientôt de nouvelles marques ici...</p>";
    }
}
