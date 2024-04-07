// Псевдомасив arguments
// метод Array.from(), який створить масив із псевдомасиву.
// метод масиву toReversed(),який повертає масив у зворотньому порядку.
// Параметри за замовчуванням
// Функціональний вираз
function createReversedArray() {
  const arrayFromArguments = Array.from(arguments);
  //   console.log(arrayFromArguments);
  const reversedArray = arrayFromArguments.toReversed();
  //   console.log(reversedArray);
  return reversedArray;
}
// повертала масив усіх аргументів,у зворотному порядку.
console.log(createReversedArray(12, 85, 37, 4)); //повертає [4, 37, 85, 12]
console.log(createReversedArray(164, 48, 291)); //повертає [291, 48, 164]
console.log(createReversedArray(412, 371, 94, 63, 176)); //повертає [176, 63, 94, 371, 412]
console.log(createReversedArray()); // повертає []

// Параметри за замовчуванням
function greet(username = 'Guest') {
  console.log(`Hello, ${username}!`);
}
greet('Jacob'); // "Hello, Jacob!"
greet(); // "Hello, Guest!"

function calculateTax(amount, taxRate = 0.2) {
  const taxSum = amount * taxRate;
  return taxSum;
}
console.log(calculateTax(100)); //повертає `20`
console.log(calculateTax(200, 0.3)); //повертає `60`
// Функціональний вираз
// ❌ Помилка! Не працює виклик до оголошення
// multiply(1, 2, 3);

const multiply = function (x, y, z) {
  console.log(x * y * z);
};

// ✅ Працює виклик після оголошення
multiply(4, 5, 6);
