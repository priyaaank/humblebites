---
layout: default
title: Menu
custom_js: |
    window.addEventListener('DOMContentLoaded', () => {
        loadMenu().then(menuData => {
            // Create category navigation
            const categoryNav = document.getElementById('category-nav');
            menuData.categories.forEach((category, index) => {
                const navItem = document.createElement('a');
                navItem.href = `#${category.id}`;
                navItem.className = 'category-nav-item' + (index === 0 ? ' active' : '');
                navItem.textContent = category.name;
                categoryNav.appendChild(navItem);
            });

            // Create menu sections
            const menuContainer = document.getElementById('menu-container');
            menuData.categories.forEach(category => {
                const section = document.createElement('div');
                section.className = 'menu-category';
                section.id = category.id;

                const header = document.createElement('div');
                header.className = 'category-header';
                header.innerHTML = `
                    <h2>${category.name}</h2>
                    <p>${category.description}</p>
                `;
                section.appendChild(header);

                const grid = document.createElement('div');
                grid.className = 'products-grid';

                if (category.items.length === 0) {
                    grid.innerHTML = '<p class="no-items">No items in this category today.</p>';
                } else {
                    category.items.forEach(item => {
                        const card = createProductCard(item, menuData.whatsappNumber);
                        grid.appendChild(card);
                    });
                }

                section.appendChild(grid);
                menuContainer.appendChild(section);
            });

            // Smooth scroll for category navigation
            document.querySelectorAll('.category-nav-item').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const target = document.getElementById(targetId);
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // Update active state
                    document.querySelectorAll('.category-nav-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    link.classList.add('active');
                });
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

<!-- Page Header -->
<section class="page-header">
    <div class="container">
        <h1>Our Menu</h1>
        <p id="menu-last-updated">Freshly made, limited batches — order while available</p>
    </div>
</section>

<!-- Menu Categories -->
<section class="menu-section">
    <div class="container">
        <!-- Category navigation -->
        <div class="category-nav" id="category-nav">
            <!-- Will be populated by JavaScript -->
        </div>

        <!-- Menu Items -->
        <div id="menu-container">
            <!-- Will be populated by JavaScript -->
        </div>
    </div>
</section>
