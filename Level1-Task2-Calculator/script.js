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

loader.style.opacity="0";
loader.style.visibility="hidden";

setTimeout(()=>{

loader.style.display="none";

},800);

}

});


/*==========================
CUSTOM CURSOR
==========================*/

const dot=document.querySelector(".cursor-dot");
const outline=document.querySelector(".cursor-outline");

if(dot && outline){

window.addEventListener("mousemove",(e)=>{

dot.style.left=e.clientX+"px";
dot.style.top=e.clientY+"px";

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
PLANET COLOR
==========================*/

const planet=document.getElementById("planet");
const colorBtn=document.getElementById("colorBtn");

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

planet.style.filter=`${colors[currentColor]} drop-shadow(0 0 25px cyan)`;

});

}


/*==========================
GREETING
==========================*/

const greetBtn=document.getElementById("greetBtn");

if(greetBtn){

greetBtn.addEventListener("click",()=>{

const hour=new Date().getHours();

let msg="";

if(hour<12){

msg="🌞 Good Morning Commander!";

}else if(hour<17){

msg="🚀 Good Afternoon Space Explorer!";

}else if(hour<21){

msg="🌇 Good Evening Astronaut!";

}else{

msg="🌙 Good Night Galaxy Traveller!";

}

alert(msg);

});

}

console.log("✅ Part 1 Loaded");
/*=========================================
COSMOVERSE
SCRIPT.JS
PART 2
=========================================*/

/*==========================
SPACE CALCULATOR
==========================*/

const addBtn = document.getElementById("addBtn");

if (addBtn) {

addBtn.addEventListener("click", () => {

const num1 = parseFloat(document.getElementById("num1").value);

const num2 = parseFloat(document.getElementById("num2").value);

const result = document.getElementById("result");

if (isNaN(num1) || isNaN(num2)) {

result.innerHTML = "Invalid";
result.style.color = "#ff4d4d";

return;

}

result.innerHTML = num1 + num2;
result.style.color = "#00E5FF";

});

}


/*==========================
HEADER SCROLL EFFECT
==========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if (!header) return;

if (window.scrollY > 80) {

header.style.background = "rgba(2,8,23,.92)";
header.style.backdropFilter = "blur(20px)";
header.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

}

else {

header.style.background = "rgba(255,255,255,.08)";
header.style.boxShadow = "none";

}

});


/*==========================
BACK TO TOP
==========================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

topBtn.style.display = "flex";

}

else {

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

}


/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function (e) {

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
MISSION CARD HOVER
==========================*/

const cards = document.querySelectorAll(".mission-card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0) scale(1)";

});

});


/*==========================
SCROLL PROGRESS BAR
==========================*/

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.width = "0%";
progressBar.style.height = "4px";
progressBar.style.zIndex = "99999";
progressBar.style.background = "linear-gradient(90deg,#00E5FF,#7C5CFF)";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

const totalHeight =
document.documentElement.scrollHeight - window.innerHeight;

const progress =
(window.scrollY / totalHeight) * 100;

progressBar.style.width = progress + "%";

});

console.log("✅ Part 2 Loaded Successfully");
/*=========================================
COSMOVERSE
SCRIPT.JS
PART 3
=========================================*/

/*==========================
SCROLL REVEAL
==========================*/

const revealItems = document.querySelectorAll(
".mission-card, .stat-card, .about, .contact, .footer"
);

revealItems.forEach(item => {

item.style.opacity = "0";
item.style.transform = "translateY(60px)";
item.style.transition = "all .8s ease";

});

function revealElements(){

const trigger = window.innerHeight - 120;

revealItems.forEach(item=>{

if(item.getBoundingClientRect().top < trigger){

item.style.opacity="1";
item.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",revealElements);

revealElements();


/*==========================
CONTACT FORM
==========================*/

const contactForm=document.querySelector("form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🚀 Message Sent Successfully!");

contactForm.reset();

});

}


/*==========================
ROCKET CLICK ANIMATION
==========================*/

const rocketImg=document.querySelector(".rocket");

if(rocketImg){

rocketImg.addEventListener("click",()=>{

rocketImg.style.transition=".8s";

rocketImg.style.transform="translateY(-350px) rotate(-20deg)";

setTimeout(()=>{

rocketImg.style.transform="translateY(0) rotate(0deg)";

},1000);

});

}


/*==========================
EARTH PARALLAX
==========================*/

const earth=document.querySelector(".earth-small");

if(earth){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

earth.style.transform=`translate(${x}px,${y}px)`;

});

}


/*==========================
TWINKLING STARS
==========================*/

const starLayers=document.querySelectorAll(".stars,.stars2,.stars3");

setInterval(()=>{

starLayers.forEach(layer=>{

layer.style.opacity=Math.random()*0.4+0.2;

});

},1000);


/*==========================
WELCOME MESSAGE
==========================*/

console.log("🚀 CosmoVerse Loaded Successfully");
console.log("🌌 Premium Space Experience Activated");
console.log("Designed & Developed by Sravani Dosapalli");
