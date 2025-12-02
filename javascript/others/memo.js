function memoize(fn) {
  const cache = new Map();
  return function (arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    const result = fn.call(this, arg);
    cache.set(arg, result);
    return result;
  };
}

const expensiveFunction = function (n) {
  return n * 10;
};

const memorized = memoize(expensiveFunction);
const result = memorized(10);
console.log(result);
