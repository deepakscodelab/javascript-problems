// const obj = {
//   name: "Deepak Sharma",
// };
// console.log(obj.prototype);
// console.log(Object.getPrototypeOf(obj));
// console.log(obj.__proto__);

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.makeSound = function () {
//   console.log(this);
//   console.log(`The ${this.constructor.name} makes a sound`);
// };

// function Dog(name) {
//   Animal.call(this, name);
// }

// const obj = new Dog("Doggy");
// console.log(obj.__proto__);
// console.log(obj.__proto__ === Animal.prototype);

// Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// console.log(obj);

///////////////////// Lydia Hallie ////////////////////////////

function Dog(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
}

Dog.prototype.bark = function () {
  return "Woof";
};

// console.log(Dog)

const dog1 = new Dog("Daisy", "Labrador", "black");

console.log(dog1);

const dog2 = new Dog("Jack", "Jack Russell", "while");
