// query.selector
/*
 selectors
  - tag name
  - id #
  - class .

*/

//! tag name

// const body = document.querySelector("body"); // selects the first element matched
// console.log(body) // returns HTMLBodyElement
// body.innerHTML = "<h1>Hacked</h1>"
// console.log(body.innerHTML) // returns String
// const code = document.querySelector("code");
// code.innerHTML = "alert('Hello World')"

//! id

// const username = document.querySelector("#username");
// username.innerText = "SDas"

//! class

// const block = document.querySelector(".block");
// console.log(block)

// const div = document.querySelector("div");
// console.log(div.parentElement.children)

// const p = document.querySelectorAll("p");
// p.forEach((ele) => {
//   // console.log(ele.innerHTML)
// });

// const ele = document.getElementById("username")
// console.log(ele.innerText = "SDas")
// ele.classList.remove("blue-color")
// ele.classList.add("red-color")
// ele.style.textDecoration = "underline"
// ele.style.color = "tomato"
// ele.parentElement.style.backgroundColor = "lightyellow"
// console.log(ele.id)
// ele.setAttribute("area", "123")
// console.log(ele.classList)

// ele.remove() // remove the whole element

// const ele = document.getElementsByClassName("block");

// console.log(ele)

// for(let i=0; i<ele.length; i++){
//     if (ele.item(i).tagName.toLowerCase() == 'div'){
//         ele.item(i).style.background = "lightblue"
//     }
// }

// function handleButtonClick() {
//   alert("Btn clicked");
// }

// const btn = document.getElementById("clickButton");
// btn.onclick = function () {
//     alert("Btn clicked from function")
// }

// btn.onclick = () => {
//     alert("Btn clicked from arrow function")
// }

// btn.addEventListener('click', handleButtonClick())

// btn.addEventListener('click', () => {
//     alert("Btn clicked from arrow function")
// })

// const userName = document.getElementById("username");

// btn.addEventListener("click", () => {
//   if (userName.style.color === "red") userName.style.color = "blue";
//   else userName.style.color = "red";
// });

// const allChildren = document.querySelector("body").children;
// for (let i = 0; i < allChildren.length; i++) {
//   allChildren.item(i).addEventListener("click", () => {
//     allChildren.item(i).remove();
//   });
// }

const container = document.getElementById("container");

const clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", () => {
  // container.innerHTML = "<h1>Container Appeared</h1>"; // this only creates the quoted line one time
  const el = document.createElement("h1"); // but by this method we can create same element again and again each time the button is clicked
  el.innerText = "Soumyodeep Das";
  container.appendChild(el);
});
