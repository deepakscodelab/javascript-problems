Function.prototype.myBind = function (thisArgs, ...args) {
  const sym = Symbol();
  const wrapperObj = Object(thisArgs);
  Object.defineProperty(wrapperObj, sym, {
    enumerable: false,
    value: this,
  });
  return function(...args2){
    return wrapperObj[sym](...args, ...args2);
  }
};
