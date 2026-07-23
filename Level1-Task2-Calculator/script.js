// ==============================
// ASTROCALC JAVASCRIPT
// ==============================


// Calculator Elements

const display = document.getElementById("display");

const numbers = document.querySelectorAll(".number");

const operator = document.querySelector(".operator");

const equal = document.querySelector(".equal");

const clear = document.querySelector(".clear");

const del = document.querySelector(".delete");

const colorBtn = document.querySelector(".color");



let firstNumber = "";
let isAdding = false;



// Number Buttons

numbers.forEach(button => {

    button.addEventListener("click",()=>{

        display.value += button.innerText;

    });

});




// Addition Operator

operator.addEventListener("click",()=>{


    firstNumber = Number(display.value);

    display.value = "";

    isAdding = true;


});




// Equal Button

equal.addEventListener("click",()=>{


    if(isAdding){

        let secondNumber = Number(display.value);


        let result = firstNumber + secondNumber;


        display.value = result;


        isAdding = false;

    }


});





// Clear

clear.addEventListener("click",()=>{


    display.value="";

    firstNumber="";

    isAdding=false;


});





// Delete

del.addEventListener("click",()=>{


    display.value =
    display.value.slice(0,-1);


});







// 🎨 Button Color Changer


let colors = [

"#00f7ff",
"#ff0055",
"#8a2be2",
"#00ff88",
"#ff9900"

];


let colorIndex = 0;



colorBtn.addEventListener("click",()=>{


    colorIndex++;


    if(colorIndex >= colors.length){

        colorIndex = 0;

    }



    document.querySelectorAll(".buttons button")
    .forEach(btn=>{


        btn.style.background = colors[colorIndex];


        btn.style.color="black";


    });



});








// 👨‍🚀 Time Based Greeting Alert


let hour = new Date().getHours();


let message;



if(hour < 12){

    message="Good Morning Explorer 🌞🚀";

}

else if(hour < 17){

    message="Good Afternoon Astronaut ☀️🪐";

}

else if(hour < 21){

    message="Good Evening Space Traveler 🌆🚀";

}

else{

    message="Good Night Galaxy Explorer 🌙✨";

}



window.onload = ()=>{


    alert(message);


    document.getElementById("greeting")
    .innerHTML = message;


};








// 🚀 Launch Button Smooth Scroll


function scrollToCalculator(){


    document
    .getElementById("calculator")
    .scrollIntoView({

        behavior:"smooth"

    });


}








// ⬆️ Back To Top Button


const topBtn = document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }


});



topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});
