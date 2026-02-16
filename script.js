const data = {
    'cosmetique': [
        { id: 'souss', name: 'Souss Nature', story: 'Coopérative d’argan bio du Souss.', products: [{n: 'Argan', p: 150, stars: 5}] }
    ],
    'artisanat': [
        { id: 'atlas', name: 'Atlas Craft', story: 'L’art du tapis Berbère transmis de mère en fille.', products: [{n: 'Tapis', p: 1200, stars: 5}] }
    ]
};

function showBrands(cat) {
    document.getElementById('brands-display').classList.remove('hidden');
    const list = document.getElementById('brands-list');
    list.innerHTML = '';
    data[cat].forEach(brand => {
        list.innerHTML += `
            <div class="brand-card" style="background:white; padding:20px; margin:10px; border-radius:10px;">
                <h3>${brand.name}</h3>
                <p>${brand.story}</p>
                <button onclick="showProducts('${cat}', '${brand.id}')" style="background:var(--maroc-green); color:white; border:none; padding:10px; cursor:pointer;">Découvrir les produits</button>
            </div>
        `;
    });
}

function showProducts(cat, brandId) {
    document.getElementById('products-display').classList.remove('hidden');
    const brand = data[cat].find(b => b.id === brandId);
    const list = document.getElementById('products-list');
    list.innerHTML = '';
    brand.products.forEach(p => {
        list.innerHTML += `
            <div class="product-item" style="border-bottom:1px solid #ccc; padding:20px;">
                <h4>${p.n}</h4>
                <p>Prix: ${p.p} DH | Avis: ${"⭐".repeat(p.stars)}</p>
                <button style="background:var(--maroc-red); color:white; border:none; padding:5px 15px;">Acheter</button>
            </div>
        `;
    });
}