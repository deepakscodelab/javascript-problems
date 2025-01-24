function checkValues(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      return false; // Function stops here
    }
  }
  return true; // Only reached if no negative values are found
}

let numbers = [1, 2, 3, 4, 5];
console.log(checkValues(numbers)); // Output: true

numbers = [1, 2, -3, 4, 5];
console.log(checkValues(numbers)); // Output: false
