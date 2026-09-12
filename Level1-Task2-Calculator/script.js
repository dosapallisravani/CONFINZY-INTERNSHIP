let expression = "";
let justEvaluated = false;

const expEl = document.getElementById("expression");
const resEl = document.getElementById("result");
const toast = document.getElementById("toast");
const historyList = document.getElementById("historyList");


// =========================
// DISPLAY
// =========================

function render() {
    expEl.textContent = expression || "0";
}


// =========================
// TOAST MESSAGE
// =========================

function notify(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}


// =========================
// FORMAT RESULT
// =========================

function formatResult(value) {
    if (!Number.isFinite(value)) {
        throw new Error("Invalid result");
    }

    return Math.round(
        (value + Number.EPSILON) * 10000000000
    ) / 10000000000;
}


// =========================
// SAFE CALCULATION
// =========================

function safeEval(value) {
    let prepared = value
        .replace(/π/g, "Math.PI")
        .replace(/√/g, "Math.sqrt")
        .replace(/%/g, "/100");

    if (!/^[0-9+\-*/().\sMathPIsqrt]+$/.test(prepared)) {
        throw new Error("Invalid expression");
    }

    const result = Function(
        '"use strict"; return (' + prepared + ')'
    )();

    return formatResult(result);
}


// =========================
// HISTORY STORAGE
// =========================

function saveHistory() {
    const historyItems = [];

    document.querySelectorAll(".history-item").forEach(item => {
        historyItems.push(item.innerHTML);
    });

    localStorage.setItem(
        "mathBlueprintHistory",
        JSON.stringify(historyItems)
    );
}


function loadHistory() {
    const savedHistory = localStorage.getItem(
        "mathBlueprintHistory"
    );

    if (!savedHistory || !historyList) return;

    try {
        const items = JSON.parse(savedHistory);

        historyList.innerHTML = "";

        items.forEach(itemHTML => {
            const item = document.createElement("div");

            item.className = "history-item";
            item.innerHTML = itemHTML;

            historyList.appendChild(item);
        });

    } catch {
        console.log("History could not be loaded");
    }
}


function addHistory(expressionText, result) {
    if (!historyList) return;

    const item = document.createElement("div");

    item.className = "history-item";

    item.innerHTML = `
        <span>${expressionText}</span>
        <b>${result}</b>
    `;

    historyList.prepend(item);

    while (historyList.children.length > 4) {
        historyList.lastElementChild.remove();
    }

    saveHistory();
}


function clearHistory() {
    localStorage.removeItem("mathBlueprintHistory");

    if (historyList) {
        historyList.innerHTML = "";
    }

    notify("History cleared");
}


// =========================
// MAIN CALCULATION
// =========================

function calculate() {
    if (!expression.trim()) {
        notify("Enter a calculation first");
        return;
    }

    try {
        const oldExpression = expression;

        const value = safeEval(expression);

        resEl.textContent = value;
        expression = String(value);

        justEvaluated = true;

        addHistory(oldExpression, value);

        notify("Calculation complete ✓");

    } catch {
        resEl.textContent = "Error";
        notify("Check your expression");
    }
}


// =========================
// SCIENTIFIC FUNCTIONS
// =========================

function scientific(action) {
    try {
        const x = Number(
            expression || resEl.textContent || 0
        );

        if (!Number.isFinite(x)) {
            throw new Error("Invalid number");
        }

        let value;
        let label;

        switch (action) {

            case "sqrt":
                if (x < 0) {
                    throw new Error("Invalid square root");
                }

                value = Math.sqrt(x);
                label = `√${x}`;
                break;


            case "square":
                value = x * x;
                label = `${x}²`;
                break;


            case "sin":
                value = Math.sin(
                    x * Math.PI / 180
                );

                label = `sin(${x}°)`;
                break;


            case "cos":
                value = Math.cos(
                    x * Math.PI / 180
                );

                label = `cos(${x}°)`;
                break;


            case "tan":
                value = Math.tan(
                    x * Math.PI / 180
                );

                label = `tan(${x}°)`;
                break;


            case "log":
                if (x <= 0) {
                    throw new Error("Invalid logarithm");
                }

                value = Math.log10(x);
                label = `log(${x})`;
                break;


            case "ln":
                if (x <= 0) {
                    throw new Error("Invalid natural logarithm");
                }

                value = Math.log(x);
                label = `ln(${x})`;
                break;


            case "pi":

                if (justEvaluated) {
                    expression = "";
                    justEvaluated = false;
                }

                expression += "π";
                render();

                notify("π added");
                return;


            default:
                return;
        }

        value = formatResult(value);

        resEl.textContent = value;
        expression = String(value);

        justEvaluated = true;

        addHistory(label, value);

        notify(`${action.toUpperCase()} applied`);

    } catch {
        resEl.textContent = "Error";
        notify("Invalid scientific operation");
    }
}


// =========================
// CALCULATOR BUTTONS
// =========================

document.querySelectorAll(".key").forEach(button => {

    button.addEventListener("click", () => {

        // Button color-change requirement
        button.classList.add("flash");

        setTimeout(() => {
            button.classList.remove("flash");
        }, 140);

        const value = button.dataset.value;
        const action = button.dataset.action;


        // CLEAR
        if (action === "clear") {

            expression = "";
            resEl.textContent = "0";
            justEvaluated = false;

            render();
            notify("Calculator cleared");

            return;
        }


        // DELETE
        if (action === "delete") {

            expression = expression.slice(0, -1);

            render();

            return;
        }


        // EQUALS
        if (action === "equals") {

            calculate();

            return;
        }


        // SCIENTIFIC FUNCTION
        if (action) {

            scientific(action);

            return;
        }


        // New calculation after result
        if (justEvaluated) {

            expression = "";
            justEvaluated = false;
        }

        expression += value;

        render();
    });

});


// =========================
// KEYBOARD SUPPORT
// =========================

document.addEventListener("keydown", event => {

    const key = event.key;


    if (/^[0-9.+\-*/()%]$/.test(key)) {

        if (justEvaluated) {
            expression = "";
            justEvaluated = false;
        }

        expression += key;

        render();
    }


    else if (
        key === "Enter" ||
        key === "="
    ) {

        event.preventDefault();
        calculate();
    }


    else if (key === "Backspace") {

        expression = expression.slice(0, -1);

        render();
    }


    else if (key === "Escape") {

        expression = "";
        resEl.textContent = "0";
        justEvaluated = false;

        render();
        notify("Calculator cleared");
    }

});


// =========================
// OPEN CALCULATOR
// =========================

function scrollToCalc() {

    const calculator = document.getElementById("calculator");

    if (calculator) {
        calculator.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const links = document.querySelector(".links");

    if (!links) return;

    const isOpen = links.classList.toggle("mobile-open");

    if (isOpen) {

        links.style.display = "flex";
        links.style.position = "absolute";
        links.style.top = "66px";
        links.style.left = "0";
        links.style.right = "0";
        links.style.padding = "20px";
        links.style.background = "#04111d";
        links.style.flexDirection = "column";
        links.style.alignItems = "center";
        links.style.borderBottom =
            "1px solid rgba(120,190,230,.15)";

    } else {

        links.style.display = "";

    }
}


// =========================
// CURRENT TIME GREETING
// =========================

function timeGreeting() {

    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    alert(
        `${greeting}! Current time: ${
            new Date().toLocaleTimeString()
        }`
    );
}


// =========================
// DOUBLE CLICK LOGO
// =========================

const brand = document.querySelector(".brand");

if (brand) {
    brand.addEventListener("dblclick", timeGreeting);
}


// =========================
// INITIALIZE
// =========================

loadHistory();
render();
