function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

const result2 = anagram("hello", "billion");
console.log(result2);
const result3 = anagram("listen", "silent");
console.log(result3);
