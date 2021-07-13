function main() {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function divide(a, b) {
    return a / b;
  }
  function multiply(a, b) {
    return a * b;
  }

  function operate(operator, num1, num2) {
    if (operator === "+") return add(num1, num2);
    else if (operator === "-") return subtract(num1, num2);
    else if (operator === "/") return divide(num1, num2);
    else if (operator === "*") return multiply(num1, num2);
  }
  let theScreen = document.querySelector(".bottom-screen");
  let display = "";

  let buttons = document.querySelectorAll("button");
  buttons.forEach(
    addEventListener("click", (e) => {
      display = display + e.target.textContent;
    })
  );

  theScreen.textContent = display;
}
