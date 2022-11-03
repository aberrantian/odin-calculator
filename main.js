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

let userInput = '';
let inputText = document.querySelector('.input-text');
let outputText = document.querySelector('.output-text');
/*
Create nodelist of number buttons
For each node
    Add event listener for click
    When click > copy node's text content into userInput
*/

const numberButtons = document.querySelectorAll('.number');
for (const button of numberButtons) {
    button.addEventListener('click', () => {
        userInput += button.innerText;
        inputText.innerText = userInput;
    });
};
