const debounce = function (func, delay) {
  let timerId = null;
  return function (...args) {
    const context = this;
    console.log(context)
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
};

function a() {
  console.log("Hello after delay");
}

const b = debounce(a, 1000);

console.log(b())