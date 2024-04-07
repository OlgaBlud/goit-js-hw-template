console.log(typeof typeof 1);
// ____________________________________Методи масиву__________________________
// join
// split;
// slice;
// concat;
// indexOf;
// push;
function getLastElementMeta(array) {
  const lastElementIndex = array.length - 1;
  const newArray = [lastElementIndex, array[lastElementIndex]];
  return newArray;
}
// ===========JOIN================
function getLength(array) {
  console.log(array);
  return array.join('').length;
}
console.log(getLength(['top', 'picks', 'for', 'you']));
// повертає `14`
console.log(getLength(['M', 'a', 'n', 'g', 'o']));
// повертає `5`
console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
//повертає `22`

// ===========SPLIT================
function transformString(string) {
  console.log('string: ', string);
  const words = string.split('_');
  console.log('string after split _: ', words);
  return words.join('-');
}

// console.log('string after join: ', transformString('user_age')); // "user-age"
console.log('array after join - : ', transformString('price_per_droid')); // "price-per-droid"
// ===========SLICE================
// Метод масиву slice(begin, end) повертає новий масив,
// що містить копію частини вихідного масиву,
// не змінюючи його.Копія створюється від індексу begin до,
// але не включаючи індекс end.
// Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів
// (тобто стільки елементів з кінця, скільки вказано в параметрі begin)
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

// ===========CONCAT================

// Метод concat()б'єднання двох або більше масивів.
// const result = firstArray.concat(secondArray, thirdArray);

// ===========indexOf================
// Метод indexOf()
// indexOf(elem) використовується для визначення індексу першого входження
// елемента elem у масиві.Він повертає індекс елемента, якщо він знайдений,
//   або - 1, якщо елемент не знайдений.
// Метод indexOf() виконує сувору рівність(===) при порівнянні елементів.
function getSlice(array, value) {
  const valueIndex = array.indexOf(value);
  let newArray = [];
  if (valueIndex === -1) {
    return newArray;
  } else return (newArray = array.slice(0, valueIndex + 1));
}

console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); //повертає ["Mango", "Poly"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); //повертає ["Mango", "Poly", "Ajax"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango')); //повертає ["Mango"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob')); //повертає []
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey')); //повертає []
// ===========PUSH================
// Метод push() додавання одного або більше елементів у кінець масиву.
// array.push(element1, element2, ..., elementN);

function createArrayOfNumbers(min, max) {
  const array = [];
  for (let i = min; i <= max; i += 1) {
    console.log(i);
    array.push(i);
  }
  return array;
}
console.log(createArrayOfNumbers(1, 3)); //повертає [1, 2, 3]
console.log(createArrayOfNumbers(14, 17)); //повертає [14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34)); //повертає[29, 30, 31, 32, 33, 34]
