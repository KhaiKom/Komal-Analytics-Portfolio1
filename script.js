/**
 * script.js - Interactivity functions for the Komal Analytics Portfolio
 * 
 * This script includes functions for:
 * - Theme toggling (light/dark mode)
 * - Smooth scrolling
 * - Navigation menu toggle
 * - Chart/dashboard interactions
 * - Filter functionality
 * - Responsive behavior
 * 
 * All functions and event listeners are documented for clarity.
 */

// Theme toggling function
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Save theme preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Smooth scrolling function
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigation menu toggle
function toggleNavMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('open');
}

// Chart interactions
function chartInteraction() {
    // Placeholder for chart interaction logic
}

// Filter functionality
function applyFilter(filterCriteria) {
    // Placeholder for filter application logic
}

// Responsive behavior handling
function handleResponsiveBehavior() {
    // Placeholder for responsive adjustments
}

// Event listeners
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('scroll-button').addEventListener('click', function() {
    smoothScroll('#target-section');
});
document.getElementById('nav-toggle').addEventListener('click', toggleNavMenu);
window.addEventListener('resize', handleResponsiveBehavior);

// Load initial theme
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
})();
