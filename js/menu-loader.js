/**
 * Menu Loader - Loads menu data from menu-config.json and creates product cards
 */

/**
 * Load menu configuration from JSON file
 * @returns {Promise<Object>} Menu data object
 */
async function loadMenu() {
    try {
        const response = await fetch('menu-config.json');
        if (!response.ok) {
            throw new Error('Failed to load menu configuration');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading menu:', error);
        return {
            lastUpdated: new Date().toISOString().split('T')[0],
            whatsappNumber: '1234567890',
            categories: []
        };
    }
}

/**
 * Create WhatsApp order link
 * @param {string} phone - WhatsApp phone number
 * @param {string} message - Pre-filled message
 * @returns {string} WhatsApp URL
 */
function createWhatsAppLink(phone, message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Create a product card element
 * @param {Object} item - Product item data
 * @param {string} whatsappNumber - WhatsApp number for orders
 * @returns {HTMLElement} Product card element
 */
function createProductCard(item, whatsappNumber) {
    const card = document.createElement('div');
    card.className = 'product-card' + (!item.available ? ' unavailable' : '');

    // Product image
    const image = document.createElement('div');
    image.className = 'product-image';

    // Check if image exists, otherwise show placeholder
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.onerror = function() {
        // If image fails to load, show placeholder text
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

    // Product details (price only)
    const details = document.createElement('div');
    details.className = 'product-details';

    const price = document.createElement('div');
    price.className = 'product-price';
    price.textContent = `${item.currency}${item.price}`;

    details.appendChild(price);

    // Order button
    const button = document.createElement('a');
    button.className = 'btn ' + (item.available ? 'btn-primary' : 'btn-outline');
    button.textContent = item.available ? 'Order on WhatsApp' : 'Notify When Available';

    if (item.available) {
        const orderMessage = `Hi! I'd like to order ${item.name} (${item.portionSize}) - ${item.currency}${item.price}`;
        button.href = createWhatsAppLink(whatsappNumber, orderMessage);
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
    } else {
        const notifyMessage = `Hi! I'd like to be notified when ${item.name} is available again.`;
        button.href = createWhatsAppLink(whatsappNumber, notifyMessage);
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
    }

    // Assemble the card
    content.appendChild(name);
    content.appendChild(description);
    content.appendChild(portion);
    content.appendChild(details);
    content.appendChild(button);

    card.appendChild(image);
    card.appendChild(content);

    return card;
}

/**
 * Initialize WhatsApp links on the page
 */
function initializeWhatsAppLinks() {
    loadMenu().then(menuData => {
        const whatsappLinks = document.querySelectorAll('.whatsapp-order');
        whatsappLinks.forEach(link => {
            const message = link.getAttribute('data-message') || "Hi! I'd like to place an order";
            link.href = createWhatsAppLink(menuData.whatsappNumber, message);
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        });
    });
}

// Initialize WhatsApp links when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWhatsAppLinks);
} else {
    initializeWhatsAppLinks();
}

// Make functions available globally
window.loadMenu = loadMenu;
window.createProductCard = createProductCard;
window.createWhatsAppLink = createWhatsAppLink;
