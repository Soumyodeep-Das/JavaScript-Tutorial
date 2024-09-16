//  Variables

// var is a keyword
// scope of var is global, available throughout code even if it is decleared and initialized in a scope (), {}
// Re-assignable

var age = 22;
console.log(age);

// DataType varName = value; Strongly Typed Lang (C, Java etc.)
// But JavaScript is Loosly Typed Lang, so we don't have to assign dataTypes explicitly
var num1 = 10;
var num2 = 20;

var sum = num1 + num2;
console.log(sum);

// Naming Conventions
// Correct ->
// firstName
// FirstName
// first_name
// firstname

// Incorrect
// 10firstname
// first name

// let is a keyword
// scope of let is local, it is bounded in the scope where it is decleared and initialized
// Re-assignable
let myAge = 22;
console.log(myAge);

// const is a keyword
// scope of const is local
// value of const variable once initialized can not be changed

const my_age = 20;

// Can't be done
// my_age = 45
// thorws error on console
// Uncaught TypeError: Assignment to constant variable.

console.log(my_age);
