---
layout: default
title: Meet the Chef
custom_js: |
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
---

<!-- Page Header -->
<section class="page-header">
    <div class="container">
        <h1>Meet the Chef</h1>
        <p>The Heart Behind Every Dish</p>
    </div>
</section>

<!-- Chef Profile -->
<section class="chef-profile">
    <div class="container">
        <div class="chef-grid">
            <div class="chef-image">
                <div class="image-placeholder round">
                    <img src="{{ site.baseurl }}/assets/images/chef.png" alt="Chef Radina">
                </div>
            </div>

            <div class="chef-bio">
                <h2>Hello, I'm Radina</h2>
                <p class="chef-title">Baker & Flavor Purist</p>

                <div class="bio-content">
                    <p>Radina's story isn't one of culinary school or family legacies in baking. It's one of discovery, the kind that sneaks up on you in the middle of everyday life.</p>
                    <p>She found her love for baking in her early thirties, and something clicked. What began as simple experiments in her home kitchen quickly turned into a full-blown obsession; testing, tweaking, tasting, learning; day after day, year after year. Over the past decade, she has quietly evolved into an artisan baker, drawing from classic European techniques, global inspirations, and a deep, almost stubborn commitment to doing things right.</p>
                    <p>Radina is known in her circle not for fancy tricks or frills, but for her uncompromising approach to baking; the kind that refuses to settle, takes time, and shows up with real flavor, every single time. She believes baked goods should be full of soul, and crafted like they mean something, because for her, they always have.</p>
                    <p>She's never wanted to turn baking into a commercial machine. Humble Bites exists not to scale, but to share. To share the love that goes into baking slowly, deliberately. To gather people around treats, just like she always has, whether it's a weekend gathering, a festive celebration, or just an ordinary Tuesday that needs a little sweetness.</p>
                    <p>For over 15 years, baking has been the heart of everything Radina does. And through Humble Bites, she's inviting you to taste that love, one lovingly baked bite at a time.</p>
                </div>
            </div>
        </div>

        <!-- Specialties -->
        <div class="specialties-section">
            <h2>My Specialties</h2>
            <div class="specialties-grid">
                <div class="specialty-card">
                    <div class="specialty-icon">☕️</div>
                    <h3>Biscottis</h3>
                    <p>Authentic Italian biscottis, twice-baked to perfection</p>
                </div>
                <div class="specialty-card">
                    <div class="specialty-icon">🍪</div>
                    <h3>Cookies</h3>
                    <p>Classic cookies with the perfect balance of crispy and chewy</p>
                </div>
                <div class="specialty-card">
                    <div class="specialty-icon">🧁</div>
                    <h3>Muffins & Rolls</h3>
                    <p>Wholesome, delicious muffins and cinnamon rolls perfect for breakfast or snacking</p>
                </div>
                <div class="specialty-card">
                    <div class="specialty-icon">🍰</div>
                    <h3>Cakes & Cheesecakes</h3>
                    <p>Decadent cakes, rich brownies, and creamy cheesecakes made with premium ingredients</p>
                </div>

            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <h2>Let's Create Something Delicious Together</h2>
        <p>Have a special request or want to place an order? Get in touch!</p>
        <a href="#" class="btn btn-primary whatsapp-order" data-message="Hi! I'd like to place an order">Order on WhatsApp</a>
    </div>
</section>
