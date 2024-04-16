console.log('_____Callback function');

// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Значення змінної pointer - це посилання на функцію makePizza

function makePizza1() {
  return 'Your pizza is being prepared, please wait.';
}

const result = makePizza1();
const pointer = makePizza1;
console.log(result, pointer);

// Доповни функцію makeMessage таким чином,
// щоб вона очікувала другим параметром(параметр callback) колбек - функцію
// і повертала результат її виклику.
// Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.
// Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage('Royal Grand', makePizza)); //повертає рядок "Pizza Royal Grand is being prepared, please wait..."
console.log(makeMessage('Ultracheese', deliverPizza)); //повертає рядок "Delivering Ultracheese pizza."

console.log('______Inline Callback function');

/* 
Доповни другий виклик функції makePizza(pizzaName, callback), 
передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName). 
Колбек eatPizza логує рядок "Eating pizza <назва піци>".


Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром pizzaName */
function makePizza3(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza3('Royal Grand', function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza3('Ultracheese', function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});
console.log('____Метод forEach(callback)');
const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});
/*  Доповни виклик метода forEach, передавши йому колбек-функцію, 
  яка на кожній ітерації додає до totalPrice значення поточного 
елемента масива orderedItems.  */
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (number) {
    totalPrice += number;
  });

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
console.log(calculateTotalPrice([164, 48, 291])); //повертає 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //повертає 1116

/* Функція має повертати новий масив, з елементів оригінального масиву, 
які більші за значення другого параметра числа value.
Якщо таких значень не буде знайдено, функція повертає порожній масив.
Виконай рефакторинг, замість циклу for, використай метод forEach.
*/
function filterArray(numbers, value) {
  const newArray = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] > value) {
  //     newArray.push(numbers[i]);
  //   }
  // }
  numbers.forEach(function (number) {
    number > value ? newArray.push(number) : newArray;
  });
  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
console.log(filterArray([12, 24, 8, 41, 76], 38)); //повертає [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); //повертає [24, 41, 76]
