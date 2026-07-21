/*=========================================
AUREX WEBSITE
script.js
PART 1
=========================================*/

/*==========================
HEADER STICKY
==========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});


/*==========================
MOBILE MENU
==========================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/*==========================
CLOSE MENU AFTER CLICK
==========================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==========================
ACTIVE NAVBAR
==========================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

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


/*==========================
SCROLL REVEAL
==========================*/

const revealItems = document.querySelectorAll(

".about, .products, .why-section, .stats, .reviews, .newsletter, .contact"

);

function revealAnimation() {

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealAnimation);

revealAnimation();


/*==========================
PRODUCT HOVER EFFECT
==========================*/

const products = document.querySelectorAll(".product-card");

products.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


/*==========================
FLOATING PRODUCTS
==========================*/

const floatingProducts = document.querySelectorAll(".product");

floatingProducts.forEach(product => {

    product.addEventListener("mouseenter", () => {

        product.style.transform = "translateY(-15px) rotate(-5deg)";

    });

    product.addEventListener("mouseleave", () => {

        product.style.transform = "translateY(0px) rotate(0deg)";

    });

});
/*=========================================
AUREX WEBSITE
script.js
PART 2
=========================================*/

/*==========================
STATISTICS COUNTER
==========================*/

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const trigger = stats.offsetTop - 350;

    if (window.scrollY > trigger && !counterStarted) {

        counterStarted = true;

        counters.forEach(counter => {

            let text = counter.innerText;

            let target = parseFloat(text.replace(/[^0-9.]/g, ""));

            let suffix = "";

            if (text.includes("+")) suffix = "+";
            if (text.includes("%")) suffix = "%";
            if (text.includes("★")) suffix = "★";

            let count = 0;

            const speed = target / 120;

            function updateCounter() {

                if (count < target) {

                    count += speed;

                    if (suffix === "★") {

                        counter.innerText = count.toFixed(1) + suffix;

                    } else {

                        counter.innerText = Math.ceil(count) + suffix;

                    }

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = text;

                }

            }

            updateCounter();

        });

    }

});


/*==========================
NEWSLETTER
==========================*/

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

newsletterForm.addEventListener("submit", function(e){

e.preventDefault();

const email = this.querySelector("input").value.trim();

if(email===""){

alert("Please enter your email.");

return;

}

alert("Thank you for subscribing to AUREX!");

this.reset();

});

}


/*==========================
CONTACT FORM
==========================*/

const contactForm = document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=this.querySelector("input[type='text']").value.trim();

const email=this.querySelector("input[type='email']").value.trim();

const message=this.querySelector("textarea").value.trim();

if(name===""||email===""||message===""){

alert("Please fill all fields.");

return;

}

alert("Your message has been sent successfully!");

this.reset();

});

}


/*==========================
BACK TO TOP
==========================*/

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*==========================
HEADER SHADOW
==========================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>20){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

}else{

header.style.boxShadow="none";

}

});


/*==========================
BUTTON RIPPLE EFFECT
==========================*/

const buttons=document.querySelectorAll(".btn-primary,.btn-secondary,.product-btn,.shop-btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-3px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});


/*==========================
IMAGE HOVER EFFECT
==========================*/

const heroModel=document.querySelector(".hero-model");

if(heroModel){

heroModel.addEventListener("mousemove",()=>{

heroModel.style.transform="scale(1.02)";

});

heroModel.addEventListener("mouseleave",()=>{

heroModel.style.transform="scale(1)";

});

}


/*==========================
PRELOADER (OPTIONAL)
==========================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/*=========================================
END OF SCRIPT.JS
=========================================*/
