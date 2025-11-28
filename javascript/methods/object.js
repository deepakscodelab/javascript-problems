// Object.keys()

const user = { fname: "deepak", lname: "sharma", age: 35 };
console.log(Object.keys(user));

console.log(Object.values(user));

// Object.entries()
console.log(Object.entries(user));

// Object.fromEntries()
const entries = [
  ["fname", "deepak"],
  ["lname", "sharma"],
  ["age", 35],
];
const objFromEntries = Object.fromEntries(entries);
//console.log(objFromEntries);

// Object.freeze(user);
// user.age = 40;
// console.log(user);

Object.seal(user);
user.age = 40;
console.log(user);

// Sparse array to normal array
const sparseArr = [1, , 3, , 5];
const normalArr = Array.from(sparseArr);
console.log(normalArr);

const obj = { a: 1, b: 2, c: 3 };
const newObj = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [key, value * 2])
);
console.log(newObj);

const obj2 = { lname: "deepak", age: 30 };
if ("lname" in obj2) {
  console.log("key exists");
} else {
  console.log("key does not exist");
}

for (let key in obj2) {
  console.log("---key---", key);
}

const arr4 = [1, 2, 3, 4];

const group = Object.groupBy(arr4, (arr) => (arr % 2 === 0 ? "even" : "odd"));
console.log(group);

// Character frequency counter

function frequencyCount(str) {
  const obj = {};
  for (const ch of str) {
    if (obj[ch]) {
      obj[ch] += 1;
    } else {
      obj[ch] = 1;
    }
  }
  return obj;
}

const result = frequencyCount("aabbcde");
console.log(result);

// Sort values of an object
const unsortedObj = { b: 2, a: 5, c: 1 };
// const sortedObj = Object.fromEntries(
//   Object.entries(unsortedObj).sort((a, b) => a[1] - b[1])
// );
// console.log(sortedObj);

console.log(
  Object.fromEntries(Object.entries(unsortedObj).sort((a, b) => a[1] - b[1]))
);

console.log(
  Object.entries(unsortedObj)
    .sort((a, b) => a[1] - b[1])
    .map(([k, v]) => k)
);

const str = "asdas";

const freq = {};
for (const ch of str) {
  freq[ch] = (freq[ch] || 0) + 1;
}
console.log(freq);

function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return null; // or throw if no solution expected
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
