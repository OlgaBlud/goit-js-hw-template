console.log('_____Ключове слово this');
const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.order('Smoked')); //повертає рядок "Order accepted, preparing «Smoked» pizza"
console.log(pizzaPalace.order('Four meats')); // повертає рядок "Order accepted, preparing «Four meats» pizza"
console.log(pizzaPalace.order('Big Mike')); // повертає рядок "Sorry, there is no pizza named «Big Mike»"
console.log(pizzaPalace.order('Viennese')); // повертає рядок "Sorry, there is no pizza named «Viennese»"

// Глобальний контекст
// Контекст методу об'єкта
const user = {
  username: 'Poly',
  showThis() {
    console.log(this);
  },
};

user.showThis(); // {username: "Poly", showThis: ƒ}
('use strict');

function showThis() {
  console.log('this in showThis: ', this);
}

// Викликаємо у глобальному контексті
showThis(); // "this in showThis: undefined"

// Метод call()
// Метод apply()
// Метод bind() і втрата контексту
// Метод bind() і колбек
