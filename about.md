---
layout: default
title: About Us
custom_js: |
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
---

<!-- Hero Header -->
<section class="hero hero-about">
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">About Us</h1>
            <p class="hero-subtitle">Our Story, Our Passion</p>
        </div>
    </div>
</section>

<!-- About Content -->
<section class="about-content">
    <div class="container">
        <div class="about-grid">
            <div class="about-text">

                <h2>The Philosophy of Cooking</h2>
                <p>We believe great food starts with great ingredients. That's why we're obsessed, lovingly so, with quality. From the flour in your cake to the spices in your kebab, every ingredient is chosen with intention. No shortcuts, no substitutes, no compromise. Just real food, prepared the way it was meant to be.</p>
                <p>Radina, our chef and founder, follows traditional cooking methods that preserve the integrity of original recipes. She brings alive flavors that are true to their roots — honest, bold, and soul-satisfying. Each bite is designed to remind you of how food should taste, whether it's a perfectly spiced keema paav or a lemon drizzle cake that actually drizzles with love.</p>
                <p>We don't chase trends or prettify our plates to impress, we cook to nourish, to delight, and to create memories that linger on the palate.</p>
                <p>We believe that the best baked goods come from quality ingredients and attention to detail. Each cupcake, muffin, cookie, and biscotti is handcrafted in small batches to ensure freshness and flavor in every bite.</p>

                <h2>The Philosophy of Business</h2>
                <p>We're not here to scale, mass-produce, or become the next big food brand. Humble Bites is proudly small, and plans to stay that way. This is a conscious choice.</p>
                <p>We believe in slow food, in small batches, and in the magic that happens when one person pours their heart, soul, and full attention into the food they create. That's why Radina still cooks every dish herself, no ghost kitchens, no industrial kitchens, and no dilution of love.</p>
                <p>Our pricing reflects this philosophy. We're not premium for the sake of it, and we're not competing to be the cheapest. We're priced just right for what we offer — honest, thoughtfully made food that respects the value of effort, quality, and flavor.</p>

            </div>


        </div>

        <div class="values-section">
            <h2>What Makes Us Special</h2>
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
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <h2>Ready to Order?</h2>
        <p>Get in touch via WhatsApp to place your order today</p>
        <a href="#" class="btn btn-primary whatsapp-order" data-message="Hi! I'd like to place an order">Order on WhatsApp</a>
    </div>
</section>
