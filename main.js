import "./style.scss";

function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(8, 8);
function subtract(num1, num2) {
  console.log(num1 - num2);
}
subtract(8, 8);

function multiply(num1, num2) {
  console.log(num1 * num2);
}
multiply(8, 8);

function divide(num1, num2) {
  console.log(num1 / num2);
}
divide(8, 8);

function operate(num1, operator, num2) {
  return operator(num1, num2);
}
operate(5, multiply, 5);
