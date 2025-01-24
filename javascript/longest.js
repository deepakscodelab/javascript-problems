/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const arr1 = strs[0];
  let longestStr = '';
  for (let i = 0; i < arr1.length; i++) {
    let str = arr1.slice(0, i + 1);
    let flag = false;
    for (let j = 1; j < strs.length; j++) {
      let arr2 = strs[j];
      if (arr2.includes(str)) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      longestStr = str;
    }
  }

  return longestStr;
};

const result = longestCommonPrefix(['dog', 'racecar', 'car']);
console.log(result);
