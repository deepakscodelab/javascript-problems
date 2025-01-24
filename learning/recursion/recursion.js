let fact = 1;

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

findFactorialRecursive(4);

const result = findFactorialRecursive(5);
console.log(result);

function findFactorialIterative(number) {
  let fact = 1;
  for (let i = 2; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}

// const result = findFactorialIterative(5);
// console.log(result);
