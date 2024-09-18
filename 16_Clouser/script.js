// Closure

// Example 1

function init() {
  const username = "SDas"; // username is a local variable created by init
  function displayUserName() {
    // displayUserName() is a inner function, //! a Closure
    console.log(username); // using variable declared in the parent function
  }
  displayUserName();
}

init();

// Example 2 : Practical Approach
const heading = document.getElementById("heading");
const btn = document.getElementById("btn");

function fontSize(size) {
  function changeFontSize() {
    heading.style.fontSize = `${size}px`;
  }
  return changeFontSize;
}

const size12 = fontSize(12);
const size22 = fontSize(22);
const size33 = fontSize(33);
const size44 = fontSize(44);
const size55 = fontSize(55);

btn.addEventListener("click", size55);

//Example 3 : Counter
function makeCounter() {
  let count = 1;
  function increment() {
    console.log(count++);
  }
  return increment;
}

const counterOne = makeCounter()
const counterTwo = makeCounter()

counterOne() // 1
counterOne() // 2
counterTwo() // 1
counterOne() // 3
counterTwo() // 2

