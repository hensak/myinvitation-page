// Select all elements with the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');

// Function to handle animations on scroll
function handleScrollAnimations() {
    hiddenElements.forEach(element => {
        const position = element.getBoundingClientRect();
        const isVisible = position.top < window.innerHeight - 50; // Add buffer
        if (isVisible) {
            element.classList.add('show'); // Trigger animation
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', handleScrollAnimations);

// Initial check for elements in view
handleScrollAnimations();