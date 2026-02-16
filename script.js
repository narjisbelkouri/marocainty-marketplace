const products = [
    { id: 1, name: "Tajine Traditionnel", price: "150 DH", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Caftan Moderne", price: "1200 DH", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Huile d'Argan Bio", price: "80 DH", image: "https://via.placeholder.com/200" },
];

const productGrid = document.getElementById('product-grid');

products.forEach(product => {
    const card = `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="btn-primary" onclick="addToCart()">Add to Cart</button>
        </div>
    `;
    productGrid.innerHTML += card;
});

function addToCart() {
    let count = document.getElementById('cart-count');
    count.innerText = parseInt(count.innerText) + 1;
    alert("Zdtih l-panier! 🛒");
}
