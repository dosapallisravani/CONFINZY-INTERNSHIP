//=====================================
// BUTTON COLOR CHANGER
//=====================================

const colorBtn = document.getElementById("colorBtn");

const colors = [

"#6C63FF",
"#00D4FF",
"#10B981",
"#F59E0B",
"#EF4444",
"#8B5CF6",
"#14B8A6",
"#E11D48"

];

let currentColor = 0;

colorBtn.addEventListener("click", () => {

currentColor++;

if(currentColor >= colors.length){

currentColor = 0;

}

colorBtn.style.background = colors[currentColor];

colorBtn.style.color = "#ffffff";

});

//=====================================
// GREETING ALERT
//=====================================

const greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", () => {

const hour = new Date().getHours();

let message = "";

if(hour >= 5 && hour < 12){

message = "🌞 Good Morning! Have a wonderful day.";

}

else if(hour >= 12 && hour < 17){

message = "🌤 Good Afternoon! Keep Learning.";

}

else if(hour >= 17 && hour < 21){

message = "🌇 Good Evening! Hope you're doing great.";

}

else{

message = "🌙 Good Night! Take some rest.";

}

alert(message);

});
//=====================================
// BASIC CALCULATOR
//=====================================

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {

const number1 = parseFloat(document.getElementById("num1").value);

const number2 = parseFloat(document.getElementById("num2").value);

const result = document.getElementById("result");

if(isNaN(number1) || isNaN(number2)){

result.innerHTML = "Enter Valid Numbers";

return;

}

result.innerHTML = number1 + number2;

});

//=====================================
// BACK TO TOP BUTTON
//=====================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

topBtn.style.display = "flex";

}

else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

//=====================================
// SMOOTH NAVIGATION
//=====================================

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});

console.log("JavaScript Interactive Playground Loaded Successfully 🚀");
