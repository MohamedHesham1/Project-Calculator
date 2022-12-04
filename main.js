import "./style.scss";

const operations = document.querySelector(".operations");
const displayBottom = document.querySelector(".display-bottom");
const displayTop = document.querySelector(".display-top");
let operator = "";
let value2 = "";
let value1 = "";

// main function
function calculator() {
  displayNumbers();
  displayOperations();
  displayResult();
  clear();
}
calculator();

// display functions

function displayNumbers() {
  operations.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn--num")) {
      if (isEmpty() && e.target.value == ".") return;
      displayInBottom(e.target.innerText);
      value1 = getValue1();
    }
  });
}

function displayOperations() {
  operations.addEventListener("click", (e) => {
    const operatorBtn = e.target.classList.contains("btn--operator");
    if (operatorBtn && !isEmpty()) {
      operator = e.target.value;
      value2 = getValue2();

      displayInTop(`${value2} ${operator}\xa0`);
      clearBottom();
    }
  });
}

function displayResult() {
  operations.addEventListener("click", (e) => {
    const equalBtn = e.target.classList.contains("btn--equal");

    if (equalBtn && value2 && !isEmpty()) {
      updateDisplay();
      displayInBottom(getResult(value2, operator, value1));
    }
  });
}

function updateDisplay() {
  operations.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn--operator")) {
      clearTop();
      displayInTop(`${value2} ${operator}\xa0`);
    }
  });

  displayInTop(getValue1());
  clearBottom();
}

function displayInTop(value) {
  displayTop.innerText += value;
}

function displayInBottom(value) {
  displayBottom.innerText += value;
}

// storing values

function getValue1() {
  const value = displayBottom.innerText;
  return value;
}

function getValue2() {
  const value = getValue1();
  return value;
}

function getResult(a, operator, b) {
  if (b == 0) return "Can't divide by zero";
  if (operator == "/") return Number(a / b);
  if (operator == "*") return Number(a * b);
  if (operator == "+") return Number(+a + +b);
  if (operator == "-") return Number(a - b);
  if (operator == "%") return Number(a % b);
}

// boolean function

function isEmpty() {
  if (getValue1() == "" && getValue2() == "") {
    return true;
  } else {
    return false;
  }
}

// clear functions

function clear() {
  const clearBtn = document.querySelector(".btn--clear");
  clearBtn.addEventListener("click", () => {
    clearTop();
    clearBottom();
    value1 = "";
    value2 = "";
    operator = "";
  });
}

function clearTop() {
  displayTop.innerText = "";
}

function clearBottom() {
  displayBottom.innerText = "";
}
