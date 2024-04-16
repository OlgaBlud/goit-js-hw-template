console.log('____arrow function');

/* Виконай рефакторинг функції таким чином,
    щоб вона була оголошена як стрілочна. */

// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
console.log(calculateTotalPrice(3, 400)); // повертає `1200`

// Псевдомасив arguments
/* Виконай рефакторинг функції,
    замінивши її оголошення на стрілочну функцію.
    Також заміни колбек - функцію, передану в метод forEach(),
    на стрілочну функцію. */
/* function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(function (item) {
    totalPrice += item;
  });
  return totalPrice;
} */
const calculateTotalPrice2 = orderedItems => {
  let totalPrice = 0;
  orderedItems.forEach(item => (totalPrice += item));

  return totalPrice;
};

console.log(calculateTotalPrice2([12, 85, 37, 4])); // повертає 138
console.log(calculateTotalPrice2([164, 48, 291])); // повертає 503
console.log(calculateTotalPrice2([412, 371, 94, 63, 176])); // повертає 1116

// Заміни оголошення функції filterArray()
// і колбек для методу forEach() на стрілочні функції.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }

const filterArray2 = (numbers, value) => {
  const filteredNumbers = [];
  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};
console.log(filterArray2([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
console.log(filterArray2([1, 2, 3, 4, 5], 4)); // повертає [5]
console.log(filterArray2([1, 2, 3, 4, 5], 5)); // повертає []
console.log(filterArray2([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
console.log(filterArray2([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]
