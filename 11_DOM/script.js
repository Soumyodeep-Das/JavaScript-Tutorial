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
    // console.log(ele.innerHTML)
})

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

const ele = document.getElementsByClassName("block")

// console.log(ele)

for(let i=0; i<ele.length; i++){
    if (ele.item(i).tagName.toLowerCase() == 'div'){
        ele.item(i).style.background = "lightblue"
    }
}