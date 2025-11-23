// Create a function which will reverse a string
// My Name is Deepak => kapeeD si emaN yM

function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== 'string')
    return 'Not a good string';
  const arr = str.split('');
  console.log(arr);
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
  const newStr = newArr.join('');
  console.log(newStr);
}

reverseString('My Name is Deepak');
