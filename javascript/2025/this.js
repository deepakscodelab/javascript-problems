// Used globally
console.log(this);

// Within a regular function call

function showThis() {
  console.log(this);
}

showThis();

// Within a method call

const obj = {
  fname: "Deepak",
  lname: "Sharma",
  fullName() {
    console.log(this);
    return `My full name is ${this.fname} ${this.lname}`;
  },
};

const result = obj.fullName();
console.log(result);

const fullName = obj.fullName;
console.log(fullName());

// Within a function constructor

function Person(name) {
  this.name = name;
}

const p1 = new Person("Deepak");
console.log(p1.name);

class Person2 {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log(this);
    return `My name is ${this.name}`;
  }
}

const p2 = new Person2("Sharma");
console.log(p2.showName());

// Explicitly binding this

function showThis() {
  console.log(this);
}

const p3 = { name: "Deepak Sharma" };
showThis.call(p3);

//showThis();

function showThis() {
  console.log(this);
}

const fun = showThis.bind(p3);
fun();

// within arrow function

const person = {
  fname: "Deepak",
  lname: "Sharma",
  fullName: () => {
    console.log(this);
    return `My name is ${this.fname} ${this.lname}`;
  },
};

console.log(person.fullName());

const obj5 = {
  fname: "Deepak",
  lname: "Sharma",
  printName() {
    const fullName = () => {
      console.log(this);
      console.log(`My name is ${this.fname} ${this.lname}`);
    };
    fullName();
  },
};

obj5.printName();

// Within event handlers
<button id="my-button" onclick="console.log(this)">Click me</button>

document.getElementById('my-button').addEventListener('click', function () {
  console.log(this); // Logs the button element
});

document.getElementById('my-button').addEventListener('click', () => {
  console.log(this); // Window / undefined (depending on whether strict mode) instead of the button element.
});
