function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(n1, n2, op) {
    let result;

    if (op == '+') result = add(n1, n2);
    else if (op == '-') result = subtract(n1, n2);
    else if (op == '*') result = multiply(n1, n2);
    else result = divide(n1, n2);

    resultScreen.innerText = result;
}

let firstNum = '';
let secondNum = '';
let operator;
let isFirstNum = true

function takeInput(button) {
    let input = button.value;

    if (input == 'C') {
        inputScreen.innerText = '';
        resultScreen.innerText = '';
        return;
    } else if (input == '=') {
        if (firstNum == '' || secondNum == '') return;
        operate(Number(firstNum), Number(secondNum), operator);
        firstNum = '';
        secondNum = '';
        operator = '';
        isFirstNum = true;
        inputScreen.innerText = '';
        return;
    } else if (input == '+' || input == '-' || input == '*' || input == '/') {
        if (isFirstNum) {
            operator = input;
            isFirstNum = false;
        } else {
            operate(Number(firstNum), Number(secondNum), operator);
            firstNum = '';
            secondNum = '';
            operator = '';
            isFirstNum = true;
            inputScreen.innerText = '';
            return;
        }
    }
    else {
        if (isFirstNum) firstNum += input;
        else secondNum += input;
    }
    inputScreen.innerText += input;
}

const inputScreen = document.querySelector('.input');
const resultScreen = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => button.onclick = () => takeInput(button));