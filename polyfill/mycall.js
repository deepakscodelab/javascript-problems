Function.prototype.myCall = function (thisArgs, ...args) {
  const sym = Symbol();
  const objWrapper = Object(thisArgs);
  Object.defineProperty(objWrapper, sym, {
    enumerable: false,
    value: this,
  });

  console.log(objWrapper);

  return objWrapper[sym](...args);
};

function greet(greeting, punctuation) {
  return `${greeting} ${this.name} ${punctuation}`;
}

const greeting = { name: "deepak" };

const res = greet.myCall(greeting, "Hello", "!");
console.log(res);

// const greet2 = {
//   name: "deepak",
//   greet: function (greeting, puntuation) {
//     return `${greeting} ${this.name} ${puntuation}`;
//   },
// };
