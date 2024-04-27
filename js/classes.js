// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// console.log(new Car('Audi', 'Q3', 36000)); // утвориться об'єкт {brand: "Audi", model: "Q3", price: 36000}
// console.log(new Car('BMW', 'X5', 58900)); // утвориться об'єкт {brand: "BMW", model: "X5", price: 58900}
// console.log(new Car('Nissan', 'Murano', 31700)); // утвориться об'єкт {brand: "Nissan", model: "Murano", price: 31700}
// class CarN {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }
// console.log(new CarN('Audi', 'Q3', 36000)); // чому undefined???

/* class Car {
  #brand;
  model;
  price;
  constructor(params) {
    this.#brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }
  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}
 */

/* class Car {
  #brand;
  #model;
  #price;

  constructor(params) {
    this.#brand = params.brand;
    this.#model = params.model;
    this.#price = params.price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
} */
/* console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 })); //утвориться об'єкт { model: "Q3", price: 36000 }
console.log(new Car({ brand: 'bmw', model: 'X5', price: 58900 })); //утвориться об'єкт { model: "X5", price: 58900 }
console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })); //утвориться об'єкт { model: "Murano", price: 31700 }
 */

/* class Car {
  static maxPrice = 50000;
  #price;

  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (Car.maxPrice > newPrice) {
      this.#price = newPrice;
    }
  }
} */

/* const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000 */

class Car {
  static #maxPrice = 50000;
  static checkPrice(price) {
    if (Car.#maxPrice > price) {
      return 'Success! Price is within acceptable limits';
    } else return 'Error! Price exceeds the maximum';
  }
  constructor(params) {
    this.price = params.price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = { BASIC: 'basic', SUPERUSER: 'superuser' };
}
console.log(Admin.role.BASIC); //повертає рядок `"basic"`
console.log(Admin.role.SUPERUSER); //повертає рядок `"superuser"`
