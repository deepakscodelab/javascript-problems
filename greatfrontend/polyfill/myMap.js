// const multiply = [1, 2, 3, 4, 5].map((item) => item * 2);

Array.prototype.myMap = function (callback, thisArgs) {
  console.log(thisArgs);
  const len = this.length;
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = callback.call(thisArgs, this[i], i, this);
  }
  return arr;
};

const multiply = [1, 2, 3, 4, 5].myMap((item) => item * 2);
console.log(multiply)