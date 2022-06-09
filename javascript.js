/*
let add = (x,y) => {
    return x+y
}
let myVariable = add(8,3)
console.log(myVariable)

let subtract = (x,y) => {
    return x-y
}
let myVariable2 = subtract(8,3)
console.log(myVariable2)


let myanswer = myVariable + myVariable2
console.log(myanswer)
*/

let plusButtonElement = document.getElementById("plus");
let minusButtonElement = document.getElementById("minus");
let multiplyButtonElement = document.getElementById("multiply");
let divideButtonElement = document.getElementById("divide");

let signElement = document.getElementById("sign");

let sign = "+";

plusButtonElement.addEventListener("click", () => {
  sign = "+";
  signElement.innerHTML = "+";
});
minusButtonElement.addEventListener("click", () => {
  sign = "-";
  signElement.innerHTML = "-";
});
multiplyButtonElement.addEventListener("click", () => {
  sign = "*";
  signElement.innerHTML = "*";
});
divideButtonElement.addEventListener("click", () => {
  sign = "/";
  signElement.innerHTML = "/";
});

let resultElement = document.getElementById("result");

let equalsButtonElement = document.getElementById("equals");

let input1Element = document.getElementById("i1");
let input2Element = document.getElementById("i2");

equalsButtonElement.addEventListener("click", () => {
  let input1Value = Number(input1Element.value);
  let input2Value = Number(input2Element.value);

  console.log(sign);

  let result;

  if (sign == "+") {
    result = input1Value + input2Value;
  } else if (sign == "-") {
    result = input1Value - input2Value;
  } else if (sign == "*") {
    result = input1Value * input2Value;
  } else if (sign == "/") {
    result = input1Value / input2Value;
  }
  console.log(result);

  resultElement.innerHTML = result;
});

document.addEventListener("mousedown", (e) => {
  console.log("Event!!", e);
});

document.addEventListener("mouseup", (e) => {
  console.log("mouseup!!", e);
});

let resetElement = document.getElementById("reset");

resetElement.addEventListener("click", () => {
  resultElement.innerHTML = 0;
  input1Element.value = 0;
  input2Element.value = 0;
});
