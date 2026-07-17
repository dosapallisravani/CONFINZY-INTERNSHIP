// Mobile Menu Toggle

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");


menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});





// Scroll Reveal Animation

const sections = document.querySelectorAll("section");


function reveal(){

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        const height = window.innerHeight;


        if(top < height - 120){

            section.classList.add("show");

        }

    });

}


window.addEventListener("scroll", reveal);

reveal();






// Navbar Effect on Scroll

const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.background =
        "rgba(250,248,242,0.95)";

    }

    else{

        header.style.background =
        "transparent";

    }


});







// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click",function(e){


        e.preventDefault();


        document.querySelector(
        this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });


    });


});






// Contact Form

const form = document.querySelector("form");


form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
    "Thank you for contacting Aurex! We will get back to you soon."
    );


    form.reset();


});
