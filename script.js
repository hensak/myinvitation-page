// Select all sections to animate
const boxes = document.querySelectorAll('.box');

// Function to check visibility and add 'show' class
const handleScroll = () => {
    const triggerBottom = window.innerHeight * 0.8; // Trigger animation when 80% of the viewport is scrolled

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
            box.classList.remove('hidden');
        }
    });
};

// Event listener for scrolling
window.addEventListener('scroll', handleScroll);

// Initial trigger in case the user starts mid-page
handleScroll();