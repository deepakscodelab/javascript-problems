function throttling(func, delay) {
  let throttle = false;
  return function (...args) {
    if (throttle) return;

    throttle = true;
    setTimeout(() => {
      throttle = false;
    }, delay);

    func.apply(this, args);
  };
}
