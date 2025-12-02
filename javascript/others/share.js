/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const min = Math.min(...prices);
  const minIndex = prices.indexOf(min);
  const arr = prices.slice(minIndex + 1);
  const max = Math.max(...arr);
  return max > min ? max - min : 0;
};

const result = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result);
