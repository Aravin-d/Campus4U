document.addEventListener("DOMContentLoaded", function () {
    // Initialize variables
    var preloader = document.getElementById("preloader");
    var formPopup = document.getElementById("formPopup");

    // Function to simulate page loading with a timeout
    function simulatePageLoading() {
        // Simulate page loading with a timeout
        setTimeout(function () {
            // Hide the preloader
            preloader.style.display = "none";
            // Attach a click event listener to the document
            document.addEventListener("click", handleUserInteraction);
        }, 2000); // Adjust the timeout as needed
    }

    // Function to handle user interaction and show the form pop-up
    function handleUserInteraction() {
        // Remove the click event listener to prevent multiple form pop-ups
        document.removeEventListener("click", handleUserInteraction);
        // Show the form pop-up
        formPopup.style.display = "flex";
    }

    // Function to close the form pop-up
    window.closeFormPopup = function () {
        formPopup.style.display = "none";
    };

    // Initialize EmailJS with your public key
    emailjs.init("EfM3_OWz-6w8-fkJy");

    // Event listener for page load
    window.addEventListener("load", function () {
        // Hide the preloader after the page is fully loaded
        simulatePageLoading();
    });
});

// Function to send email using EmailJS
function sendEmail(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Use emailjs.sendForm to send the form data
    emailjs.sendForm('service_v17aqmd', 'template_rc3jimi', document.getElementById('myForm'))
        .then(function(response) {
            alert("Form submitted successfully");
            closeFormPopup();
        }, function(error) {
            console.log('Email failed to send:', error);
            alert("Error submitting the form");
        });
}

function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form data
    const formData = {
       footer_name: document.getElementById('footer_name').value,
        footer_phone: document.getElementById('footer_phone').value
    };
    console.log(formData);

    // EmailJS configuration
    emailjs.init("EfM3_OWz-6w8-fkJy");

    // Send the form data
    emailjs.send("service_v17aqmd", "template_bd9mx7k", formData)
        .then(function(response) {
            console.log(formData);
            console.log("Email sent successfully", response);
            alert("Your details submitted successfully");
            // You can redirect or show a success message here
            document.getElementById('footer_name').value = '';
            document.getElementById('footer_phone').value = '';
        }, function(error) {
            console.error("Email failed to send", error);
            alert("We couldn't submit your details");
            // Handle errors, show an error message, or redirect to an error page
        });
}