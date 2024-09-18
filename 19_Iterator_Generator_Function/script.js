// Iterator

/**
 * Creates an iterator that generates a sequence of numbers within a specified range.
 *
 * @generator
 * @function makeRangeIterator
 * @param {number} [start=0] - The starting value of the range.
 * @param {number} [end=Infinity] - The ending value of the range (exclusive).
 * @param {number} [step=1] - The value to increment by for each iteration.
 * @yields {number} The next number in the range.
 * @returns {number} The total number of iterations performed.
 * @returns {Object} An iterator object with a `next` method that returns the next value in the range.
 */
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

const iter = makeRangeIterator(1, 10, 2);

let result = iter.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = iter.next();
}

console.log("Iterated over sequence of size:", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

// Generator Functions & Yield keyword

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

let iterable = makeRangeIterator(1, 100, 5);

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  btn.innerText = iterable.next().value;
});

for (val of iterable) {
  console.log(`Iterable: ${val}`);
}
