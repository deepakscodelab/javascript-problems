/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = fn(arr[i], i);
    console.log(result);
    if (result === true) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

const fn = function greaterThan10(n) {
  return n > 10;
};

const arr = [0, 10, 20, 30];

const result = filter(arr, fn);

console.log(result);
