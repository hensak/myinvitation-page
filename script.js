// Select all sections to animate
const boxes = document.querySelectorAll('.box');
const rsvpButton = document.getElementById('rsvp-button');

// Scroll-triggered animation function
const handleScroll = () => {
    const triggerBottom = window.innerHeight * 0.85; // Adjust to fine-tune trigger point

    boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;
        const animationType = box.getAttribute('data-animation');

        // Add staggered delay for each box to create a cascading effect
        if (boxTop < triggerBottom) {
            setTimeout(() => {
                box.classList.add('show');
                box.classList.remove('hidden');
                box.style.visibility = 'visible';
                box.classList.add(animationType); // Add animation class based on data attribute
            }, index * 150); // Delay each box by 150ms
        } else {
            // Fade out when scrolling back up
            box.classList.remove('show');
            box.style.visibility = 'hidden';
        }
    });
};

// Smooth scrolling for RSVP button
rsvpButton.addEventListener('click', () => {
    const lastSection = document.getElementById('section4');
    lastSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    alert('Thank you for your interest! Please fill in the RSVP form coming soon.');
});

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial trigger for elements in view
handleScroll();