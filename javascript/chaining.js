class Calculator {
  constructor(value) {
    this.result = value;
  }

  add(value) {
    this.result += value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  getValue() {
    return this.result;
  }
}

const result = new Calculator(10).add(5).multiply(2).getValue();
console.log(result);
