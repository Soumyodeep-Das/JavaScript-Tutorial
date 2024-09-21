const result = document.getElementById("result");
const inputArray = [];
let value = "";

function performOperation(inputVarOne, inputVarTwo, inputSign) {
  inputVarOne = Number(inputVarOne);
  inputVarTwo = Number(inputVarTwo);

  console.log(`Performing operation: ${inputVarOne} ${inputSign} ${inputVarTwo}`);
  
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
    default:
      return inputVarOne;
  }
}

function handleClick(el) {
  const operatorSymbols = {
    add: "+",
    sub: "-",
    mul: "*",
    div: "/",
    per: "%"
  };

  console.log(`Button clicked: ${el.id}`);

  if (el.id === "equal") {
    if (value !== "") {
      inputArray.push(value);  // Push the last value before calculation
    }
    calculate();
    inputArray.length = 0;  // Reset array after calculation
    value = "";
  } else if (el.id === "AC") {
    result.innerText = "0.0";  // Reset result display
    inputArray.length = 0;
    value = "";
    console.log("Calculator reset");
  } else if (el.id in operatorSymbols) {
    if (value !== "") {
      inputArray.push(value);  // Push the current value to inputArray
      value = "";              // Reset value for new input
    }
    inputArray.push(el.id);    // Push operator to inputArray
    
    // Add spaces before and after the operator symbol
    result.innerText += ` ${operatorSymbols[el.id]} `;
    
    console.log(`Current input array: ${inputArray}`);
  } else {
    value += el.id;            // Append digit to value
    result.innerText === "0.0" ? result.innerText = el.id : result.innerText += el.id;  // Display digit
    console.log(`Current value: ${value}`);
  }
}


function calculate() {
  if (inputArray.length < 3) {
    console.log("Not enough input for calculation");
    return;
  }
  
  let resultValue = Number(inputArray[0]);  // Start with the first value
  
  console.log(`Initial value: ${resultValue}`);
  
  for (let i = 1; i < inputArray.length; i += 2) {
    const inputSign = inputArray[i];        // Operator
    const inputVarTwo = inputArray[i + 1];  // Next value
    
    console.log(`Calculating: ${resultValue} ${inputSign} ${inputVarTwo}`);
    
    if (!inputVarTwo) {
      console.log("No second operand found, skipping calculation.");
      continue;
    }
    
    resultValue = performOperation(resultValue, inputVarTwo, inputSign);
  }
  
  console.log("Final result: ", resultValue);
  result.innerText = resultValue;  // Display the final result
}
