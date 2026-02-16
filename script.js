let cartCount = 0;
const products = [
    { id: 1, name: "Huile d'Argan Bio", price: 150, brand: "Souss-Nature" },
    { id: 2, name: "Tapis Zanafi", price: 1200, brand: "Atlas Craft" },
    { id: 3, name: "Caftan Moderne", price: 850, brand: "MarocCreations" }
];

const grid = document.getElementById('products-grid');
const cartStatus = document.getElementById('cart');

// Afficher les produits
products.forEach(p => {
    grid.innerHTML += `
        <div class="product-card">
            <h3>${p.name}</h3>
            <p>Marque: ${p.brand}</p>
            <p><strong>${p.price} DH</strong></p>
            <button onclick="addToCart()">Ajouter au Panier</button>
        </div>
    `;
});

function addToCart() {
    cartCount++;
    cartStatus.innerText = `🛒 Panier (${cartCount})`;
    console.log("Nombre d'articles:", cartCount);
}