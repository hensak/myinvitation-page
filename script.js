// Select form and elements
const form = document.getElementById('rsvp-form');
const confirmationMessage = document.getElementById('confirmation-message');
const submitButton = document.getElementById('submit-button');

// Function to validate the form before submission
function validateForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;

    // Basic validation
    if (name === "" || email === "" || attendance === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    // If validation passes, simulate form submission
    setTimeout(function() {
        form.style.display = "none";  // Hide the form
        confirmationMessage.style.display = "block";  // Show the confirmation message
    }, 500);

    // Prevent form from actually submitting to server
    return false;
}