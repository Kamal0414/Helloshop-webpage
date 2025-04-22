// Cart Functionality
let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    // Load cart from localStorage
    loadCart();
    
    // Update cart count
    updateCartCount();
    
    // Setup cart page if we're on it
    setupCartPage();
});

// Add item to cart
function addToCart(item) {
    cart.push(item);
    saveCart();
}

// Remove item from cart
function removeFromCart(itemId) {
    const index = cart.findIndex(item => item.id === itemId);
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart();
        updateCartCount();
        
        // Update cart page if we're on it
        if (window.location.pathname.includes('cart.html')) {
            renderCartItems();
        }
    }
}

// Clear cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    
    // Update cart page if we're on it
    if (window.location.pathname.includes('cart.html')) {
        renderCartItems();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('helloshop-cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('helloshop-cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (error) {
            console.error('Failed to parse cart from localStorage:', error);
            cart = [];
        }
    }
}

// Update cart count in the header
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cart.length;
    });
}

// Calculate total price
function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Setup cart page
function setupCartPage() {
    if (!window.location.pathname.includes('cart.html')) return;
    
    const emptyCartElement = document.getElementById('empty-cart');
    const cartItemsElement = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    const checkoutButton = document.getElementById('checkout-btn');
    
    // Render cart items
    renderCartItems();
    
    // Clear cart button
    if (clearCartButton) {
        clearCartButton.addEventListener('click', function() {
            clearCart();
        });
    }
    
    // Checkout button
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            if (cart.length === 0) return;
            
            this.textContent = 'Processing...';
            this.disabled = true;
            
            // Simulate checkout process
            setTimeout(() => {
                clearCart();
                alert('Thank you for your order!');
                this.textContent = 'Checkout';
                this.disabled = false;
            }, 2000);
        });
    }
}

// Render cart items
function renderCartItems() {
    const emptyCartElement = document.getElementById('empty-cart');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTableBody = document.getElementById('cart-table-body');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    if (!emptyCartElement || !cartItemsElement || !cartTableBody || !cartTotalPrice) return;
    
    // Show/hide empty cart message
    if (cart.length === 0) {
        emptyCartElement.style.display = 'block';
        cartItemsElement.style.display = 'none';
        return;
    } else {
        emptyCartElement.style.display = 'none';
        cartItemsElement.style.display = 'block';
    }
    
    // Render cart items
    cartTableBody.innerHTML = '';
    
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>${item.category}</p>
                    </div>
                </div>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button class="remove-btn" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        
        cartTableBody.appendChild(row);
    });
    
    // Update total price
    cartTotalPrice.textContent = `$${getTotalPrice().toFixed(2)}`;
    
    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.dataset.id;
            removeFromCart(itemId);
        });
    });
}
