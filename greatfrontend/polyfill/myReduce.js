Array.prototype.myReduce = function (callback, initialValue) {
  const len = this.length;
  let acc = initialValue === undefined ? this[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < len; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

const sum = [1, 2, 3, 4].myReduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log(sum);
