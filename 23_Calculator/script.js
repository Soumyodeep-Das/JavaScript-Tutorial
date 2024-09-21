const result = document.getElementById("result");
const inputArray = [];
let value = "";
function performOperation(inputVarOne, inputVarTwo, inputSign) {
  inputVarOne = Number(inputVarOne);
  inputVarTwo = Number(inputVarTwo);
  switch (inputSign) {
    case "add":
      return inputVarOne + inputVarTwo;
    case "sub":
      return inputVarOne - inputVarTwo;
    case "mul":
      return inputVarOne * inputVarTwo;
    case "div":
      return inputVarOne / inputVarTwo;
    case "per":
      return (inputVarOne / 100) * inputVarTwo;
  }
}

function handleClick(el) {
  if (el.id === "equal") {
    calculate();
    inputArray.length = 0;
    value = 0;
  } else if (el.id === "AC") {
    result.innerText = "";
    inputArray.length = 0;
    value = "";
  } else if (
    el.id === "add" ||
    el.id === "sub" ||
    el.id === "mul" ||
    el.id === "div" ||
    el.id === "per"
  ) {
    inputArray.push(el.id);
    value = "";
    switch (el.id) {
      case "add":
        result.innerText += " + ";
        break;
      case "sub":
        result.innerText += " - ";
        break;
      case "mul":
        result.innerText += " * ";
        break;
      case "div":
        result.innerText += " / ";
        break;
      case "per":
        result.innerText += " % ";
        break;
    }
  } else {
    value += el.id;
    inputArray.push(value);
    result.innerText += ` ${el.id}`;
  }
  console.log(inputArray);
}

function calculate() {
  let resultValue = 0;
  let inputVarOne = inputArray[0];
  for (let i = 1; i < inputArray.length; i += 2) {
    let inputSign = inputArray[i];
    let inputVarTwo = inputArray[i + 1];
    resultValue = performOperation(inputVarOne, inputVarTwo, inputSign);
    inputVarOne = resultValue;
  }
  console.log("result: ", resultValue);
  result.innerText = Number(resultValue);
}
