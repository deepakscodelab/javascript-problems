// function Person1(name) {
//   this.name = name;
// }

// function Student1(name, studentId) {
//   Person1.call(this, name);
//   this.studentId = studentId;
// }

// Student1.prototype = Object.create(Person1.prototype);
// Student1.prototype.contructor = Student1;

// const student1 = new Student1("Deepak", "12132");

// console.log(student1.name, student1.studentId);

class Person2 {
  constructor(name) {
    this.name = name;
  }
}

class Student2 extends Person2 {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}

const student2 = new Student2("Sharma", "132423");
console.log(student2.name, student2.studentId);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `My name is ${this.name} and I am ${this.age} old`;
};

const p1 = new Person("Deepak", 35);
console.log(p1.greet());

class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `My name is ${this.name} and I am ${this.age} old`;
  }
}

const p3 = new Person3('Jeetesh', 30);
console.log(p3.greet());
