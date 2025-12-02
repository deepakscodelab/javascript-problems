/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = 0;
  return function () {
    return n + count++;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
