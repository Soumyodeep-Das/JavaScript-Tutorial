// Arrow Functions

// 1. Syntax

// function sayHello(){ Normal Functions
//     console.log('hello')
// }

const sayHello = () => { // Arrow Function
    console.log("hello")
}

const add = (a, b) => {
    return a+b
}

const sub = (a,b) => a+b; // One liner // it return (a+b)

// 2. 'arguments' 

// for unlimited arguments
function addNumberV1(){
    let result = 0;
    for(let i=0; i<arguments.length; i++){
        result += arguments[i]
    }
    return result
}

const addNumberV2 = (arguments) => { // Will throw an error cause 'arguments' keyword is not available for arrow functions
    // so to avoid this error, we have to use the spread operator (...nums)
    let result = 0;
    for(let i=0; i<arguments.length; i++){
        result += arguments[i]
    }
    return result
}

// 3. Hoisting

// For Normal Functions we can call the functions before they are declared and initialzed, cause JavaScript first loads the functions then executes the code
sayHey()

function sayHey (){
    console.log('Hey')
}

// But for the Arrow Functions, the functions can not be called before they are declared and initialised, it will throw an error

sayHi()

const sayHi = () => console.log('Hi')

// 4. This Keyword

const obj = {
    value: 20,
    myNormalFunc: function () {
        console.log("Value is : "+this) // here 'this' is referring the 'obj' object, scope of this function is in this 'obj' object
    },
    myArrorFunc: () => {
        console.log(this) // here as the scope of the Arror functions are global, that's why here 'this' is referring the whole window
    }
}