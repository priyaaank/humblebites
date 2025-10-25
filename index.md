---
layout: default
title: Uncompromisingly Authentic
custom_js: |
    // Load featured items from scheduledDishes on homepage
    window.addEventListener('DOMContentLoaded', () => {
        loadMenu().then(menuData => {
            const specialsGrid = document.getElementById('specials-grid');

            // Get scheduled dishes from config
            const scheduledDishes = menuData.scheduledDishes || [];

            if (scheduledDishes.length === 0) {
                specialsGrid.innerHTML = '<p class="no-items">No items available. Check back soon!</p>';
                return;
            }

            // Create a map of all items for quick lookup
            const itemsMap = {};
            menuData.categories.forEach(category => {
                category.items.forEach(item => {
                    itemsMap[item.id] = { ...item, categoryName: category.name };
                });
            });

            // Create cards for each scheduled dish
            scheduledDishes.forEach(scheduled => {
                const item = itemsMap[scheduled.itemId];
                if (!item) return;

                // Check if order deadline has passed
                const now = new Date();
                const deadline = new Date(scheduled.orderDeadline);
                const isDeadlinePassed = now > deadline;

                // Determine if orders are open
                const ordersOpen = scheduled.orderOpen && !isDeadlinePassed;

                // Format delivery date
                const deliveryDate = new Date(scheduled.cookingDate);
                const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
                const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', dateOptions);

                // Create custom product card with order status and delivery date
                const card = document.createElement('div');
                card.className = 'product-card' + (!item.available ? ' unavailable' : '');

                // Product image
                const image = document.createElement('div');
                image.className = 'product-image';
                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.name;
                img.onerror = function() {
                    this.style.display = 'none';
                    const placeholder = document.createElement('span');
                    placeholder.textContent = item.name;
                    image.appendChild(placeholder);
                };
                image.appendChild(img);

                // Product content
                const content = document.createElement('div');
                content.className = 'product-content';

                // Availability badge
                if (!item.available) {
                    const badge = document.createElement('span');
                    badge.className = 'unavailable-badge';
                    badge.textContent = 'Sold Out';
                    content.appendChild(badge);
                }

                // Product name
                const name = document.createElement('h3');
                name.className = 'product-name';
                name.textContent = item.name;

                // Product description
                const description = document.createElement('p');
                description.className = 'product-description';
                description.textContent = item.description;

                // Portion size
                const portion = document.createElement('p');
                portion.className = 'product-portion';
                portion.textContent = `Portion: ${item.portionSize}`;

                // Order status
                const orderStatus = document.createElement('div');
                orderStatus.className = 'order-status-home';
                orderStatus.innerHTML = `<span class="status-label">Order Status:</span> <span class="status-value ${ordersOpen ? 'status-open' : 'status-closed'}">${ordersOpen ? 'Open' : 'Closed'}</span>`;

                // Delivery date
                const deliveryInfo = document.createElement('div');
                deliveryInfo.className = 'delivery-date-home';
                deliveryInfo.innerHTML = `<span class="delivery-label">Delivery Date:</span> <span class="delivery-value">${formattedDeliveryDate}</span>`;

                // Product details (price)
                const details = document.createElement('div');
                details.className = 'product-details';
                const price = document.createElement('div');
                price.className = 'product-price';
                price.textContent = `${item.currency}${item.price}`;
                details.appendChild(price);

                // Order button
                const button = document.createElement('a');
                const buttonEnabled = item.available && ordersOpen;
                button.className = 'btn ' + (buttonEnabled ? 'btn-primary' : 'btn-outline disabled');
                button.textContent = buttonEnabled ? 'Order on WhatsApp' : 'Orders Closed';

                if (buttonEnabled) {
                    const orderMessage = `Hi! I'd like to order ${item.name} (${item.portionSize}) for delivery on ${formattedDeliveryDate} - ${item.currency}${item.price}`;
                    button.href = createWhatsAppLink(menuData.whatsappNumber, orderMessage);
                    button.target = '_blank';
                    button.rel = 'noopener noreferrer';
                } else {
                    button.style.pointerEvents = 'none';
                    button.style.cursor = 'not-allowed';
                }

                // Assemble the card
                content.appendChild(name);
                content.appendChild(description);
                content.appendChild(portion);
                content.appendChild(orderStatus);
                content.appendChild(deliveryInfo);
                content.appendChild(details);
                content.appendChild(button);

                card.appendChild(image);
                card.appendChild(content);

                specialsGrid.appendChild(card);
            });
        });

        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    });
---

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">Freshly Baked with Love</h1>
            <p class="hero-subtitle">Homemade cupcakes, muffins, cookies, and biscottis made with premium ingredients</p>
            <div class="hero-buttons">
                <a href="{{ site.baseurl }}/menu" class="btn btn-primary">View Menu</a>
                <a href="#" class="btn btn-secondary whatsapp-order" data-message="Hi! I'd like to place an order">Order on WhatsApp</a>
            </div>
        </div>
    </div>
</section>

<!-- What Makes Us Special Section -->
<section class="features">
    <div class="container">
        <h2 class="section-title">What Makes Us Special</h2>
        <div class="values-grid">
            <div class="value-card">
                <div class="value-icon">✨</div>
                <h3>Small & Limited Batches</h3>
                <p>Small is beautiful. Every batch carries Radina's personal touch.</p>
            </div>
            <div class="value-card">
                <div class="value-icon">🌿</div>
                <h3>Honest Ingredients & Flavors</h3>
                <p>Real flavors, no shortcuts. Authentic taste, the way it was meant to be.</p>
            </div>
            <div class="value-card">
                <div class="value-icon">📖</div>
                <h3>Authenticity Over Aesthetics</h3>
                <p>Traditional recipes, original methods. Flavor comes from process, not plating.</p>
            </div>
            <div class="value-card">
                <div class="value-icon">❤️</div>
                <h3>Cooked With Love</h3>
                <p>Handmade, heart-first. Food that fills your soul, not just your stomach.</p>
            </div>
        </div>
    </div>
</section>

<!-- Currently Accepting Orders -->
<section class="specials-preview">
    <div class="container">
        <h2 class="section-title">Currently Accepting Orders</h2>
        <p class="section-subtitle">Limited batches available - Order now before spots fill up!</p>
        <div id="specials-grid" class="products-grid">
            <!-- Products will be loaded here by JavaScript -->
        </div>
        <div class="text-center">
            <a href="{{ site.baseurl }}/menu" class="btn btn-primary">View Full Menu</a>
        </div>
    </div>
</section>
