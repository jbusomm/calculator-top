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

const numDisplay = document.querySelector(".num-display");

const numOne = document.querySelector;
