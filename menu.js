// Menu Data
const menuItems = [
    {
        id: 'coffee-1',
        name: 'Espresso',
        description: 'A concentrated shot of coffee with a rich flavor and crema on top.',
        price: 2.50,
        category: 'coffee',
        image: 'images/coffee/espresso.jpg'
    },
    {
        id: 'coffee-2',
        name: 'Cappuccino',
        description: 'Equal parts espresso, steamed milk, and milk foam for a perfect balance of rich flavor and creamy texture.',
        price: 3.75,
        category: 'coffee',
        image: 'images/coffee/cappuccino.jpg'
    },
    {
        id: 'coffee-3',
        name: 'Latte',
        description: 'Espresso with steamed milk and a light layer of foam on top.',
        price: 4.00,
        category: 'coffee',
        image: 'images/coffee/latte.jpg'
    },
    {
        id: 'coffee-4',
        name: 'Americano',
        description: 'Espresso with hot water for a smooth, rich coffee.',
        price: 2.75,
        category: 'coffee',
        image: 'images/coffee/americano.jpg'
    },
    {
        id: 'coffee-5',
        name: 'Macchiato',
        description: 'Espresso with a small amount of frothy milk.',
        price: 3.25,
        category: 'coffee',
        image: 'images/coffee/Macchiato.jpg'
    },
    {
        id: 'coffee-6',
        name: 'Mocha',
        description: 'Espresso with steamed milk and chocolate syrup, topped with whipped cream.',
        price: 4.50,
        category: 'coffee',
        image: 'images/coffee/Mocha.jpg'
    },
    {
        id: 'coffee-7',
        name: 'Flat White',
        description: 'Espresso with steamed milk, similar to a latte but with a velvety texture.',
        price: 4.25,
        category: 'coffee',
        image: 'images/coffee/Flat White.jpg'
    },
    {
        id: 'coffee-8',
        name: 'Irish Coffee',
        description: 'Espresso with whiskey, sugar, and a layer of cream.',
        price: 5.50,
        category: 'coffee',
        image: 'images/coffee/Irish Coffee.jpg'
    },
    {
        id: 'tea-1',
        name: 'Green Tea',
        description: 'Delicate tea with a fresh, grassy flavor and numerous health benefits.',
        price: 3.00,
        category: 'tea',
        image: 'images/tea/Green Tea.jpg'
    },
    {
        id: 'tea-2',
        name: 'Earl Grey',
        description: 'Black tea infused with bergamot oil for a distinctive citrusy flavor.',
        price: 3.50,
        category: 'tea',
        image: 'images/tea/Earl Grey.jpg'
    },
    {
        id: 'tea-3',
        name: 'Chamomile Tea',
        description: 'Caffeine-free herbal tea with a floral aroma and calming properties.',
        price: 3.25,
        category: 'tea',
        image: 'images/tea/Chamomile Tea.jpg'
    },
    {
        id: 'tea-4',
        name: 'Chai Latte',
        description: 'Black tea infused with spices and steamed milk.',
        price: 4.00,
        category: 'tea',
        image: 'images/tea/Chai Latte.jpg'
    },
    {
        id: 'tea-5',
        name: 'Matcha Latte',
        description: 'Japanese green tea powder whisked with steamed milk for a creamy texture.',
        price: 4.50,
        category: 'tea',
        image: 'images/tea/Matcha Latte.jpg'
    },
    {
        id: 'tea-6',
        name: 'Oolong Tea',
        description: 'Semi-oxidized tea with a floral and earthy flavor.',
        price: 3.75,
        category: 'tea',
        image: 'images/tea/Oolong Tea.jpg'
    },
    {
        id: 'tea-7',
        name: 'Peppermint Tea',
        description: 'Herbal tea with a refreshing minty flavor.',
        price: 3.00,
        category: 'tea',
        image: 'images/tea/Peppermint Tea.jpg'
    },
    {
        id: 'pastry-1',
        name: 'Croissant',
        description: 'Buttery, flaky pastry with a golden-brown crust.',
        price: 2.75,
        category: 'pastries',
        image: 'images/pastries/croissant.jpg'
    },
    {
        id: 'pastry-2',
        name: 'Blueberry Muffin',
        description: 'Moist muffin packed with juicy blueberries and topped with a sugar crumble.',
        price: 3.00,
        category: 'pastries',
        image: 'images/pastries/blueberry-muffin.jpg'
    },
    {
        id: 'pastry-3',
        name: 'Chocolate Croissant',
        description: 'Flaky croissant filled with melted chocolate.',
        price: 3.25,
        category: 'pastries',
        image: 'images/pastries/chocolate croissant.jpg'
    },
    {
        id: 'pastry-4',
        name: 'Cinnamon Roll',
        description: 'Soft, swirled pastry with cinnamon and sugar, topped with icing.',
        price: 3.50,
        category: 'pastries',
        image: 'images/pastries/cinnabon.jpg'
    },
    {
        id: 'pastry-5',
        name: 'Almond Danish',
        description: 'Buttery pastry with an almond filling and sliced almonds on top.',
        price: 3.75,
        category: 'pastries',
        image: 'images/pastries/almond-danish.jpg'
    },
    {
        id: 'pastry-6',
        name: 'Apple Turnover',
        description: 'Flaky pastry filled with spiced apples.',
        price: 3.50,
        category: 'pastries',
        image: 'images/pastries/apple-turnover.jpg'
    },
    {
        id: 'pastry-7',
        name: 'Strawberry Scone',
        description: 'Light, crumbly scone with fresh strawberries.',
        price: 3.25,
        category: 'pastries',
        image: 'images/pastries/strawberry-scones.jpg'
    },
];

function addToCart(item) {
    console.log('Adding to cart:', item);
}

function updateCartCount() {
    console.log('Updating cart count');
}

// Menu Functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.getElementById('menu-items');
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (!menuContainer) return;

    displayMenuItems('all');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.dataset.category;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            displayMenuItems(category);
        });
    });

    // Function to display menu items
    function displayMenuItems(category) {
        const filteredItems = category === 'all'
            ? menuItems
            : menuItems.filter(item => item.category === category);

        menuContainer.innerHTML = '';

        filteredItems.forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.className = 'menu-item';
            menuItemElement.innerHTML = `
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3 class="menu-item-name">${item.name}</h3>
                        <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                    <button class="btn primary-btn add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
                </div>
            `;

            menuContainer.appendChild(menuItemElement);
        });

        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                const itemId = this.dataset.id;
                const item = menuItems.find(item => item.id === itemId);

                if (item) {
                    addToCart(item);
                    updateCartCount();

                    this.textContent = 'Added to Cart!';
                    this.disabled = true;

                    setTimeout(() => {
                        this.textContent = 'Add to Cart';
                        this.disabled = false;
                    }, 2000);
                }
            });
        });
    }
});
