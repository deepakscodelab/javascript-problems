function a(a) {
  return function b(b) {
    return function c(c) {
      return a + b + c;
    };
  };
}

const addFive = a(5);
const addMore = addFive(10);
const addAnother = addMore(15);
console.log(addAnother)