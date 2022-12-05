import "./style.scss";

const operations = document.querySelector(".operations");
const displayBottom = document.querySelector(".display-bottom");
const displayTop = document.querySelector(".display-top");
let operator = "";
let value2 = "";
let value1 = "";
let isPressed;
let counter = false;

// main function
function calculator() {
  displayNumbers();
  displayOperations();
  displayResult();
  clearBtn();
  backspaceBtn();
  decimalSeparator();
}
calculator();

// display functions

function displayNumbers() {
  operations.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn--num")) {
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
      if (counter) {
        chainOperation();
        counter = false;
      }

      operator = e.target.value;
      value2 = getValue2();
      isPressed = false;
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
      if (!isPressed) {
        updateDisplay();
        displayInBottom(getResult(value2, operator, value1));
      }
      isPressed = true;
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

function chainOperation() {
  const temp = value1;
  value1 = getResult(value2, operator, temp);

  displayInTop(`${value1} ${operator}`);
  clearTop();
  clearBottom();
  displayInBottom(value1);
}

// buttons
function backspaceBtn() {
  const backspace = document.querySelector(".backspace-btn");
  backspace.addEventListener("click", () => {
    const value = getValue1();
    clearBottom();
    displayInBottom(value.slice(0, -1));
  });
}

function decimalSeparator() {
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
  isPressed = false;
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
