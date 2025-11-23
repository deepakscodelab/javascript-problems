function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // return index if target is found
    }
  }
  return -1; // return -1 if target is not found
}

// Example usage
const numbers = [10, 25, 30, 45, 50];
const target = 30;

const result = linearSearch(numbers, target);

if (result !== -1) {
  console.log(`Element ${target} found at index ${result}`);
} else {
  console.log('Element not found');
}
