
// Mobile Menu Toggle

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});




// Scroll Animation

const sections = document.querySelectorAll("section");


const revealSection = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(sectionTop < screenHeight - 100){

            section.classList.add("show");

        }

    });

};


window.addEventListener("scroll", revealSection);

revealSection();




// Navbar Background Change

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(250,246,239,0.95)";

    }
    else{

        header.style.background = "transparent";

    }

});




// Button Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});




// Contact Form Message

const form = document.querySelector("form");


form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you for contacting Aurevia! We will get back to you soon.");

    form.reset();

});
