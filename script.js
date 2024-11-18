// Select all sections to animate
const boxes = document.querySelectorAll('.box');
const rsvpButton = document.getElementById('rsvp-button');

// Scroll-triggered animation function
const handleScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;
        const animationType = box.getAttribute('data-animation');

        if (boxTop < triggerBottom) {
            setTimeout(() => {
                box.classList.add('show');
                box.classList.remove('hidden');
                box.style.visibility = 'visible';
            }, index * 150);
        } else {
            box.classList.remove('show');
            box.style.visibility = 'hidden';
        }
    });
};

// Smooth scrolling for RSVP button
rsvpButton.addEventListener('click', () => {
    const lastSection = document.getElementById('section4');
    lastSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    alert('Thank you for RSVPing! We’ll send you the event details soon.');
});

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial trigger for elements in view
handleScroll();