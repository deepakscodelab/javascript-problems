function checkPalindrom(str) {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

console.log(checkPalindrom("AHA"));
console.log(checkPalindrom("Deepak"));

function checkPalindrom2(str) {
  let str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let len = str.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(checkPalindrom2("AHA"));
console.log(checkPalindrom2("madam"));
console.log(checkPalindrom2("Deepak"));
