import "./style.scss";

const operations = document.querySelector(".operations");
const displayBottom = document.querySelector(".display-bottom");
const displayTop = document.querySelector(".display-top");
let operator = "";
let value2 = "";
let value1 = "";
let isPressed;

// main function
function calculator() {
  displayNumbers();
  displayOperations();
  displayResult();
  checkCondition();
  clearBtn();
}
calculator();

// display functions

function displayNumbers() {
  operations.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn--num")) {
      if (isEmpty() && e.target.value == ".") return;
      if (isPressed) {
        clearAll();
      }
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
      isPressed = false;

      displayInTop(`${value2} ${operator}\xa0`);
      clearBottom();
    }
  });
}

function displayResult() {
  operations.addEventListener("click", (e) => {
    const equalBtn = e.target.classList.contains("btn--equal");

    if (equalBtn && value2 && !isEmpty()) {
      if (!isPressed) {
      updateDisplay();
      displayInBottom(getResult(value2, operator, value1));
      }
      isPressed = true;
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
function checkCondition() {
  operations.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn--num")) {
    }
  });
}

// clear functions

function clearAll() {
  clearTop();
  clearBottom();
  value1 = "";
  value2 = "";
  operator = "";
  isPressed = false;
}

function clearBtn() {
  const clearBtn = document.querySelector(".btn--clear");
  clearBtn.addEventListener("click", () => {
    clearAll();
  });
}

function backspaceBtn() {
  const backspace = document.querySelector(".backspace-btn");
  backspace.addEventListener("click", () => {
    const value = getValue1();
    clearBottom();
    displayInBottom(value.slice(0, -1));
    console.log(typeof value);
  });
}
function clearTop() {
  displayTop.innerText = "";
}

function clearBottom() {
  displayBottom.innerText = "";
}
