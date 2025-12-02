function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

const result = reverseWords("My name is deepak sharma");
console.log(result);

function reverseWords2(str) {
  const arr = str.split(" ");
  let len = arr.length;
  const result = [];
  for (let i = len - 1; i >= 0; i--) {
    const str2 = arr[i];
    let len2 = str2.length;
    let s = "";
    for (let j = len2 - 1; j >= 0; j--) {
      s += str2[j];
    }
    result.push(s);
  }
  return result.join(" ");
}

const result2 = reverseWords2("My name is deepak sharma"); // amrahs kapeed si eman yM
console.log(result2);

function reverseWords3(str) {
  const len = str.length;
  const result = [];
  let s = "";
  for (let i = len - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      s += str[i];
    } else {
      result.push(s);
      s = "";
    }
    if (i === 0) {
      result.push(s);
    }
  }
  return result.join(" ");
}

const result3 = reverseWords3("My name is deepak sharma"); // amrahs kapeed si eman yM
console.log(result3);
