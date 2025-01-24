/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const arr = [[1]];
  for (let i = 0; i < numRows - 1; i++) {
    const prevArr = [0, ...[...arr[i]], 0];
    let newEntry = [];
    for (let j = 0; j < prevArr.length - 1; j++) {
      newEntry.push(prevArr[j] + prevArr[j + 1]);
    }
    arr.push(newEntry);
  }
  return arr;
};

const result = generate(5);
console.log(result);
