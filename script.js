// JavaScript to hide/show the secondary navigation on scroll

// Get the secondary navigation element
const secondaryNav = document.getElementById('secondaryNav');

// Function to toggle the secondary navigation based on scroll position
function toggleSecondaryNav() {
    if (window.scrollY > 100) { // Adjust the scroll position where you want it to disappear
        secondaryNav.classList.add('hidden');
    } else {
        secondaryNav.classList.remove('hidden');
    }
}

// Add an event listener to scroll events
window.addEventListener('scroll', toggleSecondaryNav);

// Call the function on page load to check the initial scroll position
toggleSecondaryNav();
