AOS.init({ duration: 1000, once: true });

// Typing Effect
if (document.getElementById('typing-text')) {
    new Typed('#typing-text', {
        strings: ['Le rayonnement des marques locales.', 'L\'excellence du Made in Morocco.'],
        typeSpeed: 50, backSpeed: 30, loop: true
    });
}

// Data Brands
if (document.getElementById('marques-list')) {
    const database = {
        nourriture: [{
            name: "Amlou Prestige", logo: "nourr.png", stars: 5,
            story: "Plongez dans l'excellence du Souss. Notre Amlou Prestige est une symphonie de saveurs où les amandes grillées à la perfection rencontrent l'huile d'argan bio la plus pure, sublimée par une touche de miel d'oranger. C'est le luxe du terroir marocain dans un pot.",
            loc: "Agadir", contact: "contact@amlouprestige.ma"
        }],
        vetement: [{
            name: "Diamantine", logo: "vett.webp", stars: 5, // .webp hna
            story: "Diamantine réinvente le chic marocain. En fusionnant l'héritage du caftan avec les lignes contemporaines, la marque crée une mode audacieuse qui célèbre la femme marocaine moderne, fière de ses racines et tournée vers l'avenir.",
            loc: "Casablanca", contact: "info@diamantine.com"
        }],
        cosmetique: [
            { name: "Natus Marrakech", logo: "nat.webp", stars: 5, // .webp hna
              story: "L'essence du spa traditionnel chez vous. Natus Marrakech transforme les rituels du hammam en soins de haute performance, utilisant les secrets ancestraux de la Rose et de l'Argan pour une beauté authentique et bio.", loc: "Marrakech", contact: "hello@natus.ma" },
            { name: "BioProGreen", logo: "bio.png", stars: 4, 
              story: "L'innovation verte par excellence. BioProGreen extrait la quintessence des plantes marocaines pour offrir des soins capillaires et cutanés d'une pureté inégalée, respectant votre peau et l'environnement.", loc: "Agadir", contact: "sales@bioprogreen.com" }
        ],
        decoration: [{
            name: "Chabi Chic", logo: "ch.png", stars: 5,
            story: "La céramique de Safi revisitée. Chabi Chic apporte une touche bohème et moderne à l'art de vivre marocain, transformant chaque objet du quotidien en une œuvre d'art design et colorée.",
            loc: "Marrakech", contact: "store@chabi-chic.com"
        }],
        accessoire: [{
            name: "Olga DSN", logo: "olga.webp", stars: 4, // .webp hna
            story: "L'élégance du cuir entre vos mains. Olga DSN crée des accessoires de maroquinerie d'exception, où chaque couture raconte le dévouement des artisans marocains pour un luxe discret et intemporel.",
            loc: "Rabat", contact: "contact@olgadsn.ma"
        }]
    };

    const params = new URLSearchParams(window.location.search);
    const type = (params.get('type') || 'nourriture').toLowerCase();
    
    const list = document.getElementById('marques-list');
    if (database[type]) {
        document.getElementById('category-title').innerText = "Univers : " + type.toUpperCase();
        database[type].forEach(brand => {
            const card = document.createElement('div');
            card.className = 'brand-card';
            card.innerHTML = `
                <div class="brand-header">
                    <img src="${brand.logo}" class="brand-logo" onerror="this.src='https://via.placeholder.com/70'">
                    <div class="brand-info"><h3>${brand.name}</h3><div class="stars">★★★★★</div></div>
                    <i data-lucide="chevron-down"></i>
                </div>
                <div class="brand-details">
                    <div class="story-section"><h4>Storytelling</h4><p>${brand.story}</p></div>
                    <p style="margin-top:10px;">📍 ${brand.loc} | 📧 ${brand.contact}</p>
                </div>
            `;
            card.onclick = () => card.classList.toggle('active');
            list.appendChild(card);
        });
        lucide.createIcons();
    }
}
