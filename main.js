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
    if (c == '+') {
        return add(a, b);
    } else if (c == '-') {
        return subtract(a, b);
    } else if (c == '*') {
        return multiply(a, b);
    } else if (c == '/') {
        return divide(a, b);
    };
};

let userInput = [];
let inputText = document.querySelector('.input-text');
let outputText = document.querySelector('.output-text');

function isOperator(input) {
    if (input === '+' ||
        input === '-' ||
        input === '*' ||
        input === '/') {
            return true;
        } else {
            return false;
        };
};

function isNumber(input) {
    if (isOperator(input)) {
        return false;
    } else {
        return true;
    };
};

function inputHandler(innerText) {
    let lastItem = `${userInput[userInput.length -1]}`;
    
    if (userInput.length == 0) {
        if (!(innerText == '0') && !(isOperator(innerText))) {
            userInput.push(innerText);
            inputText.innerText = userInput.join('');
        };
    } else {
        if (isNumber(lastItem) && isNumber(innerText)) {
            userInput[userInput.length -1] += innerText;
        } else if (isOperator(lastItem) && isOperator(innerText)) {
            userInput[userInput.length -1] = innerText;
        } else {
            userInput.push(innerText);
        };
        inputText.innerText = userInput.join('');
    };

    return;
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
    inputText.innerText = 'input text';
    outputText.innerText = 'output text';
});

function calc() {
    if (isOperator(userInput[userInput.length -1])) {
        userInput.pop();
    };

    let memory = Number(userInput[0]);
    
    for (let i = 0; i < userInput.length -1; i++) {
        if (!(isOperator(userInput[i]))) {
            continue;
        } else {
            memory = operate(memory, Number(userInput[i+1]), userInput[i]);
        };
    };

    outputText.innerText = memory;
};

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    calc();
});