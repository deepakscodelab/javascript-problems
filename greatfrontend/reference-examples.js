// const users = [
//   {
//     name: "Deepak",
//     age: 29,
//   },
//   { name: "Sharma", age: 35 },
// ];

// const results = [];

// users.forEach((user) => {
//   const newUser = user;
//   if (newUser.name === "Deepak") {
//     newUser.name = "Deepak ji";
//     results.push(newUser);
//   }
// });

// console.log(users);
// console.log(results);

// 1) Values vs References (the core idea)

// let a = { x: 1 };
// let b = a;
// b.x = 5;
// console.log(a);
// console.log(b);

// “Pass-by-value” … of references

// function tweak(obj) {
//   obj.x = 42; // Mutates original object
//   obj = { x: 0 }; // Rebinds local parameter (doesn't affect caller's binding)
//   console.log("--inside function---", obj.x);
// }
// const a = { x: 1 };
// tweak(a);
// console.log(a.x); // 42

// Shallow vs deep copy (and common traps)

// const obj1 = {
//   name: "Deepak",
//   address: {
//     city: "Banaglore",
//   },
// };

// // const obj2 = { ...obj1 };
// const obj2 = structuredClone(obj1);
// obj2.name = "Sharma";
// obj2.address.city = "Agra";

// console.log(obj1);
// console.log(obj2);

const a = { n: 1 };
const b = { n: 1 };
const c = a;
console.log(a === b, a === c); // ?
