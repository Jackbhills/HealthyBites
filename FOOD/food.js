document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset the form fields
});