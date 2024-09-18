// Scenario before Composition

function add(a, b) {
  return a + b;
}

function square(val) {
  return val * val;
}

function multiply(args) {
  return args[0] * args[1];
}

function addTwoAndSquare(a, b) {
  return square(add(a, b));
}

console.log(addTwoAndSquare(2, 3));

//! Need of Composition
// Now, here you can see that we have 2 functions i.e. add and square. And we have wrapped them in a function to use both the function sequentially
// But suppose we have 1,000 function whom we have to sequentially call from one function, then this method is not optimal or say scalable
// Here, we do composition to tackle this problem

function composeTwoFunction(fn1, fn2) {
  // generic compose function
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

// same function in modern JavaScript

const composeMultipleFunction = (f1, fn2) => (a, b) => fn2(fn1(a, b));

let task = composeTwoFunction(add, square);
console.log(task(3, 4));

// compose unlimited functions

function compose(...fns) {
  return function (...values) {
    return fns.reduce((a, b) => b(a), values);
  };
}

// modern js

const composeAll =
  (...fns) =>
  (...val) =>
    fns.reduce((a, b) => b(a), val);

task = composeAll(multiply, square, (val) => val-2);
console.log(task(2, 9));
