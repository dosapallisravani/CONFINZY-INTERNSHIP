/*=========================================
COSMOVERSE
SCRIPT.JS
=========================================*/

/*==========================
LOADER
==========================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

loader.style.transition = "0.8s ease";
loader.style.opacity = "0";
loader.style.visibility = "hidden";

setTimeout(()=>{

loader.style.display = "none";

},800);

}

});


/*==========================
CUSTOM CURSOR
==========================*/

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

if(dot && outline){

window.addEventListener("mousemove",(e)=>{

dot.style.left = e.clientX + "px";
dot.style.top = e.clientY + "px";

outline.animate({

left:e.clientX+"px",
top:e.clientY+"px"

},{
duration:200,
fill:"forwards"
});

});

}


/*==========================
PLANET COLOR CHANGER
==========================*/

const planet = document.getElementById("planet");
const colorBtn = document.getElementById("colorBtn");

const colors=[

"hue-rotate(0deg)",

"hue-rotate(60deg)",

"hue-rotate(120deg)",

"hue-rotate(180deg)",

"hue-rotate(240deg)",

"hue-rotate(300deg)"

];

let currentColor=0;

if(colorBtn && planet){

colorBtn.addEventListener("click",()=>{

currentColor++;

if(currentColor>=colors.length){

currentColor=0;

}

planet.style.filter=

`${colors[currentColor]} drop-shadow(0 0 25px cyan)`;

});

}


/*==========================
ASTRONAUT GREETING
==========================*/

const greetBtn=document.getElementById("greetBtn");

if(greetBtn){

greetBtn.addEventListener("click",()=>{

const hour=new Date().getHours();

let greeting="";

if(hour<12){

greeting="🌞 Good Morning Commander!";

}

else if(hour<17){

greeting="🚀 Good Afternoon Space Explorer!";

}

else if(hour<21){

greeting="🌇 Good Evening Astronaut!";

}

else{

greeting="🌙 Good Night Galaxy Traveller!";

}

alert(greeting);

});

}


/*==========================
FLOATING EFFECT
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

console.log("🚀 CosmoVerse Loaded Successfully");
/*=========================================
COSMOVERSE
SCRIPT.JS
=========================================*/

/*==========================
SPACE CALCULATOR
==========================*/

const addBtn = document.getElementById("addBtn");

if(addBtn){

addBtn.addEventListener("click",()=>{

const num1=parseFloat(document.getElementById("num1").value);

const num2=parseFloat(document.getElementById("num2").value);

const result=document.getElementById("result");

if(isNaN(num1)||isNaN(num2)){

result.innerHTML="Invalid";
result.style.color="#ff4d4d";
return;

}

result.innerHTML=num1+num2;
result.style.color="#00E5FF";

});

}


/*==========================
BACK TO TOP
==========================*/

const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*==========================
HEADER SCROLL
==========================*/

const header=document.querySelector(".header");

if(header){

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(2,8,23,.92)";
header.style.backdropFilter="blur(20px)";
header.style.boxShadow="0 8px 30px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(255,255,255,.08)";
header.style.boxShadow="none";

}

});

}


/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==========================
SCROLL PROGRESS BAR
==========================*/

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.left="0";

progress.style.top="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.zIndex="99999";

progress.style.background="linear-gradient(90deg,#00E5FF,#7C5CFF)";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progressWidth=(window.scrollY/totalHeight)*100;

progress.style.width=progressWidth+"%";

});


/*==========================
MISSION CARD HOVER
==========================*/

const cards=document.querySelectorAll(".mission-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

console.log("✅ Part 2 Loaded Successfully");
/*=========================================
COSMOVERSE
SCRIPT.JS
=========================================*/

/*==========================
SCROLL REVEAL
==========================*/

const revealItems = document.querySelectorAll(
".mission-card, .stat-card, .about, .contact, .footer"
);

function revealElements() {

const windowHeight = window.innerHeight;

revealItems.forEach((item) => {

const elementTop = item.getBoundingClientRect().top;

if (elementTop < windowHeight - 120) {

item.style.opacity = "1";
item.style.transform = "translateY(0)";

}

});

}

revealItems.forEach((item) => {

item.style.opacity = "0";
item.style.transform = "translateY(60px)";
item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealElements);

revealElements();


/*==========================
CONTACT FORM
==========================*/

const contactForm = document.querySelector("form");

if (contactForm) {

contactForm.addEventListener("submit", function (e) {

e.preventDefault();

alert("🚀 Message Sent Successfully!");

contactForm.reset();

});

}


/*==========================
ROCKET ANIMATION
==========================*/

const rocketImg = document.querySelector(".rocket");

if (rocketImg) {

rocketImg.addEventListener("click", () => {

rocketImg.style.transition = ".8s";

rocketImg.style.transform =
"translateY(-350px) rotate(-20deg)";

setTimeout(() => {

rocketImg.style.transform =
"translateY(0) rotate(0deg)";

}, 1000);

});

}


/*==========================
PLANET PARALLAX
==========================*/

const earth = document.querySelector(".earth-small");

if (earth) {

window.addEventListener("mousemove", (e) => {

const x =
(window.innerWidth / 2 - e.clientX) / 45;

const y =
(window.innerHeight / 2 - e.clientY) / 45;

earth.style.transform =
`translate(${x}px, ${y}px)`;

});

}


/*==========================
TWINKLING STARS
==========================*/

const stars = document.querySelectorAll(
".stars,.stars2,.stars3"
);

setInterval(() => {

stars.forEach((star) => {

star.style.opacity =
Math.random() * 0.5 + 0.2;

});

}, 1000);


/*==========================
COUNTER ANIMATION
==========================*/

const counters =
document.querySelectorAll(".stat-card h2");

counters.forEach((counter) => {

const target =
parseInt(counter.innerText);

if (isNaN(target)) return;

let count = 0;

function updateCounter() {

const increment =
Math.ceil(target / 60);

if (count < target) {

count += increment;

counter.innerText = count;

requestAnimationFrame(updateCounter);

} else {

counter.innerText = target;

}

}

updateCounter();

});


/*==========================
WELCOME MESSAGE
==========================*/

console.log("🚀 CosmoVerse Loaded Successfully");
console.log("🌌 Premium Space Experience Activated");
console.log("Designed by Sravani Dosapalli");
