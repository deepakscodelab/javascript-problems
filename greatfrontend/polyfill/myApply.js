Function.prototype.myApply = function (thisArgs, args = []) {
  const sym = Symbol();
  const objWrapper = Object(thisArgs);
  Object.defineProperty(objWrapper, sym, {
    enumerable: false,
    value: this,
  });

  return objWrapper[sym](...args);
};
