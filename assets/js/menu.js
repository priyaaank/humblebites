document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.category-nav a');
    const sections = document.querySelectorAll('.menu-section');
    const mainContent = document.querySelector('.main-content');
    
    // Only run menu-specific scripts on the menu page
    if (categoryLinks.length === 0 || sections.length === 0) {
        return;
    }
    
    // Smooth scrolling for navigation links
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Remove active class from all links
                categoryLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                
                // Smooth scroll to section at top of page
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Enhanced scroll-based category highlighting
    function updateActiveNav() {
        let current = '';
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        // Find the section that is most visible in the viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;
            
            // Check if section is in viewport
            const isInViewport = (sectionTop <= scrollTop + windowHeight * 0.5) && 
                                (sectionBottom >= scrollTop + windowHeight * 0.3);
            
            // Prioritize sections that are at the top of the viewport
            if (scrollTop >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active state with enhanced visual feedback
        categoryLinks.forEach(link => {
            const isActive = link.getAttribute('href').substring(1) === current;
            link.classList.toggle('active', isActive);
            
            // Add subtle animation effect
            if (isActive) {
                link.style.transform = 'translateX(8px)';
            } else {
                link.style.transform = 'translateX(0)';
            }
        });
    }
    
    // Optimized scroll event handling with debouncing
    let scrollTimeout;
    let ticking = false;
    
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
        
        // Clear previous timeout and set new one for final update
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveNav, 150);
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial active state
    setTimeout(() => {
        updateActiveNav();
    }, 100);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        setTimeout(updateActiveNav, 200);
    }, { passive: true });
});