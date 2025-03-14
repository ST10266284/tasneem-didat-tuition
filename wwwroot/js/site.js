// Add smooth scrolling to all links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Add animations to gallery images
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(image => {
        image.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.05)";
        });
        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });
    });

    // Form validation for the contact form
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !phone || !message) {
                e.preventDefault();
                alert("Please fill out all fields before submitting.");
            }
        });
    }
});
