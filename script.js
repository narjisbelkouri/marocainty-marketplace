// 1. Initialize Animations
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 1000, once: true });
}

// 2. Typing Effect (Promotion Focus)
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
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.padding = "10px 8%";
            nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        } else {
            nav.style.padding = "20px 8%";
            nav.style.boxShadow = "none";
        }
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

// ==========================================
// 5. GESTION DES MARQUES (PAGE CATÉGORIES)
// ==========================================
if (document.getElementById('marques-list')) {
    const database = {
        nourriture: [
            { name: "Amlou Prestige", img: "nou.png", story: "Le meilleur de l'amandier marocain transformé en délice. Un mélange luxueux d'amandes grillées, d'huile d'argan bio et de miel pur.", loc: "Région du Souss", contact: "contact@amlouprestige.ma" }
        ],
        vetement: [
            { name: "Diamantine", img: "vett.webp", story: "La référence de la mode traditionnelle marocaine revisité. Des tuniques, caftans et accessoires inspirés de l'héritage marocain.", loc: "Casablanca", contact: "info@diamantine.com" }
        ],
        cosmetique: [
            { name: "Natus Marrakech", img: "nat.webp", story: "Soins naturels inspirés des rituels ancestraux du hammam. Des produits bio à base d'argan et de figue de barbarie.", loc: "Marrakech", contact: "hello@natus.ma" },
            { name: "BioProGeen", img: "bio.png", story: "L'innovation verte marocaine au service de la beauté. Des huiles essentielles et des soins 100% naturels.", loc: "Agadir", contact: "sales@bioprogreen.com" }
        ],
        decoration: [
            { name: "Chabi Chic", img: "ch.png", story: "L'art de vivre marocain moderne. Céramiques faites main et décoration bohème chic pour un intérieur authentique.", loc: "Marrakech", contact: "store@chabi-chic.com" }
        ],
        accessoire: [
            { name: "Olga DSN", img: "olga.webp", story: "Maroquinerie d'exception alliant design contemporain et savoir-faire artisanal marocain.", loc: "Rabat", contact: "contact@olgadsn.ma" }
        ],
        bijoux: [
            { name: "Artisans du Sud", img: "bij.png", story: "Bijoux berbères revisités. Des pièces uniques en argent massif créées par les mains expertes des artisans de Tiznit.", loc: "Tiznit", contact: "bijoux@marocainty.ma" }
        ]
    };

    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || 'nourriture';
    
    // Afficher le titre
    document.getElementById('category-title').innerText = "Univers : " + type.toUpperCase();

    const list = document.getElementById('marques-list');
    
    if (database[type]) {
        database[type].forEach(brand => {
            const item = document.createElement('div');
            item.className = 'brand-item';
            item.innerHTML = `
                <div class="brand-header">
                    <img src="${brand.img}" onerror="this.src='https://via.placeholder.com/80'">
                    <div>
                        <h3>${brand.name}</h3>
                        <p style="color:#777; font-size:14px;">📍 ${brand.loc}</p>
                    </div>
                </div>
                <div class="brand-story">
                    <p>${brand.story}</p>
                    <p><span>Contact:</span> ${brand.contact}</p>
                </div>
            `;
            
            // Toggle Story on Click
            item.onclick = function() {
                const story = this.querySelector('.brand-story');
                story.style.display = story.style.display === 'block' ? 'none' : 'block';
            };
            
            list.appendChild(item);
        });
    } else {
        list.innerHTML = "<p style='text-align:center;'>Aucune marque enregistrée pour le moment.</p>";
    }
}
