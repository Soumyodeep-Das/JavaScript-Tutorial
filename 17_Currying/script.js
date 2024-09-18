// Normal function to add 3 numbers
/*
function add(a,b,c){
    return a+b+c 
}
console.log(add(1,2,3))
*/

// So, what is the requirement of Currying here.
// Suppose I want to perform the add operation only at that time when all 3 values are present or say loaded.
// Cause the values might come from APIs, DataBases, Local Storages etc. So, we can not get all the values at once or say in the same time.
// So, here the use of Currying in JavaScript comes into the picture.

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Same function in modern JavaScript
const add3Values = (a) => (b) => (c) => a + b + c;

// So, here as you can see, the addition operation will perform only when all the values i.e. a,b,c are present or there values are obtained.

const result = add(1)(2)(4);
console.log(result);

// Example : Practical Approach

function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(`Sending Email to ${to}\n\nSubject: ${subject}\n${body}`);
    };
  };
}

// Same function is modern JavaScript
const sendAutoEmailModern = (to) => (subject) => (body) =>
  console.log(`Sending Email to ${to}\n\nSubject: ${subject}\n${body}`);

const step1 = sendAutoEmail("Soumyodeep Das"); // to -> Soumyodeep Das
const step2 = step1("Learning JavaScript"); // subject -> Learing JavaScript
//! step3
step2("This is the body of the Email"); // body -> This is the body of the Email

/**
console.logged -> 


Sending Email to Soumyodeep Das

Subject: Learning JavaScript
This is the body of the Email
 */


//? Currying is like multilevel clouser functions