let expression = "";
let justEvaluated = false;

const expEl = document.getElementById("expression");
const resEl = document.getElementById("result");
const toast = document.getElementById("toast");
const historyList = document.getElementById("historyList");


/* =========================
   DISPLAY
========================= */

function render() {
    expEl.textContent = expression || "0";
}


/* =========================
   NOTIFICATION
========================= */

function notify(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}


/* =========================
   CALCULATOR ENGINE
========================= */

function safeEval(value) {

    value = value
        .replace(/π/g, "Math.PI")
        .replace(/√/g, "Math.sqrt")
        .replace(/%/g, "/100");

    if (!/^[0-9+\-*/().\sMathPIsqrt]+$/.test(value)) {
        throw new Error("Invalid expression");
    }

    return Function(
        '"use strict"; return (' + value + ')'
    )();
}


/* =========================
   HISTORY
========================= */

function addHistory(expressionText, result) {

    const item = document.createElement("div");

    item.className = "history-item";

    item.innerHTML = `
        ${expressionText}
        <b>${result}</b>
    `;

    historyList.prepend(item);

    while (historyList.children.length > 4) {
        historyList.lastElementChild.remove();
    }
}


/* =========================
   MAIN CALCULATION
========================= */

function calculate() {

    if (!expression) {
        return;
    }

    try {

        const oldExpression = expression;

        let value = safeEval(expression);

        if (!Number.isFinite(value)) {
            throw new Error("Invalid result");
        }

        value =
            Math.round(
                (value + Number.EPSILON) * 1e10
            ) / 1e10;

        resEl.textContent = value;

        addHistory(
            oldExpression,
            value
        );

        expression = String(value);

        justEvaluated = true;

        notify("Calculation complete ✓");

    } catch {

        resEl.textContent = "Error";

        notify("Check your expression");
    }
}


/* =========================
   SCIENTIFIC FUNCTIONS
========================= */

function scientific(action) {

    try {

        let x = Number(
            expression ||
            resEl.textContent ||
            0
        );

        let value;


        /* PI */

        if (action === "pi") {

            if (justEvaluated) {
                expression = "";
                justEvaluated = false;
            }

            expression += "π";

            render();

            return;
        }


        /* SQUARE ROOT */

        if (action === "sqrt") {
            value = Math.sqrt(x);
        }


        /* SQUARE */

        if (action === "square") {
            value = x * x;
        }


        /* SIN - degrees */

        if (action === "sin") {
            value =
                Math.sin(
                    x * Math.PI / 180
                );
        }


        /* COS - degrees */

        if (action === "cos") {
            value =
                Math.cos(
                    x * Math.PI / 180
                );
        }


        /* TAN - degrees */

        if (action === "tan") {
            value =
                Math.tan(
                    x * Math.PI / 180
                );
        }


        /* LOG */

        if (action === "log") {
            value = Math.log10(x);
        }


        /* NATURAL LOG */

        if (action === "ln") {
            value = Math.log(x);
        }


        if (!Number.isFinite(value)) {
            throw new Error("Invalid operation");
        }


        value =
            Math.round(
                (value + Number.EPSILON) * 1e10
            ) / 1e10;


        const oldExpression =
            expression || String(x);


        resEl.textContent = value;

        expression = String(value);

        justEvaluated = true;


        addHistory(
            oldExpression +
            " → " +
            action,
            value
        );


        notify(
            action.toUpperCase() +
            " applied"
        );

    } catch {

        resEl.textContent = "Error";

        notify(
            "Invalid scientific operation"
        );
    }
}


/* =========================
   CALCULATOR BUTTONS
========================= */

document
    .querySelectorAll(".key")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                /* Button color-change requirement */

                button.classList.add("flash");

                setTimeout(() => {
                    button.classList.remove("flash");
                }, 120);


                const value =
                    button.dataset.value;

                const action =
                    button.dataset.action;


                /* CLEAR */

                if (action === "clear") {

                    expression = "";

                    resEl.textContent = "0";

                    justEvaluated = false;

                    render();

                    return;
                }


                /* DELETE */

                if (action === "delete") {

                    expression =
                        expression.slice(0, -1);

                    render();

                    return;
                }


                /* EQUALS */

                if (action === "equals") {

                    calculate();

                    return;
                }


                /* SCIENTIFIC FUNCTION */

                if (action) {

                    scientific(action);

                    return;
                }


                /* NEW CALCULATION AFTER RESULT */

                if (justEvaluated) {

                    expression = "";

                    justEvaluated = false;
                }


                expression += value;

                render();
            }
        );

    });


/* =========================
   KEYBOARD SUPPORT
========================= */

document.addEventListener(
    "keydown",
    event => {

        /* Numbers and operators */

        if (
            /[0-9.+\-*/()%]/.test(event.key)
        ) {

            if (justEvaluated) {

                expression = "";

                justEvaluated = false;
            }

            expression += event.key;

            render();
        }


        /* ENTER */

        else if (
            event.key === "Enter" ||
            event.key === "="
        ) {

            calculate();
        }


        /* BACKSPACE */

        else if (
            event.key === "Backspace"
        ) {

            expression =
                expression.slice(0, -1);

            render();
        }


        /* ESCAPE */

        else if (
            event.key === "Escape"
        ) {

            expression = "";

            resEl.textContent = "0";

            justEvaluated = false;

            render();
        }

    }
);


/* =========================
   OPEN CALCULATOR
========================= */

function scrollToCalc() {

    document
        .getElementById("calculator")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const links =
        document.querySelector(".links");

    if (links.style.display === "flex") {

        links.style.display = "none";

    } else {

        links.style.display = "flex";

        links.style.position = "absolute";
        links.style.top = "66px";
        links.style.left = "0";
        links.style.right = "0";

        links.style.padding = "20px";

        links.style.background =
            "#04111d";

        links.style.flexDirection =
            "column";

        links.style.alignItems =
            "center";

        links.style.borderBottom =
            "1px solid rgba(120,190,230,.15)";
    }
}


/* =========================
   LEVEL 1 TASK 2
   CURRENT TIME GREETING
========================= */

function timeGreeting() {

    const hour =
        new Date().getHours();

    let greeting;

    if (hour < 12) {

        greeting = "Good morning";

    } else if (hour < 18) {

        greeting = "Good afternoon";

    } else {

        greeting = "Good evening";
    }


    alert(
        greeting +
        "! Current time: " +
        new Date().toLocaleTimeString()
    );
}


/*
   Double-click the MathBlueprint
   logo to show current time.
*/

document
    .querySelector(".brand")
    .addEventListener(
        "dblclick",
        timeGreeting
    );


/* =========================
   INITIAL DISPLAY
========================= */

render();
