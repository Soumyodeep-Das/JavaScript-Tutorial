const code = document.getElementById("code");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");
const result = document.getElementById("result");

let colourCode = "";
let colourArray = Array(4);

const generateColourCode = () => {
  /**
   * Generates a random hexadecimal color code.
   * The number 16777215 (0xFFFFFF) is the highest value for a 24-bit color,
   * ensuring the generated color code is within the valid range for RGB colors.
   *
   * @returns {string} A random hexadecimal color code in the format '#RRGGBB'.
   */
  let generatedColourCode = Math.floor(Math.random() * 16777215).toString(16);
  return generatedColourCode;
};

const initializeColourBlocks = () => {
  for (let i = 0; i < colourArray.length; i++) {
    colourArray[i] = generateColourCode();
  }
  colourCode = colourArray[randomBtnColourAssign()];
  code.innerText = colourCode;
};

const randomBtnColourAssign = () => {
  let index = Math.floor(Math.random() * 10);
  index = index % 4;
  console.log(`random index: ${index}`);
  return index;
};

const autoReloadTheGame = () => {
  setInterval(() => {
    location.reload();
  }, 2000);
};
initializeColourBlocks();

btnOne.style.backgroundColor = `#${colourArray[0]}`;
btnTwo.style.backgroundColor = `#${colourArray[1]}`;
btnThree.style.backgroundColor = `#${colourArray[2]}`;
btnFour.style.backgroundColor = `#${colourArray[3]}`;

console.log(colourArray);
console.log(colourCode);
btnOne.addEventListener("click", () => {
  if (colourArray[0] === colourCode) {
    result.innerText = "You Guessed The Right Colour!!";
    autoReloadTheGame();
  } else {
    result.innerText = "Incorrect!! Try Again :(";
  }
});

btnTwo.addEventListener("click", () => {
  if (colourArray[1] === colourCode) {
    result.innerText = "You Guessed The Right Colour!!";
    autoReloadTheGame();
  } else {
    result.innerText = "Incorrect!! Try Again :(";
  }
});

btnThree.addEventListener("click", () => {
  if (colourArray[2] === colourCode) {
    result.innerText = "You Guessed The Right Colour!!";
    autoReloadTheGame();
  } else {
    result.innerText = "Incorrect!! Try Again :(";
  }
});

btnFour.addEventListener("click", () => {
  if (colourArray[3] === colourCode) {
    result.innerText = "You Guessed The Right Colour!!";
    autoReloadTheGame();
  } else {
    result.innerText = "Incorrect!! Try Again :(";
  }
});
