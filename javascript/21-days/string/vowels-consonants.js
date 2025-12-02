function countVowelsConsonants(str) {
  let vowels = 0;
  let consonants = 0;
  const vowelsArr = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    const charCode = char.charCodeAt(0);

    if (vowelsArr.includes(char)) {
      vowels++;
    } else if (charCode >= 97 && charCode <= 122) {
      consonants++;
    }
  }

  const result = `Total no of vowels ${vowels} and consonants ${consonants} in ${str}`;
  console.log(result);
  return { vowels, consonants };
}

console.log(countVowelsConsonants("Deepak"));
// logs: Total no of vowels 2 and consonants 4 in Deepak
// returns: { vowels: 2, consonants: 4 }
