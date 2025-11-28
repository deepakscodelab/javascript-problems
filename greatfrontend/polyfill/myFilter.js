Array.prototype.myFilter = function (callback, thisArgs) {
  const len = this.length;
  const arr = [];
  for (let i = 0; i < len; i++) {
    if (Object.hasOwn(this, i) && callback(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const data = [1, 2, 3, , 4, 5].myFilter((item) => item <= 3);
console.log(data);
