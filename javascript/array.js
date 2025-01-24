/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const newArr = [];
  arr.forEach((n, i) => newArr.push(fn(n, i)));
  return newArr;
};

const fn = function plusI(n, i) {
  return n + i;
};

const fn2 = function plusone(n) {
  return n + 1;
};

const arr = [1, 2, 3];
const result = map(arr, fn2);

console.log(result);
