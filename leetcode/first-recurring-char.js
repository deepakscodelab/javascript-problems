// Given as array [2,5,1,2,3,5,1,2,3,4]
// It should return  2

// Given as array [2,1,1,2,3,5,1,2,4]
// It should return  1

// Given as array [2,3,4,5]
// It should return undefined

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

const result = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 3, 4]);
console.log(result);

function firstRecurringCharacter2(input) {
  let arr = {};
  for (let i = 0; i < input.length; i++) {
    if (arr[input[i]] !== undefined) {
      return input[i];
    } else {
      arr[input[i]] = true;
    }
  }
  return undefined;
}

const result2 = firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 3, 4]);
console.log(result2);
