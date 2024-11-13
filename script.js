var on = false;
var topDisplay = "";
var bottomDisplay = "";
var equal = 0;

document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'Digit0':
            Zero();
            break;
        case 'Digit1':
            One();
            break;
        case 'Digit2':
            Two();
            break;
        case "Digit3":
            Three();
            break;
        case "Digit4":
            Four();
            break;
        case "Digit5":
            Five();
            break;
        case "Digit6":
            Six();
            break;
        case "Digit7":
            Seven();
            break;
        case "Digit8":
            Eight();
            break;
        case "Digit9":
            Nine();
            break;
        case "Escape":
            clearAll();
            break;
        case "Enter":
            Equal();
            break;
        case "Backspace":
            if (on) {
                clearBot();
            }
            break;
    }
})


function openCalc() {
    on = true;
    document.getElementById('calc').style = "visibility: visible"
}

function closeCalc() {
    on = false;
    topDisplay = "";
    bottomDisplay = "";
    document.getElementById('calc').style = "visibility: hidden"
}

function botDisplay(char) {
    document.getElementById('bot-display').textContent = char;
}
function toppDisplay(char) {
    document.getElementById('top-display').textContent = char;
}

function clearAll() {
    if (on) {
        bottomDisplay = "";
        topDisplay = "";
        botDisplay(bottomDisplay);
        toppDisplay(topDisplay);
    }
}

function clearBot() {
    bottomDisplay = "";
    botDisplay(bottomDisplay);
}

function Pow() {
    Operator("^");
}

function Divide() {
    Operator("÷")
}
function Multiply() {
    Operator("×")
}
function Plus() {
    Operator("+")
}
function Minus() {
    Operator("-")
}

function Equal() {
    if (on) {
        switch (true) {
            case topDisplay.includes("+"):
                equal = topDisplay + bottomDisplay;
                toppDisplay("");
                botDisplay(equal);
                console.log("+")
                break;
            case topDisplay.includes("-"):
                equal = topDisplay - bottomDisplay;
                toppDisplay("");
                botDisplay(equal);
                break;
            case topDisplay.includes("×"):
                equal = topDisplay * bottomDisplay;
                toppDisplay("");
                botDisplay(equal);
                break;
            case topDisplay.includes("÷"):
                equal = topDisplay / bottomDisplay;
                toppDisplay("");
                botDisplay(equal);
                break;
            case topDisplay.includes("^"):
                equal = Math.pow(topDisplay, bottomDisplay);
                toppDisplay("");
                botDisplay(equal);
                break;
            }
        }
        console.log("hehe:(");
}

function Dot() {
    if (on && !bottomDisplay.includes('.')) {
        bottomDisplay += ".";
        botDisplay(bottomDisplay);
    }
}

function Zero() {
    if (on) {
        bottomDisplay += "0"
        botDisplay(bottomDisplay);
    }
}
function One() {
    if (on) {
        bottomDisplay += "1"
        botDisplay(bottomDisplay);
    }
}
function Two() {
    if (on) {
        bottomDisplay += "2"
        botDisplay(bottomDisplay);
    }
}
function Three() {
    if (on) {
        bottomDisplay += "3"
        botDisplay(bottomDisplay);
    }
}
function Four() {
    if (on) {
        bottomDisplay += "4"
        botDisplay(bottomDisplay);
    }
}
function Five() {
    if (on) {
        bottomDisplay += "5"
        botDisplay(bottomDisplay);
    }
}
function Six() {
    if (on) {
        bottomDisplay += "6"
        botDisplay(bottomDisplay);
    }
}
function Seven() {
    if (on) {
        bottomDisplay += "7"
        botDisplay(bottomDisplay);
    }
}
function Eight() {
    if (on) {
        bottomDisplay += "8"
        botDisplay(bottomDisplay);
    }
}
function Nine() {
    if (on) {
        bottomDisplay += "9"
        botDisplay(bottomDisplay);
    }
}

function Operator(op) {
    if (on) {
        topDisplay = bottomDisplay + op;
        toppDisplay(topDisplay)
        bottomDisplay = "";
        botDisplay(bottomDisplay)
    }
}