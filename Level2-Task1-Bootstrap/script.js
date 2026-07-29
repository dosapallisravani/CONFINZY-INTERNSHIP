/*=========================================
StudyNest
SCRIPT.JS
=========================================*/

/*==========================
OPEN BACKPACK
==========================*/

const openBtn = document.getElementById("openBagBtn");

const backpack = document.getElementById("backpackImage");

const items = document.querySelectorAll(".item-card");

if(openBtn && backpack){

items.forEach(item=>{

item.style.display="none";

});

openBtn.addEventListener("click",()=>{

backpack.src="images/backpack-open.png";

items.forEach((item,index)=>{

setTimeout(()=>{

item.style.display="block";

item.style.animation="fadeUp .8s ease";

},index*200);

});

openBtn.innerHTML="✅ Backpack Opened";

openBtn.disabled=true;

});

}

/*==========================
CONTACT FORM
==========================*/

const contactForm=document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🎉 Thank you!\nYour message has been sent successfully.");

contactForm.reset();

});

}

/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/*==========================
NAVBAR SHADOW
==========================*/

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.classList.add("shadow");

}

else{

navbar.classList.remove("shadow");

}

});

/*==========================
WELCOME MESSAGE
==========================*/

console.log("🎒 StudyNest Loaded Successfully");

console.log("Bootstrap Website Ready");

console.log("Developed by Sravani Dosapalli");
