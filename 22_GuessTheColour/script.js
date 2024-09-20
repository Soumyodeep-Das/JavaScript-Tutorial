const code = document.getElementById("code");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");
const result = document.getElementById("result");
const score = document.getElementById("score");

let colourCode = "";
let colourArray = Array(4);

let currentScore = 0;

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

  btnOne.style.backgroundColor = `#${colourArray[0]}`;
  btnTwo.style.backgroundColor = `#${colourArray[1]}`;
  btnThree.style.backgroundColor = `#${colourArray[2]}`;
  btnFour.style.backgroundColor = `#${colourArray[3]}`;
};

const randomBtnColourAssign = () => {
  let index = Math.floor(Math.random() * 10);
  index = index % 4;
  console.log(`random index: ${index}`);
  return index;
};

console.log(colourArray);
console.log(colourCode);

btnOne.addEventListener("click", () => {
  btnLogic(0);
});

btnTwo.addEventListener("click", () => {
  btnLogic(1);
});

btnThree.addEventListener("click", () => {
  btnLogic(2);
});

btnFour.addEventListener("click", () => {
  btnLogic(3);
});

function btnLogic(index) {
  if (colourArray[index] === colourCode) {
    result.innerText = "You Guessed The Right Colour!!";
    currentScore++;
  } else {
    result.innerText = "Incorrect!! Try Again :(";
    currentScore = 0;
  }
  localStorage.setItem("gameScore", currentScore);
  startGame();
}

function startGame() {
  score.innerText = Number(localStorage.getItem("gameScore"));
  initializeColourBlocks();
}

// Entry point of the game
startGame();
