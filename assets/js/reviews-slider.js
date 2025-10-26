/**
 * Reviews Slider - Loads and displays customer reviews with slider functionality
 */

let currentSlide = 0;
let reviewsData = [];
let autoSlideInterval;

/**
 * Load reviews from configuration file
 */
async function loadReviews() {
    try {
        const response = await fetch('/assets/reviews-config.json');
        if (!response.ok) {
            throw new Error('Failed to load reviews');
        }
        const data = await response.json();
        return data.reviews;
    } catch (error) {
        console.error('Error loading reviews:', error);
        return [];
    }
}

/**
 * Create a review card element
 */
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';

    card.innerHTML = `
        <div class="review-content">
            <div class="quote-icon">"</div>
            <p class="review-quote">${review.quote}</p>
            <p class="review-dish">Loved: <strong>${review.dish}</strong></p>
        </div>
        <div class="review-author">
            <div class="author-image">
                <img src="${review.image}" alt="${review.name}" onerror="this.src='/assets/images/logo.png'">
            </div>
            <div class="author-info">
                <p class="author-name">${review.name}</p>
            </div>
        </div>
    `;

    return card;
}

/**
 * Initialize the reviews slider
 */
function initReviewsSlider() {
    const track = document.getElementById('reviews-track');
    const dotsContainer = document.getElementById('slider-dots');

    if (!track || !dotsContainer) return;

    loadReviews().then(reviews => {
        if (reviews.length === 0) {
            track.innerHTML = '<p class="no-reviews">No reviews available yet.</p>';
            return;
        }

        reviewsData = reviews;

        // Create review cards
        reviews.forEach(review => {
            const card = createReviewCard(review);
            track.appendChild(card);
        });

        // Create dots
        reviews.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to review ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        // Set up navigation buttons
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);

        // Start auto-slide
        startAutoSlide();

        // Pause on hover
        const slider = document.querySelector('.reviews-slider');
        if (slider) {
            slider.addEventListener('mouseenter', stopAutoSlide);
            slider.addEventListener('mouseleave', startAutoSlide);
        }

        // Show first slide
        updateSlider();
    });
}

/**
 * Update slider position and active states
 */
function updateSlider() {
    const track = document.getElementById('reviews-track');
    const dots = document.querySelectorAll('.slider-dot');

    if (!track) return;

    // Update track position
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

/**
 * Go to specific slide
 */
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetAutoSlide();
}

/**
 * Go to next slide
 */
function nextSlide() {
    currentSlide = (currentSlide + 1) % reviewsData.length;
    updateSlider();
    resetAutoSlide();
}

/**
 * Go to previous slide
 */
function prevSlide() {
    currentSlide = (currentSlide - 1 + reviewsData.length) % reviewsData.length;
    updateSlider();
    resetAutoSlide();
}

/**
 * Start automatic sliding
 */
function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

/**
 * Stop automatic sliding
 */
function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}

/**
 * Reset auto-slide timer
 */
function resetAutoSlide() {
    startAutoSlide();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReviewsSlider);
} else {
    initReviewsSlider();
}
