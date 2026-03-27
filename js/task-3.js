// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

class Car {
  static #maxPrice = 50000;

  constructor(params) {
    this.price = params.price;
  }
  checkPrice(price) {
    if (price > Car.#maxPrice) {
      return 'Error! Price exceeds the maximum';
    }
    return 'Success! Price is within acceptable limits';
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
