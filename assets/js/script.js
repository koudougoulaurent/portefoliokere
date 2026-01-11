/**
 * ============================================
 * PORTFOLIO GUILLAUME KERE - JAVASCRIPT
 * ============================================
 */

'use strict';

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeScrollAnimations();
    initializeScrollToTop();
    initializeContactForm();
    initializeSmoothScroll();
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Handle scroll event for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Initialize AOS (Animate On Scroll) library
 */
function initializeScrollAnimations() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            disable: function() {
                // Disable animations on mobile devices for better performance
                return window.innerWidth < 768;
            }
        });
    }
}

/**
 * Scroll to top button functionality
 */
function initializeScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (!scrollTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Contact form handling
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!validateForm(formData)) {
            return;
        }
        
        // Show success message
        showNotification('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send the data to a server here
        // Example: sendContactForm(formData);
    });
}

/**
 * Validate contact form data
 * @param {Object} data - Form data to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateForm(data) {
    // Check if all fields are filled
    if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification('Veuillez remplir tous les champs du formulaire.', 'error');
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Veuillez entrer une adresse email valide.', 'error');
        return false;
    }
    
    // Validate message length
    if (data.message.length < 10) {
        showNotification('Votre message doit contenir au moins 10 caractères.', 'error');
        return false;
    }
    
    return true;
}

/**
 * Show notification message
 * @param {string} message - Message to display
 * @param {string} type - Type of notification (success, error, info)
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type} notification-toast`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        max-width: 500px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        animation: slideInRight 0.3s ease;
    `;
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} me-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

/**
 * Smooth scroll functionality for anchor links
 */
function initializeSmoothScroll() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (targetId === '#' || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Typing effect for hero section (optional enhancement)
 */
function initializeTypingEffect() {
    const subtitleElement = document.querySelector('.hero-subtitle');
    if (!subtitleElement) return;
    
    const text = subtitleElement.textContent;
    subtitleElement.textContent = '';
    
    let index = 0;
    const typingSpeed = 50;
    
    function type() {
        if (index < text.length) {
            subtitleElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 500);
}

/**
 * Counter animation for statistics (can be used later)
 * @param {HTMLElement} element - Element containing the number
 * @param {number} target - Target number to count to
 * @param {number} duration - Duration of animation in milliseconds
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

/**
 * Lazy load images for better performance (can be used later)
 */
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Handle window resize events with debouncing
 */
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Reinitialize AOS on resize if needed
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 250);
});

/**
 * Prevent context menu on images (optional security)
 */
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', function(e) {
        // Uncomment to disable right-click on images
        // e.preventDefault();
    });
});

/**
 * Log message to console (for debugging)
 */
console.log('%c Portfolio Guillaume KERE ', 'background: #2563eb; color: #fff; padding: 10px; font-size: 16px; font-weight: bold;');
console.log('%c Développé avec ❤️ ', 'background: #1e293b; color: #fff; padding: 10px; font-size: 14px;');

