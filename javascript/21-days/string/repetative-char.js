function countCharacter(str) {
  let len = str.length;
  const charCount = {};
  for (let i = 0; i < len; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char] = charCount[char] + 1;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

const result = countCharacter("Deepak");
console.log(result);

function countCharacter2(str) {
  const arr = str.split("");
  return arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}

const result2 = countCharacter2("Deepak");
console.log(result2);

function countCharacter3(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

const result3 = countCharacter3("Deepak");
console.log(result3);
