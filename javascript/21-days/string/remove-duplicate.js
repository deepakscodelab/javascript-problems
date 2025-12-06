function removeDuplicate(str) {
  if (!str) {
    return null;
  }

  const result = [];
  for (let char of str) {
    if (!result.includes(char)) {
      result.push(char);
    }
  }
  return result.join("");
}

const res = removeDuplicate("deepak");
console.log(res);

function removeDuplicate2(str) {
  if (!str) {
    return null;
  }

  const set = new Set();
  let result = "";
  for (let char of str) {
    if (!set.has(char)) {
      set.add(char);
      result += char;
    }
  }
  return result;
}

const res2 = removeDuplicate2("deepak");
console.log(res2);
