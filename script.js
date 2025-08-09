let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCartCount();
}

function updateCartCount() {
    let cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}
