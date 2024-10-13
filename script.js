function orderService(serviceName) {
    alert(`Thank you for choosing ${serviceName}! We will contact you shortly.`);
}

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);

    // Optionally, here you can add code to send the data to a server
});
