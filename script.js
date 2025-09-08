// Dark mode toggle functionality
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = this.themeToggle.querySelector('.theme-toggle-icon');
        this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
        
        this.init();
    }

    init() {
        // Set initial theme
        this.applyTheme(this.currentTheme);
        this.updateToggleIcon();
        
        // Add event listeners
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) => this.handleSystemThemeChange(e));
            
        // Add keyboard support
        this.themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    getStoredTheme() {
        return localStorage.getItem('theme');
    }

    storeTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    applyTheme(theme) {
        // Add transition class to prevent flash
        document.body.classList.add('theme-switching');
        
        // Apply theme
        document.documentElement.setAttribute('data-theme', theme);
        
        // Remove transition class after animation
        setTimeout(() => {
            document.body.classList.remove('theme-switching');
        }, 300);
        
        this.currentTheme = theme;
        this.storeTheme(theme);
    }

    updateToggleIcon() {
        const icons = {
            light: '🌙',
            dark: '☀️'
        };
        
        this.themeIcon.textContent = icons[this.currentTheme];
        
        // Update aria-label for accessibility
        const labels = {
            light: 'Switch to dark mode',
            dark: 'Switch to light mode'
        };
        
        this.themeToggle.setAttribute('aria-label', labels[this.currentTheme]);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        this.updateToggleIcon();
        
        // Add visual feedback
        this.addToggleAnimation();
        
        // Trigger custom event for other components
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme: newTheme } 
        }));
    }

    addToggleAnimation() {
        this.themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.themeToggle.style.transform = '';
        }, 150);
    }

    handleSystemThemeChange(e) {
        // Only update if user hasn't manually set a preference
        if (!this.getStoredTheme()) {
            const systemTheme = e.matches ? 'dark' : 'light';
            this.applyTheme(systemTheme);
            this.updateToggleIcon();
        }
    }
}

// Smooth scrolling for navigation (if added later)
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Intersection Observer for animations
class ScrollAnimations {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        // Create intersection observer for scroll animations
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observe elements that should animate on scroll
        this.observeElements();
    }

    observeElements() {
        const elementsToAnimate = document.querySelectorAll(
            '.about-item, .project-card, .hero-content'
        );
        
        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Monitor theme change performance
        window.addEventListener('themeChanged', (e) => {
            this.measureThemeChangePerformance();
        });
    }

    measureThemeChangePerformance() {
        // Use Performance API to measure theme change duration
        performance.mark('theme-change-start');
        
        requestAnimationFrame(() => {
            performance.mark('theme-change-end');
            performance.measure('theme-change', 'theme-change-start', 'theme-change-end');
            
            const measure = performance.getEntriesByName('theme-change')[0];
            console.log(`Theme change took ${measure.duration.toFixed(2)}ms`);
        });
    }
}

// Accessibility enhancements
class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        // Add skip link for keyboard navigation
        this.addSkipLink();
        
        // Ensure proper focus management
        this.setupFocusManagement();
        
        // Add reduced motion support
        this.handleReducedMotion();
    }

    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--accent-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add id to main element
        const main = document.querySelector('.main');
        if (main) {
            main.id = 'main';
            main.setAttribute('tabindex', '-1');
        }
    }

    setupFocusManagement() {
        // Ensure keyboard navigation works properly
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    handleReducedMotion() {
        // Respect user's reduced motion preferences
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            document.documentElement.style.setProperty('--animation-duration', '0s');
        }
        
        prefersReducedMotion.addEventListener('change', (e) => {
            if (e.matches) {
                document.documentElement.style.setProperty('--animation-duration', '0s');
            } else {
                document.documentElement.style.removeProperty('--animation-duration');
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌙 Dark mode portfolio initialized');
    
    // Initialize all components
    new ThemeManager();
    new SmoothScroll();
    new ScrollAnimations();
    new PerformanceMonitor();
    new AccessibilityEnhancer();
    
    // Add loading complete class
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Refresh theme in case system theme changed while page was hidden
        const themeManager = new ThemeManager();
    }
});

// Error handling for theme persistence
window.addEventListener('error', (e) => {
    console.warn('Theme error:', e.message);
    // Fallback to system theme if there's an error
    if (e.message.includes('localStorage')) {
        document.documentElement.setAttribute('data-theme', 
            window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        );
    }
});

// Export for testing or external use
window.ThemeManager = ThemeManager;