// ==============================
// ASTROCALC JAVASCRIPT
// ==============================


// Calculator Elements

const display = document.getElementById("display");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");



let currentInput = "";
let operator = "";
let firstNumber = "";




// Number Buttons

numbers.forEach(button => {

    button.addEventListener("click",()=>{

        currentInput += button.innerText;

        display.value = currentInput;

    });

});





// Operator Buttons

operators.forEach(button => {

    button.addEventListener("click",()=>{

        firstNumber = currentInput;

        operator = button.innerText;

        currentInput = "";

    });

});





// Equal Button

equalBtn.addEventListener("click",()=>{


    let secondNumber = currentInput;

    let result;


    switch(operator){


        case "+":
            result = Number(firstNumber)+Number(secondNumber);
            break;


        case "-":
            result = Number(firstNumber)-Number(secondNumber);
            break;


        case "*":
            result = Number(firstNumber)*Number(secondNumber);
            break;


        case "/":
            result = Number(firstNumber)/Number(secondNumber);
            break;


        default:
            result="Error";

    }


    display.value=result;

    currentInput=result;


});







// Clear Button

clearBtn.addEventListener("click",()=>{

    display.value="";

    currentInput="";

    firstNumber="";

    operator="";

});






// Delete Button

deleteBtn.addEventListener("click",()=>{


    currentInput=currentInput.slice(0,-1);

    display.value=currentInput;


});








// Planet Color Change Feature


const planet = document.querySelector(".earth");


let colors=[

"🌍",
"🔴",
"🟣",
"🟢",
"🪐"

];


let index=0;



function changePlanet(){


    index++;

    if(index>=colors.length){

        index=0;

    }


    planet.innerHTML=colors[index];


    planet.style.transform="scale(1.3)";


    setTimeout(()=>{

        planet.style.transform="scale(1)";

    },300);


}







// Launch Button Scroll


function scrollToCalculator(){


    document
    .getElementById("calculator")
    .scrollIntoView({

        behavior:"smooth"

    });


}







// Astronaut Greeting Animation


const astronautText=document.querySelector(".astronaut p");


let messages=[

"Ready to calculate your cosmic numbers? 🚀",

"Welcome Space Explorer 🌌",

"Your universe of calculations begins now ✨"

];


let msgIndex=0;



setInterval(()=>{


    astronautText.innerHTML=messages[msgIndex];


    msgIndex++;


    if(msgIndex>=messages.length){

        msgIndex=0;

    }


},3000);
