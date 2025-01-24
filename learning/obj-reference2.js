let obj1 = { a: true };
let obj2 = obj1;

console.log('obj1', obj1);
console.log('obj2', obj2);

const newNode = { name: 'deepak' };

obj2.a = newNode;
obj2 = newNode;

console.log('obj1', obj1);
console.log('obj2', obj2);

const newNode2 = { name: 'sharma' };
obj2.a = newNode2;
obj2 = newNode2;

console.log('obj1', obj1);
console.log('obj2', obj2);

console.log('-------3----');
// const newNode3 = { name: 'Ram' };
obj2.a = { name: 'Ram' };
obj2 = { name: 'Ram' };

console.log('obj1', obj1);
console.log('obj2', obj2);

console.log('-------4----');
obj2.a = { name: 'Sita' };
obj2 = { name: 'Sita' };

console.log('obj1', obj1);
console.log('obj2', obj2);
