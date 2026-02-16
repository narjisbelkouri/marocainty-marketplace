// Données des marques et produits (Authenticité garantie)
const database = {
    'souss': {
        name: "Souss Nature",
        description: "Spécialiste de la Cosmétique naturelle Maroc. Huile d'Argan 100% bio.",
        products: [
            { name: "Huile d'Argan Bio", price: 150, stars: 5, img: "argan.jpg" },
            { name: "Savon Noir Premium", price: 60, stars: 4, img: "savon.jpg" }
        ]
    },
    'atlas': {
        name: "Atlas Craft",
        description: "Tapis marocain fait main. Tradition et design moderne.",
        products: [
            { name: "Tapis Zanafi", price: 1200, stars: 5, img: "tapis.jpg" },
            { name: "Coussin Artisanal", price: 250, stars: 4, img: "coussin.jpg" }
        ]
    }
};

let cartCount = 0;

function showProducts(brandId) {
    const brand = database[brandId];
    const productsSection = document.getElementById('products-grid') || document.createElement('section');
    productsSection.id = 'products-grid';
    
    // Nettoyer et afficher le titre de la marque
    productsSection.innerHTML = `<h2>Produits de ${brand.name}</h2><div class="products-container"></div>`;
    document.body.appendChild(productsSection);

    const container = productsSection.querySelector('.products-container');

    brand.products.forEach(p => {
        container.innerHTML += `
            <div class="product-card">
                <div class="product-img"></div> <h3>${p.name}</h3>
                <p class="stars">${"⭐".repeat(p.stars)}</p>
                <p class="price"><strong>${p.price} DH</strong></p>
                <button onclick="addToCart()">Ajouter au Panier</button>
            </div>
        `;
    });
    
    // Scroll automatique vers les produits
    productsSection.scrollIntoView({ behavior: 'smooth' });
}

function addToCart() {
    cartCount++;
    document.querySelector('.cart-btn').innerText = `🛒 Panier (${cartCount})`;
    alert("Produit ajouté au panier !");
}
