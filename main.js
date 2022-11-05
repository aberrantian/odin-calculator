function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b, c) {
    return a(b, c);
};

let userInput = [];
let inputText = document.querySelector('.input-text');
let outputText = document.querySelector('.output-text');

/*
if first item is empty and input is 0 or an operator
    do nothing
if last item is operator and input is operator
    update the operator
if last item is number and input is number
    concat input onto number
else
    push input into userInput
*/
function inputHandler(innerText) {
    userInput.push(innerText);
    console.log(userInput[userInput.length -1]);
    inputText.innerText = userInput.join('');
};

const inputButtons = document.querySelectorAll('.number, .operator');
for (const button of inputButtons) {
    button.addEventListener('click', () => {
        inputHandler(button.innerText);
    });
};

const clearDisplay = document.querySelector('.clear');
clearDisplay.addEventListener('click', () => {
    userInput = [];
    inputText.innerText = '';
    outputText.innerText = '';
});
