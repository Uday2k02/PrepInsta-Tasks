let cart = [];
let cartCount = 0;
let totalCost = 0;

// display products
const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 9.99 },
    { id: 3, name: "Product 3", price: 12.99 },
    // add more products here
];

const productsSection = document.querySelector('.products');

products.forEach((product) => {
    const productHTML = `
        <div class="product">
            <h2>${product.name}</h2>
            <p class="price">$${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    productsSection.insertAdjacentHTML('beforeend', productHTML);
});

// add event listeners to add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        const product = products.find((product) => product.id === parseInt(productId));
        if (product) {
            addProductToCart(product);
        }
    });
});

// add product to cart
function addProductToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }
    updateCartCount();
    updateTotalCost();
    renderCart();
}

// update cart count
function updateCartCount() {
    cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// update total cost
function updateTotalCost() {
    totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    document.getElementById('total-cost').textContent = `$${totalCost.toFixed(2)}`;
}

// render cart
function renderCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cart.forEach((item) => {
        const cartItemHTML = `
            <li>
                <span class="quantity">${item.quantity}</span>
                <span>${item.name}</span>
                <span>$${item.price}</span>
                <button class="remove" data-id="${item.id}">Remove</button>
            </li>
        `;
        cartList.insertAdjacentHTML('beforeend', cartItemHTML);
    });
}

// add event listeners to remove buttons
const removeButtons = document.querySelectorAll('.remove');

removeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        const product = cart.find((item) => item.id === parseInt(productId));
        if (product) {
            removeProductFromCart(product);
        }
    });
});

// remove product from cart
function removeProductFromCart(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    updateCartCount();
    updateTotalCost();
    renderCart();
}

// toggle cart visibility
document.querySelector('.cart-icon').addEventListener('click', () => {
    const cartSection = document.querySelector('.cart');
    cartSection.classList.toggle('show');
});