// contact_form.js

// Function to prompt users for contact information
function promptContactInformation() {
    var name = prompt("Please enter your name:");
    var email = prompt("Please enter your email:");

    // Display the gathered information
    alert("Thank you for providing your information!\n\nName: " + name + "\nEmail: " + email);
}