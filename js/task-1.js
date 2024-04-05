'use strict';

console.log('______Loop while______');

function calculateTotal(number) {
  let sum = 0;
  while (number > 0) {
    // console.log(number);
    sum += number;
    number -= 1;
  }
  return sum;
}
/* console.log('(1=>1)', calculateTotal(1));
console.log('(3=>6)', calculateTotal(3));
console.log('(0=>0)', calculateTotal(0));
console.log('(18=>171), calculateTotal(18));
console.log('(24=>300), calculateTotal(24)); */

console.log('______Loop for______');

function calculateTotalFor(number) {
  let sum = 0;
  for (number; number > 0; number -= 1) {
    // console.log(number);
    sum += number;
  }
  return sum;
}
/* console.log('Loop for, (1=>1):', calculateTotalFor(1));
console.log('Loop for, (3=>6):', calculateTotalFor(3));
console.log('Loop for, (0=>0):', calculateTotalFor(0));
console.log('Loop for, (18=>171):', calculateTotalFor(18));
console.log('Loop for, (24=>300):', calculateTotalFor(24)); */

// GPT

/* function calculateTotalGPT(number) {
  if (number < 1) {
    return 0;
  }
  let total = 0;
  let i = 1;
  while (i <= number) {
    // console.log(i);
    total += i;
    i++;
  }
  return total;
} */

console.log('______sum (num % 2 = 0)_____');
// Повернути суму всіх парних цілих чисел від одиниці до цього числа включно.
function calculateEvenTotal(number) {
  let total = 0;
  for (let i = 0; i <= number; i++) {
    // console.log(i);
    if (i % 2 === 0) {
      total += i;
    }
  }
  /* for (let i = 2; i <= number; i += 2) {
    total += i;
  } */
  return total;
}

// console.log('1 => 0 : ', calculateEvenTotal(1));
// console.log('3 => 2 :', calculateEvenTotal(3));
// console.log('7 => 12 :', calculateEvenTotal(7));
// console.log('18 => 90 :', calculateEvenTotal(18));
// console.log('19 => 90 :', calculateEvenTotal(19));
// console.log('27 => 182 :', calculateEvenTotal(27));

// В змінну number записувати перше число у проміжку від start до end, яке ділиться на 5 без остачі.
console.log('______Loop "for + break")_____');
const start = 6;
const end = 17;
let number;
for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    console.log(i);
    number = i;
    console.log(number);
    break;
  }
}
function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      return i;
    }
  }
}
console.log('=> 5', findNumber(2, 6, 5));
console.log('=> 9', findNumber(8, 17, 3));
console.log('=> 8', findNumber(6, 9, 4));
console.log('=> 21', findNumber(16, 35, 7));
