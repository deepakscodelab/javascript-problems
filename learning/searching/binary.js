function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // target found, return index
    } else if (arr[mid] < target) {
      left = mid + 1; // discard left half
    } else {
      right = mid - 1; // discard right half
    }
  }

  return -1; // target not found
}

// Example usage
const numbers = [10, 20, 30, 40, 50]; // sorted array
const target = 30;

const result = binarySearch(numbers, target);

if (result !== -1) {
  console.log(`Element ${target} found at index ${result}`);
} else {
  console.log('Element not found');
}
