function longestWord(str) {
  const arr = str.split(" ");
  let longestWord = arr[0];
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

const result = longestWord("My name is deepak sharma");
console.log(result);

function longestWords(str) {
  let arr = str.split(" ");
  let maxLen = 0;
  let result = [];
  for (let word of arr) {
    if (word.length > maxLen) {
      result = [word];
      maxLen = word.length;
    } else if (word.length === maxLen) {
      result.push(word);
    }
  }
  return result.join(" ");
}

const result2 = longestWords("My name is deepak sharma");
console.log(result2);

function longestword3(str) {
  const arr = str.split(" ");
  return arr.reduce((acc, curr) => (acc.length > curr.length ? acc : curr));
}

const result3 = longestword3("My name is deepak ji");
console.log(result3);

