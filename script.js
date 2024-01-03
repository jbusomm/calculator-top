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

function operation() {
  let inp = prompt("Prease, calculation?");
  if (inp.includes("+")) {
    return calculation(inp, "+");
  }
  if (inp.includes("-")) {
    return calculation(inp, "-");
  }
  if (inp.includes("*")) {
    return calculation(inp, "*");
  }
  if (inp.includes("/")) {
    return calculation(inp, "/");
  }
}

function calculation(inp, op) {
  let numbers = inp.split(op);
  firstNumber = Number(numbers[0]);
  secondNumber = Number(numbers[1]);
  if (op === "+") {
    return add(firstNumber, secondNumber);
  } else if (op === "-") {
    return sub(firstNumber, secondNumber);
  } else if (op === "*") {
    return multi(firstNumber, secondNumber);
  } else if (op === "/") {
    return divide(firstNumber, secondNumber);
  }
}

let displayArr = [];

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
  numDisplay.textContent = displayArr.join("");
});

numTwo.addEventListener("click", () => {
  displayArr.push("2");
  numDisplay.textContent = displayArr.join("");
});

numThree.addEventListener("click", () => {
  displayArr.push("3");
  numDisplay.textContent = displayArr.join("");
});

numFour.addEventListener("click", () => {
  displayArr.push("4");
  numDisplay.textContent = displayArr.join("");
});

numFive.addEventListener("click", () => {
  displayArr.push("5");
  numDisplay.textContent = displayArr.join("");
});

numSix.addEventListener("click", () => {
  displayArr.push("6");
  numDisplay.textContent = displayArr.join("");
});

numSeven.addEventListener("click", () => {
  displayArr.push("7");
  numDisplay.textContent = displayArr.join("");
});

numEight.addEventListener("click", () => {
  displayArr.push("8");
  numDisplay.textContent = displayArr.join("");
});

numNine.addEventListener("click", () => {
  displayArr.push("9");
  numDisplay.textContent = displayArr.join("");
});

numZero.addEventListener("click", () => {
  displayArr.push("0");
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
    displayArr.push("+");
    numDisplay.textContent = displayArr.join("");
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
    displayArr.push("-");
    numDisplay.textContent = displayArr.join("");
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
    displayArr.push("x");
    numDisplay.textContent = displayArr.join("");
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
    displayArr.push("/");
    numDisplay.textContent = displayArr.join("");
  }
});

clearBtn.addEventListener("click", () => {
  displayArr = [];
  numDisplay.textContent = displayArr;
});
