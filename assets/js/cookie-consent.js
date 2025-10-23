// Cookie Consent Manager
(function() {
    'use strict';

    const COOKIE_NAME = 'humblebites_cookie_consent';
    const COOKIE_EXPIRY_DAYS = 365;

    // Check if consent has been given
    function hasConsent() {
        return getCookie(COOKIE_NAME) === 'accepted';
    }

    // Get cookie value
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    // Set cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
    }

    // Initialize Google Analytics
    function initGoogleAnalytics() {
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }

    // Deny Google Analytics
    function denyGoogleAnalytics() {
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    }

    // Show cookie banner
    function showBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            setTimeout(() => {
                banner.classList.add('show');
            }, 500);
        }
    }

    // Hide cookie banner
    function hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.remove('show');
        }
    }

    // Accept cookies
    function acceptCookies() {
        setCookie(COOKIE_NAME, 'accepted', COOKIE_EXPIRY_DAYS);
        initGoogleAnalytics();
        hideBanner();
    }

    // Decline cookies
    function declineCookies() {
        setCookie(COOKIE_NAME, 'declined', COOKIE_EXPIRY_DAYS);
        denyGoogleAnalytics();
        hideBanner();
    }

    // Initialize
    function init() {
        const consentStatus = getCookie(COOKIE_NAME);

        if (consentStatus === 'accepted') {
            initGoogleAnalytics();
        } else if (consentStatus === 'declined') {
            denyGoogleAnalytics();
        } else {
            // No consent given yet, show banner
            showBanner();
        }

        // Attach event listeners
        const acceptBtn = document.getElementById('cookie-accept-btn');
        const declineBtn = document.getElementById('cookie-decline-btn');

        if (acceptBtn) {
            acceptBtn.addEventListener('click', acceptCookies);
        }

        if (declineBtn) {
            declineBtn.addEventListener('click', declineCookies);
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose functions globally if needed
    window.cookieConsent = {
        accept: acceptCookies,
        decline: declineCookies,
        hasConsent: hasConsent
    };
})();
