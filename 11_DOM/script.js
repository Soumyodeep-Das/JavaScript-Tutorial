// query.selector
/*
 selectors
  - tag name
  - id #
  - class .

*/

//! tag name

const body = document.querySelector("body") // selects the first element matched
// console.log(body) // returns HTMLBodyElement
// body.innerHTML = "<h1>Hacked</h1>"
// console.log(body.innerHTML) // returns String
const code = document.querySelector("code")
// code.innerHTML = "alert('Hello World')"

//! id 

const username = document.querySelector("#username")
// username.innerText = "SDas"

//! class

const block = document.querySelector(".block")
// console.log(block)

const div = document.querySelector("div")
// console.log(div.parentElement.children)

const p = document.querySelectorAll("p")
p.forEach((ele) => {
    console.log(ele.innerHTML)
})