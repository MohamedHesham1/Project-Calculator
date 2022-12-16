import "./style.scss";

const operations = document.querySelector(".operations");
const displayBottom = document.querySelector(".display-bottom");
const displayTop = document.querySelector(".display-top");
let operator = "";
let value2 = "";
let value1 = "";
let equalClicked;
let counter = false;

// main function
function calculator() {
  displayNumbers();
  displayOperations();
  displayResult();
  clearBtn();
  removeNumber();
  handleDecimal();
}
calculator();

// display functions

function displayNumbers() {
  operations.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn--num")) {
      if (equalClicked) {
        clearAll();
      }
      displayInBottom(e.target.innerText);
      value1 = getCurrentValue();
    }
  });
}

function displayOperations() {
  operations.addEventListener("click", (e) => {
    const operatorBtn = e.target.classList.contains("btn--operator");
    if (operatorBtn && !isEmpty()) {
      if (counter) {
        chainOperation();
        counter = false;
      }

      operator = e.target.value;
      value2 = getCurrentValue();
      equalClicked = false;
      counter = true;
      displayInTop(`${value2} ${operator}\xa0`);
      clearBottom();
    }
  });
}

function displayResult() {
  operations.addEventListener("click", (e) => {
    const equalBtn = e.target.classList.contains("btn--equal");

    if (equalBtn && value2 && !isEmpty()) {
      if (!equalClicked) {
        updateDisplay();
        displayInBottom(getResult(value2, operator, value1));
      }
      equalClicked = true;
      counter = false;
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

  displayInTop(getCurrentValue());
  clearBottom();
}

function displayInTop(value) {
  displayTop.innerText += value;
}

function displayInBottom(value) {
  displayBottom.innerText += value;
}

// storing values

function getCurrentValue() {
  const value = displayBottom.innerText;
  return value;
}

function getResult(a, operator, b) {
  if (b === 0 && operator === "/") return "Can't divide by zero";
  if (operator === "/") return Number(a / b);
  if (operator === "*") return Number(a * b);
  if (operator === "+") return Number(+a + +b);
  if (operator === "-") return Number(a - b);
  if (operator === "%") return Number(a % b);
}

const isEmpty = () => getCurrentValue() === "" && getCurrentValue() === "";

function chainOperation() {
  const temp = value1;
  value1 = getResult(value2, operator, temp);

  displayInTop(`${value1} ${operator}`);
  clearTop();
  clearBottom();
  displayInBottom(value1);
}

// buttons
function removeNumber() {
  const backspace = document.querySelector(".backspace-btn");
  backspace.addEventListener("click", () => {
    const value = getCurrentValue();
    clearBottom();
    displayInBottom(value.slice(0, -1));
  });
}

function handleDecimal() {
  const dot = document.querySelector(".btn--decimal");
  dot.addEventListener("click", (e) => {
    if (isEmpty()) {
      displayInBottom("0.");
    }
    if (displayBottom.innerText.includes(".")) return;
    displayInBottom(e.target.value);
  });
}

// clear functions

function clearAll() {
  clearTop();
  clearBottom();
  value1 = "";
  value2 = "";
  operator = "";
  equalClicked = false;
  counter = false;
}

function clearBtn() {
  const clearBtn = document.querySelector(".btn--clear");
  clearBtn.addEventListener("click", () => {
    clearAll();
  });
}

function clearTop() {
  displayTop.innerText = "";
}

function clearBottom() {
  displayBottom.innerText = "";
}
