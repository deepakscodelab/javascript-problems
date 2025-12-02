// Using built in function
function reverseString(s) {
  return s.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

// Using for loop and concat string
function reverseString2(str) {
  const len = str.length;
  let s = "";
  for (let i = len - 1; i >= 0; i--) {
    s += str[i];
  }
  return s;
}

console.log(reverseString2("Deepak")); // kapeeD

// Using two pointers

function reverseString3(str) {
  const arr = str.split("");
  // console.log(arr);
  let len = arr.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
}

console.log(reverseString3("Deepak"));
