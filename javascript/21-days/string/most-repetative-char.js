function mostRepetitiveChar(str) {
  if (!str) {
    return null;
  }

  const charCounts = {};
  let maxCount = 0;
  let mostRepetitiveChar;

  for (let char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  for (let char in charCounts) {
    if (charCounts[char] > maxCount) {
      maxCount = charCounts[char];
      mostRepetitiveChar = char;
    }
  }
  return mostRepetitiveChar;
}

const result = mostRepetitiveChar("dewwwwwepak");
console.log(result);
