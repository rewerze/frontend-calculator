var on = false;
var topDisplay = "";
var bottomDisplay = "";
var pow = "";

document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'Numpad0':
            Digit(0);
            break;
        case 'Numpad1':
            Digit(1);
            break;
        case 'Numpad2':
            Digit(2);
            break;
        case "Numpad3":
            Digit(3);
            break;
        case "Numpad4":
            Digit(4);
            break;
        case "Numpad5":
            Digit(5);
            break;
        case "Numpad6":
            Digit(6);
            break;
        case "Numpad7":
            Digit(7);
            break;
        case "Numpad8":
            Digit(8);
            break;
        case "Numpad9":
            Digit(9);
            break;
        case "Escape":
            clearAll();
            break;
        case "Enter":
            Equal();
            break;
        case "Backspace":
            clearBot();
            break;
        case "NumpadDivide":
            Operator('÷');
            break;
        case "NumpadMultiply":
            Operator('×');
            break;
        case "NumpadAdd":
            Operator('+');
            break;
        case "NumpadSubtract":
            Operator('-');
            break;
        case "NumpadDecimal":
                Dot();
                break;
    }
})


function openCalc() {
    on = true;
    document.getElementById('calc').style = "visibility: visible"
    bottomDisplay = "0";
    ChangeBotDisplay();
}

function closeCalc() {
    on = false;
    topDisplay = "";
    bottomDisplay = "";
    ChangeBotDisplay();
    ChangeTopDisplay();
    document.getElementById('calc').style = "visibility: hidden"
}

function ChangeBotDisplay() {
    document.getElementById('bot-display').textContent = bottomDisplay;
}
function ChangeTopDisplay(char) {
    document.getElementById('top-display').textContent = topDisplay;
}

function clearAll() {
    if (on) {
        bottomDisplay = "0";
        topDisplay = "";
        ChangeBotDisplay();
        ChangeTopDisplay();
    }
}

function clearBot() {
    bottomDisplay = "0";
    ChangeBotDisplay();
}

function Pow() {
    if (on) {
        bottomDisplay = Math.pow(Number(bottomDisplay), 2);
        bottomDisplay = bottomDisplay.toString();
        ChangeBotDisplay();
    }

}

function Equal() {
    if (on) {
        switch (true) {
            case topDisplay.includes("+"):
                topDisplay = topDisplay.replace("+", "");
                topDisplay = Number(topDisplay);
                bottomDisplay = Number(bottomDisplay);

                bottomDisplay = topDisplay + bottomDisplay;
                bottomDisplay = bottomDisplay.toString();
                topDisplay = "";

                ChangeTopDisplay();
                ChangeBotDisplay();
                break;
            case topDisplay.includes("-"):
                topDisplay = topDisplay.replace("-", "");
                topDisplay = Number(topDisplay);
                bottomDisplay = Number(bottomDisplay);

                bottomDisplay = topDisplay - bottomDisplay;
                bottomDisplay = bottomDisplay.toString();
                topDisplay = "";

                ChangeTopDisplay();
                ChangeBotDisplay();
                break;
            case topDisplay.includes("×"):
                topDisplay = topDisplay.replace("×", "");
                topDisplay = Number(topDisplay);
                bottomDisplay = Number(bottomDisplay);

                bottomDisplay = topDisplay * bottomDisplay;
                bottomDisplay = bottomDisplay.toString();
                topDisplay = "";

                ChangeTopDisplay();
                ChangeBotDisplay();
                break;
            case topDisplay.includes("÷"):
                topDisplay = topDisplay.replace("÷", "");
                topDisplay = Number(topDisplay);
                bottomDisplay = Number(bottomDisplay);

                bottomDisplay = topDisplay / bottomDisplay;
                bottomDisplay = bottomDisplay.toString();
                topDisplay = "";

                ChangeTopDisplay();
                ChangeBotDisplay();
                break;
            }
        }
}

function Dot() {
    if (on && !bottomDisplay.includes('.')) {
        bottomDisplay = bottomDisplay + ".";
        ChangeBotDisplay();
    }
}

function Digit(number) {
    if (on) {
        isZero();
        bottomDisplay += number.toString();
        ChangeBotDisplay();
    }
}

function PlusToMinus() {
    if(on) {
        if (!bottomDisplay.charAt(0).includes("-")) {
            bottomDisplay = "-" + bottomDisplay;
            ChangeBotDisplay();
            console.log("plusz->minusz")
        }
        else {
            bottomDisplay = bottomDisplay*-1;
            bottomDisplay = bottomDisplay.toString();
            ChangeBotDisplay();
            console.log("minusz->plusz");
        }
    }
}

function Operator(op) {
    if (on) {
        if (topDisplay == "") {
            topDisplay = bottomDisplay + op;
            ChangeTopDisplay();
            bottomDisplay = "";
            ChangeBotDisplay();
        }
        else {
            topDisplay = topDisplay.replace(topDisplay.charAt(topDisplay.length - 1), op);
            ChangeTopDisplay(topDisplay);
        }
    }
}
function isZero() {
    if (bottomDisplay.charAt(0) == "0" && bottomDisplay.charAt(1) != ".") {
        bottomDisplay = "";
        ChangeBotDisplay();
    }
}