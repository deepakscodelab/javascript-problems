function quickSort(array) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (array.length <= 1) {
    return array;
  }

  // Select the pivot (we'll use the last element here)
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  // Partition the array into left and right subarrays
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Recursively apply quickSort, then combine the results with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(array));
// Output: [3, 9, 10, 27, 38, 43, 82]
