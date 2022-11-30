import "./style.scss";

function sum(num1, num2) {
  console.log(num1 + num2);
}
function subtract(num1, num2) {
  console.log(num1 - num2);
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
