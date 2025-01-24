let obj1 = { a: true };
let obj2 = obj1;

// console.log('obj1', obj1);
// console.log('obj2', obj2);

const newNode = 10;

obj2.a = newNode;
obj2 = newNode;

const newNode2 = 20;

obj2.a = newNode2;
//obj2 = newNode2;

console.log('obj1', obj1);
console.log('obj2', obj2);

const newNode3 = 30;
