---
layout: default
title: Uncompromisingly Authentic
custom_js: |
    // Load featured items on homepage
    window.addEventListener('DOMContentLoaded', () => {
        loadMenu().then(menuData => {
            const specialsGrid = document.getElementById('specials-grid');
            const featuredItems = [];

            // Specific items to feature: Zesty Fruit & Nuts Biscotti, Banana Choco Chunk Muffins, Choco Chunk Cookies
            const featuredItemIds = ['zesty-fruit-nuts-biscotti', 'banana-choco-chunk-muffins', 'choco-chunk-cookies'];

            // Find and add the specific items
            menuData.categories.forEach(category => {
                category.items.forEach(item => {
                    if (featuredItemIds.includes(item.id)) {
                        featuredItems.push({ ...item, categoryName: category.name });
                    }
                });
            });

            if (featuredItems.length === 0) {
                specialsGrid.innerHTML = '<p class="no-items">No items available. Check back soon!</p>';
                return;
            }

            featuredItems.forEach(item => {
                const card = createProductCard(item, menuData.whatsappNumber);
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

<!-- Our Specials Preview -->
<section class="specials-preview">
    <div class="container">
        <h2 class="section-title">Our Specials</h2>
        <p class="section-subtitle">Handpicked favorites you'll love</p>
        <div id="specials-grid" class="products-grid">
            <!-- Products will be loaded here by JavaScript -->
        </div>
        <div class="text-center">
            <a href="{{ site.baseurl }}/menu" class="btn btn-primary">View Full Menu</a>
        </div>
    </div>
</section>
