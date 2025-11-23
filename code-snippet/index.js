// 1-Generator function

// function* generator(i) {
//   yield i;
//   yield i * 10;
// }

// const gen = generator(10);

// console.log(gen.next().value)
// console.log(gen.next().value)

// 2-Promise.race()

// const res = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved");
//   }, 5000);
// });

// const res = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'one');
// });

// res.then((res)=> console.log(res))

// 3
// let person = { name: 'Lydia' };
// const members = person;
// person = null;

// console.log(members);

// let person = { name: 'Lydia' };
// const members = person;

// person.name = 'John';
// console.log(members);  // logs { name: 'John' } — both see the change

/// #############  #########################################

const person = { name: "Deepak", age: 29 };

for(const item in person){
  console.log(item)
}

// 
