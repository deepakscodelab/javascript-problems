class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hello I am ${this.name}. I'm ${this.type}`);
  }
}

class Wazard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Hello I'm ${this.type}`);
  }
}

const wazard1 = new Wazard('Deepak', 'Programmer');
wazard1.introduce();
wazard1.play();
