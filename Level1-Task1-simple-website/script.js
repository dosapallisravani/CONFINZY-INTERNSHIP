/*=====================================
MOBILE MENU
=====================================*/

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

/*=====================================
CLOSE MENU
=====================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});

/*=====================================
HEADER SCROLL
=====================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(20,30,25,.92)";
        header.style.backdropFilter = "blur(20px)";

    } else {

        header.style.background = "transparent";

    }

});

/*=====================================
ACTIVE NAV LINK
=====================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=====================================
SCROLL REVEAL
=====================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".section,.product-card,.benefit-card,.review-card").forEach(el => {

    observer.observe(el);

});

/*=====================================
SMOOTH SCROLL
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*=====================================
CONTACT FORM
=====================================*/

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("✅ Thank you for contacting Aurex! We'll reach you soon.");

    form.reset();

});

/*=====================================
HERO FADE
=====================================*/

window.addEventListener("load", () => {

    document.querySelector(".hero-left").style.opacity = "1";
    document.querySelector(".hero-left").style.transform = "translateY(0)";

    document.querySelector(".hero-right").style.opacity = "1";
    document.querySelector(".hero-right").style.transform = "translateY(0)";

});
