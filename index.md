---
layout: default
title: Uncompromisingly Authentic
custom_js: |
    // Load featured items from scheduledDishes on homepage
    window.addEventListener('DOMContentLoaded', () => {
        loadMenu().then(menuData => {
            const specialsGrid = document.getElementById('specials-grid');
            const sectionTitle = document.getElementById('home-section-title');
            const sectionSubtitle = document.getElementById('home-section-subtitle');

            // Get scheduled dishes from config
            const scheduledDishes = menuData.scheduledDishes || [];

            // Create a map of all items for quick lookup
            const itemsMap = {};
            menuData.categories.forEach(category => {
                category.items.forEach(item => {
                    itemsMap[item.id] = { ...item, categoryName: category.name };
                });
            });

            // Fallback special item IDs when no scheduled dishes
            const fallbackSpecialIds = ['zesty-fruit-nuts-biscotti', 'banana-choco-chunk-muffins', 'choco-chunk-cookies'];

            // Determine if we're showing scheduled dishes or specials
            const showingScheduled = scheduledDishes.length > 0;

            // Update section title and subtitle
            if (showingScheduled) {
                sectionTitle.textContent = 'Currently Accepting Orders';
                sectionSubtitle.textContent = 'Limited batches available - Order now before spots fill up!';
            } else {
                sectionTitle.textContent = 'Our Specials';
                sectionSubtitle.textContent = 'Handpicked favorites you\'ll love';
            }

            // If showing specials (no scheduled dishes), use fallback items
            if (!showingScheduled) {
                const specialItems = fallbackSpecialIds
                    .map(id => itemsMap[id])
                    .filter(item => item);

                if (specialItems.length === 0) {
                    specialsGrid.innerHTML = '<p class="no-items">No items available. Check back soon!</p>';
                    return;
                }

                specialItems.forEach(item => {
                    const card = createProductCard(item, menuData.whatsappNumber);
                    specialsGrid.appendChild(card);
                });
                return;
            }

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

                // Share button
                const shareButton = document.createElement('a');
                shareButton.className = 'share-btn-icon';
                const shareImg = document.createElement('img');
                shareImg.src = '/assets/images/share-90.png';
                shareImg.alt = 'Share';
                shareButton.appendChild(shareImg);
                const shareMessage = `Check out this delicious item from Humble Bites!\n\n*${item.name}*\n${item.description}\n\n∙ Portion: ${item.portionSize}\n∙ Price: ${item.currency}${item.price}\n∙ Delivery: ${formattedDeliveryDate}\n∙ Status: ${ordersOpen ? 'Orders Open' : 'Orders Closed'}\n\nView full menu: https://humblebites.in?utm_source=whatsapp&utm_medium=social&utm_campaign=dish_share`;
                shareButton.href = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
                shareButton.target = '_blank';
                shareButton.rel = 'noopener noreferrer';
                shareButton.title = 'Share on WhatsApp';

                // Product details (price + share)
                const details = document.createElement('div');
                details.className = 'product-details';
                const price = document.createElement('div');
                price.className = 'product-price';
                price.textContent = `${item.currency}${item.price}`;
                details.appendChild(price);
                details.appendChild(shareButton);

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
                <h3>Quality Ingredients & Flavors</h3>
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

<!-- Currently Accepting Orders / Our Specials -->
<section class="specials-preview">
    <div class="container">
        <div class="order-types-blurb">
            <h3>Two Ways to Order</h3>
            <div class="order-types-content">
                <div class="order-type">
                    <strong>Running Orders:</strong> Freshly made pre-set dishes delivered on promised dates. Perfect for getting your favorites on a schedule!
                </div>
                <div class="order-type">
                    <strong>Special Orders:</strong> Browse our full menu for an extensive selection. Custom orders available with advance notice.
                </div>
            </div>
        </div>
        <h2 id="home-section-title" class="section-title">Currently Accepting Orders</h2>
        <p id="home-section-subtitle" class="section-subtitle">Limited batches available - Order now before spots fill up!</p>
        <div id="specials-grid" class="products-grid">
            <!-- Products will be loaded here by JavaScript -->
        </div>
        <div class="text-center">
            <a href="{{ site.baseurl }}/menu" class="btn btn-primary">View Full Menu</a>
        </div>
    </div>
</section>

<!-- Customer Reviews Section -->
<section class="reviews-section">
    <div class="container">
        <h2 class="section-title">What Our Customers Say</h2>
        <p class="section-subtitle">Real reviews from real food lovers</p>

        <div class="reviews-slider">
            <button class="slider-btn prev-btn" aria-label="Previous review">‹</button>

            <div class="reviews-container">
                <div class="reviews-track" id="reviews-track">
                    <!-- Reviews will be loaded here by JavaScript -->
                </div>
            </div>

            <button class="slider-btn next-btn" aria-label="Next review">›</button>
        </div>

        <div class="slider-dots" id="slider-dots">
            <!-- Dots will be generated by JavaScript -->
        </div>
    </div>
</section>
