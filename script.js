function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a === 0 || b === 0) alert("Can't divide by 0! Try again.");
  else return a / b;
}

let firstNumber;
let secondNumber;
let operator;

function operation(inp) {
  if (inp.includes("+")) {
    console.log(`does this even work ${inp}`);
    return calculation(inp, "+");
  }
  if (inp.includes("-")) {
    return calculation(inp, "-");
  }
  if (inp.includes("x")) {
    return calculation(inp, "x");
  }
  if (inp.includes("/")) {
    return calculation(inp, "/");
  }
}

function calculation(inp, op) {
  let numbers = inp.split(op);
  firstNumber = Number(numbers[0]);
  secondNumber = Number(numbers[1]);
  console.log(`this is numbers ${numbers}`);
  console.log(op);
  console.log(firstNumber);
  console.log(secondNumber);
  if (op === "+") {
    return add(firstNumber, secondNumber);
  } else if (op === "-") {
    return sub(firstNumber, secondNumber);
  } else if (op === "x") {
    return multi(firstNumber, secondNumber);
  } else if (op === "/") {
    return divide(firstNumber, secondNumber);
  }
}

let displayArr = [];
let resultBuffer = [];
let currOp = "";
let currNum = [];
let currSecondNum = [];

const numDisplay = document.querySelector(".num-display");

const numOne = document.querySelector(".num-one");
const numTwo = document.querySelector(".num-two");
const numThree = document.querySelector(".num-three");
const numFour = document.querySelector(".num-four");
const numFive = document.querySelector(".num-five");
const numSix = document.querySelector(".num-six");
const numSeven = document.querySelector(".num-seven");
const numEight = document.querySelector(".num-eight");
const numNine = document.querySelector(".num-nine");
const numZero = document.querySelector(".num-zero");
const addBtn = document.querySelector(".add-btn");
const minusBtn = document.querySelector(".minus-btn");
const multiBtn = document.querySelector(".multi-btn");
const divideBtn = document.querySelector(".divide-btn");
const clearBtn = document.querySelector(".clear-btn");
const equalsBtn = document.querySelector(".equals-btn");

numOne.addEventListener("click", () => {
  displayArr.push("1");
  if (currOp === "") currNum.push("1");
  else if (currOp != "") currSecondNum.push("1");
  numDisplay.textContent = displayArr.join("");
});

numTwo.addEventListener("click", () => {
  displayArr.push("2");
  if (currOp === "") currNum.push("2");
  else if (currOp != "") currSecondNum.push("2");
  numDisplay.textContent = displayArr.join("");
});

numThree.addEventListener("click", () => {
  displayArr.push("3");
  if (currOp === "") currNum.push("3");
  else if (currOp != "") currSecondNum.push("3");
  numDisplay.textContent = displayArr.join("");
});

numFour.addEventListener("click", () => {
  displayArr.push("4");
  if (currOp === "") currNum.push("4");
  else if (currOp != "") currSecondNum.push("4");
  numDisplay.textContent = displayArr.join("");
});

numFive.addEventListener("click", () => {
  displayArr.push("5");
  if (currOp === "") currNum.push("5");
  else if (currOp != "") currSecondNum.push("5");
  numDisplay.textContent = displayArr.join("");
});

numSix.addEventListener("click", () => {
  displayArr.push("6");
  if (currOp === "") currNum.push("6");
  else if (currOp != "") currSecondNum.push("6");
  numDisplay.textContent = displayArr.join("");
});

numSeven.addEventListener("click", () => {
  displayArr.push("7");
  if (currOp === "") currNum.push("7");
  else if (currOp != "") currSecondNum.push("7");
  numDisplay.textContent = displayArr.join("");
});

numEight.addEventListener("click", () => {
  displayArr.push("8");
  if (currOp === "") currNum.push("8");
  else if (currOp != "") currSecondNum.push("8");
  numDisplay.textContent = displayArr.join("");
});

numNine.addEventListener("click", () => {
  displayArr.push("9");
  if (currOp === "") currNum.push("9");
  else if (currOp != "") currSecondNum.push("9");
  numDisplay.textContent = displayArr.join("");
});

numZero.addEventListener("click", () => {
  displayArr.push("0");
  if (currOp === "") currNum.push("0");
  else if (currOp != "") currSecondNum.push("9");
  numDisplay.textContent = displayArr.join("");
});

addBtn.addEventListener("click", () => {
  let lastItem = displayArr[displayArr.length - 1];
  if (
    lastItem === "+" ||
    lastItem === "-" ||
    lastItem === "x" ||
    lastItem === "/"
  ) {
    console.error("error, can't have two signs next to each other");
  } else {
    if (currOp === "+" || currOp === "-" || currOp === "x" || currOp === "/") {
      resultBuffer.push(currNum.join(""));
      resultBuffer.push(currOp);
      resultBuffer.push(currSecondNum.join(""));
      currSecondNum = [];
      currNum = [];
      currNum.push(operation(resultBuffer.join("")));
      console.log(resultBuffer.join(""));
      console.log(currNum);
      resultBuffer = [];
      currOp = "+";
      displayArr.push("+");
      numDisplay.textContent = displayArr.join("");
    } else {
      currOp = "+";
      displayArr.push("+");
      numDisplay.textContent = displayArr.join("");
    }
  }
});

minusBtn.addEventListener("click", () => {
  let lastItem = displayArr[displayArr.length - 1];
  if (
    lastItem === "+" ||
    lastItem === "-" ||
    lastItem === "x" ||
    lastItem === "/"
  ) {
    console.error("error, can't have two signs next to each other");
  } else {
    if (currOp === "+" || currOp === "-" || currOp === "x" || currOp === "/") {
      resultBuffer.push(currNum.join(""));
      resultBuffer.push(currOp);
      resultBuffer.push(currSecondNum.join(""));
      currSecondNum = [];
      currNum = [];
      currNum.push(operation(resultBuffer.join("")));
      console.log(resultBuffer.join(""));
      console.log(currNum);
      resultBuffer = [];
      currOp = "-";
      displayArr.push("-");
      numDisplay.textContent = displayArr.join("");
    } else {
      currOp = "-";
      displayArr.push("-");
      numDisplay.textContent = displayArr.join("");
    }
  }
});

multiBtn.addEventListener("click", () => {
  let lastItem = displayArr[displayArr.length - 1];
  if (
    lastItem === "+" ||
    lastItem === "-" ||
    lastItem === "x" ||
    lastItem === "/"
  ) {
    console.error("error, can't have two signs next to each other");
  } else {
    if (currOp === "+" || currOp === "-" || currOp === "x" || currOp === "/") {
      resultBuffer.push(currNum.join(""));
      resultBuffer.push(currOp);
      resultBuffer.push(currSecondNum.join(""));
      currSecondNum = [];
      currNum = [];
      currNum.push(operation(resultBuffer.join("")));
      console.log(resultBuffer.join(""));
      console.log(currNum);
      resultBuffer = [];
      currOp = "x";
      displayArr.push("x");
      numDisplay.textContent = displayArr.join("");
    } else {
      currOp = "x";
      displayArr.push("x");
      numDisplay.textContent = displayArr.join("");
    }
  }
});

divideBtn.addEventListener("click", () => {
  let lastItem = displayArr[displayArr.length - 1];
  if (
    lastItem === "+" ||
    lastItem === "-" ||
    lastItem === "x" ||
    lastItem === "/"
  ) {
    console.error("error, can't have two signs next to each other");
  } else {
    if (currOp === "+" || currOp === "-" || currOp === "x" || currOp === "/") {
      resultBuffer.push(currNum.join(""));
      resultBuffer.push(currOp);
      resultBuffer.push(currSecondNum.join(""));
      currSecondNum = [];
      currNum = [];
      currNum.push(operation(resultBuffer.join("")));
      console.log(resultBuffer.join(""));
      console.log(currNum);
      resultBuffer = [];
      currOp = "/";
      displayArr.push("/");
      numDisplay.textContent = displayArr.join("");
    } else {
      currOp = "/";
      displayArr.push("/");
      numDisplay.textContent = displayArr.join("");
    }
  }
});

equalsBtn.addEventListener("click", () => {
  displayArr = [];
  resultBuffer.push(currNum.join(""));
  resultBuffer.push(currOp);
  resultBuffer.push(currSecondNum.join(""));
  currSecondNum = [];
  currNum = [];
  currNum.push(operation(resultBuffer.join("")));
  console.log(resultBuffer.join(""));
  console.log(currNum);
  numDisplay.textContent = currNum;
});

clearBtn.addEventListener("click", () => {
  displayArr = [];
  resultBuffer = [];
  currOp = "";
  currNum = [];
  currSecondNum = [];
  numDisplay.textContent = displayArr;
});
