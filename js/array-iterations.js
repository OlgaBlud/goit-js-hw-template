// ____________________Ітерація по масиву______________
// Цикл for(i)
// Метод масиву includes()
// Цикл for...of
function calculateTotalPrice(order) {
  let sum = 0;
  for (let i = 0; i < order.length; i += 1) {
    // console.log(i);
    sum += order[i];
  }
  return sum;
}
// order - масив чисел.
// повертала загальну суму елементів з масиву order.

console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
console.log(calculateTotalPrice([164, 48, 291])); //повертає 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //повертає 1116
// _______________________________________________
function getEvenNumbers(start, end) {
  let array = [];
  for (let i = start; i <= end; i += 1) {
    // console.log(i);
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
}
// масив усіх парних чисел від start до end.
//  Якщо жодного парного числа немає, то масив має бути пустим.

console.log(getEvenNumbers(2, 5)); //повертає [2, 4]
console.log(getEvenNumbers(3, 11)); //повертає [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); //повертає [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)); //повертає [8]
console.log(getEvenNumbers(7, 7)); //повертає []

// Метод масиву includes() повертає логічне значення
// true, якщо елемент знайдено в масиві,
// і false, якщо елемент відсутній.

function checkStorage(storage, item) {
  if (storage.includes(item.toLowerCase())) {
    return `${item} is available to order!`;
  } else return 'Sorry! We are out of stock!';
}
console.log(checkStorage(['apple', 'plum', 'pear'], 'plum')); //повертає "plum is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM')); //повертає "plum is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'pear')); //повертає "pear is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr')); //повертає "pear is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'orange')); //повертає "Sorry! We are out of stock!"
console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot')); //повертає "Sorry! We are out of stock!"

// "Спільні елементи".

function getCommonElements(array1, array2) {
  let newArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    //   console.log(array1[i]);
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
}

console.log(getCommonElements([1, 2, 3], [2, 4])); //повертає [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //повертає []
// _______Цикл for...of
// for (const element of array) {тіло циклу}
// Гарна заміна циклу for, якщо не потрібен доступ до лічильника.

const planets = ['Earth', 'Mars', 'Venus'];
for (const planet of planets) {
  console.log(planet);
}
function calculateTotalPrice2(order) {
  let sum = 0;
  for (const price of order) {
    // console.log(price);
    sum += price;
  }
  return sum;
}

console.log(calculateTotalPrice2([12, 85, 37, 4])); // повертає 138
console.log(calculateTotalPrice2([164, 48, 291])); // повертає 503
console.log(calculateTotalPrice2([412, 371, 94, 63, 176])); // повертає 1116
console.log(calculateTotalPrice2([])); // повертає 0
