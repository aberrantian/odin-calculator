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

function inputHandler(input) {
    let lastItem = `${userInput[userInput.length -1]}`;
    
    if (userInput.length == 0) {
        if (!(input == '0') && !(isOperator(input))) {
            userInput.push(input);
            inputText.innerText = userInput.join('');
        };
    } else {
        if (isNumber(lastItem) && isNumber(input)) {
            userInput[userInput.length -1] += input;
        } else if (isOperator(lastItem) && isOperator(input)) {
            userInput[userInput.length -1] = input;
        } else {
            userInput.push(input);
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

function updateDisplay() {
    if (userInput.length == 0) {
        inputText.innerText = 'input text';
        outputText.innerText = 'output text';
    } else {
        inputText.innerText = userInput.join('');
    };
};

const delChar = document.querySelector('.delete');
delChar.addEventListener('click', () => {
    if (userInput.length == 0) {
        return;
    } else if (isOperator(userInput[userInput.length -1])) {
        userInput.pop();
        inputText.innerText = userInput.join('');
    } else {
        if (userInput[userInput.length -1].length < 2) {
            userInput.pop();
            inputText.innerText = userInput.join('');
        } else {
            userInput[userInput.length -1] = userInput[userInput.length -1].slice(0, -1);
            inputText.innerText = userInput.join('');
        };
    };
});

function hasDecimal(string) {
    for (let i = 0; i < string.length -1; i++) {
        if (string[i] == '.') {
            return false;
        } else {
            continue;
        };
    };

    return true;
};

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
    if (isNumber(userInput[userInput.length-1]) &&
    userInput[userInput.length-1].at(-1) != '.' &&
    hasDecimal(userInput[userInput.length -1])) {
            userInput[userInput.length-1] += '.';
            inputText.innerText = userInput.join('');
    };
});

function calc() {
    if (userInput.length == 0) {
        return;
    };

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

    if (memory == 'Infinity') {
        memory = 'Error: Can\'t divide by 0';
    };

    outputText.innerText = memory;
};

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    calc();
});