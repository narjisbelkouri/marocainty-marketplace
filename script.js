// 1. AOS & Typing Effect
AOS.init({ duration: 1000, once: true });

if (document.getElementById('typing-text')) {
    new Typed('#typing-text', {
        strings: ['Le rayonnement des marques locales.', 'L\'excellence du Made in Morocco.', 'L\'authenticité marocaine au clic.'],
        typeSpeed: 50, backSpeed: 30, loop: true
    });
}

// 2. Gestion des Marques
if (document.getElementById('marques-list')) {
    const database = {
        nourriture: [{
            name: "Amlou Prestige", logo: "nourr.png", stars: 5,
            story: "L'histoire de Amlou Prestige commence au cœur des montagnes de l'Atlas, là où les amandiers fleurissent sous un soleil généreux. Chaque pot est le fruit d'un savoir-faire ancestral transmis de génération en génération. Nous sélectionnons méticuleusement les meilleures amandes, grillées lentement au feu de bois, avant d'être broyées à la meule de pierre traditionnelle. Associé à l'huile d'argan certifiée bio et au miel pur des ruches du Souss, notre Amlou n'est pas qu'un produit, c'est une invitation au voyage sensoriel et une célébration de la gastronomie de luxe marocaine.",
            loc: "Agadir / Région Souss", contact: "contact@amlouprestige.ma"
        }],
        vetement: [{
            name: "Diamantine", logo: "vett.png", stars: 5,
            story: "Diamantine est née de la volonté de moderniser le patrimoine vestimentaire marocain sans en trahir l'âme. Depuis sa création, la marque s'est imposée comme l'ambassadrice du chic traditionnel. Nos designers travaillent main dans la main avec des maîtres artisans (Maâlems) pour réinterpréter le Caftan, la Djellaba et le Gandoura à travers des coupes contemporaines et des tissus fluides. Chaque collection raconte une histoire d'élégance, de broderies délicates et de finitions faites à la main, permettant à la femme moderne de porter son héritage avec fierté et confort au quotidien.",
            loc: "Casablanca", contact: "info@diamantine.com"
        }],
        cosmetique: [
            { name: "Natus Marrakech", logo: "nat.png", stars: 5, story: "Natus Marrakech puise son inspiration dans les rituels de beauté millénaires des femmes marocaines. Spécialisée dans les soins naturels haut de gamme, la marque transforme les trésors de la nature — Ghassoul, Argan, Rose de Damas — en véritables élixirs de bien-être. Chaque produit est une immersion dans l'atmosphère envoûtante des hammams de la ville rouge, conçu pour offrir une expérience spa à domicile, tout en respectant une charte éthique et bio rigoureuse.", loc: "Marrakech", contact: "hello@natus.ma" },
            { name: "BioProGreen", logo: "bio.png", stars: 4, story: "BioProGreen est le pionnier de l'innovation cosmétique durable au Maroc. Fondée par des passionnés de botanique, la marque se consacre à l'extraction des huiles les plus précieuses du royaume pour des solutions capillaires et cutanées d'exception. En combinant science moderne et ingrédients purs, BioProGreen offre une alternative saine et efficace aux produits industriels, mettant en avant la puissance régénératrice du terroir marocain.", loc: "Agadir", contact: "sales@bioprogreen.com" }
        ],
        decoration: [{
            name: "Chabi Chic", logo: "ch.png", stars: 5,
            story: "Chabi Chic a révolutionné l'artisanat marocain en y insufflant un esprit bohème et moderne. Originaire de Marrakech, la marque revisite la céramique traditionnelle de Safi avec des motifs minimalistes et des couleurs tendance. Plus qu'une marque de décoration, Chabi Chic est un style de vie qui prône le retour aux sources, le fait-main et l'authenticité. Nos objets d'art de la table et de décoration intérieure sont aujourd'hui présents dans les foyers les plus stylés à travers le monde, prouvant que le design marocain est universel.",
            loc: "Marrakech / Route d'Ourika", contact: "store@chabi-chic.com"
        }],
        accessoire: [{
            name: "Olga DSN", logo: "olga.png", stars: 4,
            story: "Olga DSN incarne le renouveau de la maroquinerie de luxe marocaine. La marque se distingue par une approche architecturale du design de sacs et d'accessoires. En utilisant exclusivement des cuirs de première qualité tannés localement, Olga DSN crée des pièces intemporelles où chaque couture et chaque détail métallique est pensé pour durer. C'est l'alliance parfaite entre l'audace créative moderne et la précision manuelle des artisans tanneurs de Rabat, offrant des accessoires qui sont de véritables déclarations de style.",
            loc: "Rabat", contact: "contact@olgadsn.ma"
        }],
        bijoux: [{
            name: "Artisans du Sud", logo: "bij.png", stars: 5,
            story: "Les Bijoux Artisans du Sud célèbrent l'éclat de l'argent massif et le mystère des pierres naturelles. Basée à Tiznit, capitale de l'orfèvrerie berbère, notre atelier perpétue des techniques de filigrane et d'émaillage uniques au monde. Chaque bijou est une pièce chargée d'histoire et de symbolisme, revisitée pour s'adapter aux tenues de soirée comme au style urbain. Porter un bijou Artisans du Sud, c'est porter un fragment de l'âme du désert et des montagnes du Grand Sud Marocain.",
            loc: "Tiznit", contact: "bijoux@marocainty.ma"
        }]
    };

    const params = new URLSearchParams(window.location.search);
    const type = (params.get('type') || 'nourriture').toLowerCase();
    
    document.getElementById('category-title').innerText = "Univers : " + type.toUpperCase();
    const list = document.getElementById('marques-list');

    if (database[type]) {
        database[type].forEach(brand => {
            const card = document.createElement('div');
            card.className = 'brand-card';
            card.innerHTML = `
                <div class="brand-header">
                    <img src="${brand.logo}" class="brand-logo" onerror="this.src='https://via.placeholder.com/70'">
                    <div class="brand-info">
                        <h3>${brand.name}</h3>
                        <div class="stars">${'★'.repeat(brand.stars)}${'☆'.repeat(5-brand.stars)}</div>
                    </div>
                    <i data-lucide="chevron-down"></i>
                </div>
                <div class="brand-details">
                    <div class="story-section">
                        <h4>📖 Notre Histoire</h4>
                        <p>${brand.story}</p>
                    </div>
                    <div style="display:flex; gap:20px; font-size:14px; color:#666;">
                        <span>📍 ${brand.loc}</span> | <span>✉️ ${brand.contact}</span>
                    </div>
                </div>
            `;
            card.onclick = () => card.classList.toggle('active');
            list.appendChild(card);
        });
        lucide.createIcons();
    }
}
