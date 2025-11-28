// const arr = ["apple", "banana"];
// console.log(arr.push("orange"));

// console.log(arr.pop());

// const fruits = ["orange", "apple", "banana"];

// const res = fruits.sort();
// console.log(res);

// const fruits2 = ["orange", "apple", "banana"];

// const res2 = fruits2.sort((a, b) => a.localeCompare(b));
// console.log(res2);

// const users = [
//   {
//     name: "Deepak",
//     id: 50,
//   },
//   {
//     name: "Sharma",
//     id: 10,
//   },
//   {
//     name: "Baby",
//     id: 5,
//   },
// ];

// const res3 = users.sort((a, b) => a.id - b.id);
// console.log(res3);

// const res = [1, [2, [3, [4]]]].flat(2);
// console.log(res);

// const res = [1, [2, [3, [4]]]].flatMap((n => (Array.isArray(n) ? n : [n + 10])));
// console.log(res);

// const arr = [1, 2, 3, 4, 5];
// const newArr = [...arr, 6, 7];
// console.log(newArr);

// const arrObj = [
//   {
//     name: "deepak",
//     age: 20,
//   },
// ];

// const newObj = [...arrObj, { name: "Sharma", age: 35 }];
// console.log(newObj);

// const obj2 = { fname: "deepak", age: 35 };
// const objRes = { ...obj2, lname: "sharma" };
// console.log(objRes);

const unique = (arr) => [...new Set(arr)];

console.log(unique([1, 1, 2, 3, 4, 5, 5]));
