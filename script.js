const data = {
    'cosmetique': [
        { id: 'souss', name: 'Souss Nature', story: 'Le secret de la beauté berbère.', products: [{n: 'Argan Bio', p: 150, s: 5}] }
    ],
    'artisanat': [
        { id: 'atlas', name: 'Atlas Craft', story: 'Tapis tissés à la main dans le Moyen Atlas.', products: [{n: 'Tapis Zanafi', p: 1200, s: 5}] }
    ]
};

function showBrands(cat) {
    document.getElementById('brands-area').classList.remove('hidden');
    const list = document.getElementById('brands-list');
    list.innerHTML = '';
    data[cat].forEach(brand => {
        list.innerHTML += `
            <div class="card">
                <h3>${brand.name}</h3>
                <p><em>${brand.story}</em></p>
                <button onclick="showProducts('${cat}', '${brand.id}')" style="background:var(--maroc-green); color:white; border:none; padding:10px; cursor:pointer; border-radius:5px;">Découvrir la marque</button>
            </div>`;
    });
}

function showProducts(cat, brandId) {
    document.getElementById('products-area').classList.remove('hidden');
    const brand = data[cat].find(b => b.id === brandId);
    const list = document.getElementById('products-list');
    list.innerHTML = '';
    brand.products.forEach(p => {
        list.innerHTML += `
            <div class="card">
                <h4>${p.n}</h4>
                <p style="color:var(--maroc-green); font-weight:bold;">${p.p} DH</p>
                <p>${"⭐".repeat(p.s)}</p>
                <button style="background:var(--maroc-red); color:white; border:none; padding:8px 15px; border-radius:5px;">Ajouter au panier</button>
            </div>`;
    });
}
const data = {
    'cosmetique': [
        { name: 'Souss Nature', story: 'Coopérative d’argan bio.' }
    ],
    'artisanat': [
        { name: 'Atlas Craft', story: 'Tapis faits main.' }
    ]
};

function showBrands(cat) {
    // Had l-ster houwa li kiy-7iyed "display: none" bach i-ban l-qism
    const area = document.getElementById('brands-area');
    area.style.display = 'block'; 
    
    const list = document.getElementById('brands-list');
    list.innerHTML = '';
    
    data[cat].forEach(brand => {
        list.innerHTML += `
            <div style="border: 1px solid #ddd; padding: 15px; margin-top: 10px; border-radius: 8px;">
                <h3>${brand.name}</h3>
                <p>${brand.story}</p>
                <button style="background:#006233; color:white; border:none; padding:5px 10px; cursor:pointer;">Voir Produits</button>
            </div>
        `;
    });
    
    // Scroll l-t7t bach i-banu l-marques
    area.scrollIntoView({ behavior: 'smooth' });
}
