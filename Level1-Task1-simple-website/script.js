// ==============================
// AUREX MEN'S GROOMING
// script.js
// ==============================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to AUREX Men's Grooming");
});

// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;

    if (name === "" || email === "") {

        alert("Please fill in all required fields.");
        return;

    }

    alert(`Thank you ${name}!\nYour message has been received successfully.`);

    form.reset();

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ==============================
// Button Animation
// ==============================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});
