import "./style.scss";

let currentValue;
let oldValue;
let operator;
let isCalculated;
const result = document.querySelector(".result");
const expression = document.querySelector(".expression");
const operations = document.querySelector(".operations");

function displayNumbers() {
  operations.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn--num")) {
      if (isCalculated) {
        clearAll();
      }
      result.innerText += e.target.innerText;
      currentValue = Number(result.innerText);
      console.log("currentValue " + currentValue);
    }
  });
}

// numbers
function displayExpression() {
  displayNumbers();

  operations.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn--operator")) {
      operator = e.target.value;
      oldValue = Number(currentValue);
      expression.innerText = `${oldValue} ${operator}\xa0`;
      clearResult();
      console.log("oldValue " + oldValue);
    }
  });
}
displayExpression();

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

function calculate() {
  operations.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn--equal")) {
      clearResult();
      result.innerText = operate(oldValue, operator, currentValue);
      expression.innerText += currentValue;
      isCalculated = true;
    }
  });
}
calculate();

function clearExpression() {
  expression.innerText = "";
}

function clearResult() {
  result.innerText = "";
}

function clearAll() {
  clearExpression();
  clearResult();
  currentValue = "";
  oldValue = "";
  operator = "";
  isCalculated = false;
}

// \xa0
