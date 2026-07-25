/*====================================
COSMOVERSE
SCRIPT.JS
PART 1
====================================*/

/*==========================
LOADER
==========================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";
loader.style.visibility = "hidden";

},1800);

});


/*==========================
CUSTOM CURSOR
==========================*/

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove",(e)=>{

dot.style.left = e.clientX + "px";
dot.style.top = e.clientY + "px";

outline.animate({

left:e.clientX+"px",
top:e.clientY+"px"

},{
duration:300,
fill:"forwards"
});

});


/*==========================
PLANET COLOR CHANGER
==========================*/

const planet = document.getElementById("planet");
const colorBtn = document.getElementById("colorBtn");

const colors = [

"hue-rotate(0deg)",

"hue-rotate(70deg)",

"hue-rotate(140deg)",

"hue-rotate(210deg)",

"hue-rotate(280deg)",

"hue-rotate(340deg)"

];

let currentColor = 0;

colorBtn.addEventListener("click",()=>{

currentColor++;

if(currentColor>=colors.length){

currentColor=0;

}

planet.style.filter=

colors[currentColor]+" drop-shadow(0 0 30px cyan)";

});


/*==========================
GREETING
==========================*/

const greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click",()=>{

const hour=new Date().getHours();

let message="";

if(hour<12){

message="🌞 Good Morning Commander!";

}

else if(hour<17){

message="🚀 Good Afternoon Space Explorer!";

}

else if(hour<21){

message="🌇 Good Evening Astronaut!";

}

else{

message="🌙 Good Night Galaxy Traveller!";

}

alert(message);

});


/*==========================
IMAGE FLOAT EFFECT
==========================*/

const astronaut=document.querySelector(".astronaut");

const rocket=document.querySelector(".rocket");

setInterval(()=>{

if(astronaut){

astronaut.classList.toggle("active");

}

},3000);

setInterval(()=>{

if(rocket){

rocket.classList.toggle("active");

}

},2500);


/*==========================
CONSOLE
==========================*/

console.log("🚀 Welcome to CosmoVerse");
console.log("Designed by Sravani Dosapalli");
/*=========================================
COSMOVERSE
SCRIPT.JS
PART 2
=========================================*/

/*==========================
SPACE CALCULATOR
==========================*/

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {

const num1 = parseFloat(document.getElementById("num1").value);

const num2 = parseFloat(document.getElementById("num2").value);

const result = document.getElementById("result");

if (isNaN(num1) || isNaN(num2)) {

result.innerHTML = "⚠ Invalid";

result.style.color = "#ff4d4d";

return;

}

result.innerHTML = num1 + num2;

result.style.color = "#00E5FF";

});


/*==========================
BACK TO TOP BUTTON
==========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

topBtn.style.display = "flex";

} else {

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});


/*==========================
HEADER SCROLL EFFECT
==========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if (window.scrollY > 80) {

header.style.background = "rgba(2,8,23,.95)";

header.style.backdropFilter = "blur(25px)";

header.style.boxShadow =

"0 10px 35px rgba(0,0,0,.35)";

}

else{

header.style.background =

"rgba(255,255,255,.08)";

header.style.boxShadow = "none";

}

});


/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target =

document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==========================
MISSION CARD HOVER
==========================*/

const cards = document.querySelectorAll(".mission-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =

"translateY(-18px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =

"translateY(0) scale(1)";

});

});


/*==========================
SCROLL PROGRESS BAR
==========================*/

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";

progressBar.style.top = "0";

progressBar.style.left = "0";

progressBar.style.height = "4px";

progressBar.style.background =

"linear-gradient(90deg,#00E5FF,#7C5CFF)";

progressBar.style.width = "0%";

progressBar.style.zIndex = "99999";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

const totalHeight =

document.documentElement.scrollHeight -
window.innerHeight;

const progress =

(window.scrollY / totalHeight) * 100;

progressBar.style.width = progress + "%";

});
/*=========================================
COSMOVERSE
SCRIPT.JS
PART 3
=========================================*/

/*==========================
SCROLL REVEAL ANIMATION
==========================*/

const revealElements = document.querySelectorAll(
".mission-card, .stat-card, .about, .contact, .footer"
);

function reveal(){

const windowHeight = window.innerHeight;

revealElements.forEach((element)=>{

const revealTop = element.getBoundingClientRect().top;

if(revealTop < windowHeight - 120){

element.style.opacity="1";
element.style.transform="translateY(0)";

}

});

}

revealElements.forEach((element)=>{

element.style.opacity="0";
element.style.transform="translateY(60px)";
element.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


/*==========================
CONTACT FORM
==========================*/

const contactForm=document.querySelector("form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🚀 Message Sent Successfully!\n\nThank you for contacting CosmoVerse.");

contactForm.reset();

});

}


/*==========================
ROCKET CLICK EFFECT
==========================*/

const rocket=document.querySelector(".rocket");

if(rocket){

rocket.addEventListener("click",()=>{

rocket.style.transition=".8s";

rocket.style.transform="translateY(-400px) rotate(-20deg)";

setTimeout(()=>{

rocket.style.transform="translateY(0)";

},1000);

});

}


/*==========================
PLANET PARALLAX
==========================*/

const earth=document.querySelector(".earth-small");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/50;

const y=(window.innerHeight/2-e.clientY)/50;

if(earth){

earth.style.transform=`translate(${x}px,${y}px)`;

}

});


/*==========================
TWINKLING EFFECT
==========================*/

const stars=document.querySelectorAll(".stars,.stars2,.stars3");

setInterval(()=>{

stars.forEach((star)=>{

star.style.opacity=Math.random()*0.5+0.2;

});

},1000);


/*==========================
COUNTER ANIMATION
==========================*/

const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const updateCounter=()=>{

const increment=target/80;

if(count<target){

count+=increment;

counter.innerText=Math.ceil(count)+"+";

requestAnimationFrame(updateCounter);

}else{

counter.innerText=target+"+";

}

};

updateCounter();

});


/*==========================
WELCOME MESSAGE
==========================*/

setTimeout(()=>{

console.log("🌌 Welcome to CosmoVerse");

console.log("🚀 Premium Space Theme Loaded Successfully");

console.log("Designed & Developed by Sravani Dosapalli");

},1000);

