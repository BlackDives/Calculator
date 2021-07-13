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
  let display = "";
  let topScreen = document.querySelector(".top-screen");
  let theScreen = document.querySelector(".bottom-screen");
  theScreen.textContent = display;

  let buttonList = document.querySelectorAll(".number");
  let operatorButtonsList = document.querySelectorAll(".operator");
  let clearButton = document.querySelector(".clear-button");
  let equalButton = document.querySelector(".equal");
  let decimal = document.querySelector(".decimal");

  let numButtons = Array.from(buttonList);
  let opButtons = Array.from(operatorButtonsList);

  clearButton.addEventListener("click", (e) => {
    theScreen.textContent = "";
    topScreen.textContent = "";
    aNum = 0;
    bNum = 0;
    op = "";
    sum = 0;
    console.log(e.target);
  });

  let aNum = 0;
  let bNum = 0;
  let op = "";
  let sum = 0;

  opButtons.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e.target);
      if (theScreen.textContent.length == 0) {
        return;
      }

      let firstNum = theScreen.textContent;
      aNum = parseInt(firstNum);
      op = e.target.textContent;

      topScreen.textContent = firstNum + " " + op;
      theScreen.textContent = "";
    });
  });

  numButtons.forEach((item) => {
    item.addEventListener("click", (e) => {
      display = display + e.target.textContent;
      theScreen.textContent = theScreen.textContent + display;
      display = "";
      console.log(e.target);
    });
  });

  equalButton.addEventListener("click", (e) => {
    if (theScreen.textContent.length == 0) return;
    topScreen.textContent = topScreen.textContent + " = ";
    let firstNum = theScreen.textContent;
    bNum = parseInt(firstNum);
    sum = operate(op, aNum, bNum);
    topScreen.textContent = aNum + " " + op + " " + bNum + " " + "= " + sum;
    theScreen.textContent = sum;
  });
}
