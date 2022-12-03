import "./style.scss";

let currentValue;
let oldValue;
let operator;
let isCalculated;
const result = document.querySelector(".result");
const expression = document.querySelector(".expression");
const operations = document.querySelector(".operations");

function operate(a, operator, b) {
  let result;
  clearResult();
  if (operator == "/") {
    result = a / b;
  }
  if (operator == "*") {
    result = a * b;
  }
  if (operator == "+") {
    result = a + b;
  }
  if (operator == "-") {
    result = a - b;
}
  if (operator == "%") {
    result = a % b;
  }
  console.log(result);
  return result;
}

function multiply(num1, num2) {
  console.log(num1 * num2);
}

function divide(num1, num2) {
  console.log(num1 / num2);
}

function modulus(num1, num2) {
  console.log(num1 % num2);
}

function operate(num1, operator, num2) {
  return operator(num1, num2);
}
operate(7, modulus, 5);
