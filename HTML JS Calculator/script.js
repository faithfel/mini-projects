function calc () {
const num1 = document.querySelector('.first');
const num2 = document.querySelector('.second');

const op = document.querySelector('.op');

const container = document.querySelector('h3');

let a = parseInt(num1.value);
let b = parseInt(num2.value);
let operator = op.value;

if (operator === "+") {
   let answer = a + b;
   container.textContent = answer;
}
else if (operator === "-") {
   let answer = a - b;
   container.textContent = answer;
}
else if (operator === "*") {
   let answer = a * b;
   container.textContent = answer;
}
else if (operator === "/") {
   let answer = a / b;
   container.textContent = answer;
}
else if (operator === "%") {
   let answer = a % b;
   container.textContent = answer;
}

}

