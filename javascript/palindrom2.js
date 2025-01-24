/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (isPalindrom(s)) {
    return true;
  } else {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
      let str1 = s.substring(0, l) + s.substring(l + 1);
      let str2 = s.substring(0, r) + s.substring(r + 1);
      if (isPalindrom(str1) || isPalindrom(str2)) {
        return true;
      }
      l++;
      r--;
    }
    return false;
  }
};

function isPalindrom(str) {
  //   let l = 0;
  //   let r = str.length - 1;
  //   while (l < r) {
  //     if (str[l] !== str[r]) {
  //       return false;
  //     }
  //     l++;
  //     r--;
  //   }
  //   return true;

  return str === str.split('').reverse().join('');
}
