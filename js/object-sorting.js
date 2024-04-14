'use strict';
// Перебір об'єкта
console.log('_______Loop for...in_________');
// Цикл for...in - перебирає ключі об'єкта object
// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }
const apartment = {
  description: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
for (const key in apartment) {
  console.log(key);
  keys.push(key);
  values.push(apartment[key]);
}
console.log('keys:', keys); //  ["descr", "rating", "price"]

console.log('values:', values); // ["Spacious apartment in the city center", 4, 2153]

// Метод Object.keys()
console.log('_______Метод Object.keys()________');
// Object.keys(object), який приймає об'єкт і повертає масив ключів його властивостей.
// Якщо в об'єкті немає властивостей, метод поверне порожній масив.
const apartment2 = {
  description: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys2 = Object.keys(apartment2);
const values2 = [];
for (const key of keys2) {
  values2.push(apartment2[key]);
}

console.log('keys2:', keys2); //  ["description", "rating", "price"]

console.log('values2:', values2); // ["Spacious apartment in the city center", 4, 2153]

// Рефакторинг функції countProps(object),
// замінивши перебір ключів за допомогою циклу for…in
// на метод Object.keys() для отримання масиву властивостей.
// Функція має повернути кількість властивостей в об'єкті object.

function countProps(object) {
  let propCount = 0;
  const keys3 = Object.keys(object);
  console.log(keys3);
  propCount = keys3.length;
  //   for (const key in object) {
  //     if (object.hasOwnProperty(key)) {
  //       propCount += 1;
  //     }
  //   }

  return propCount;
}
console.log('first');
console.log(countProps({})); // повертає 0
console.log(countProps({ name: 'Mango', age: 2 })); //повертає 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //повертає 3

//  Метод Object.values;
// Object.values(object) повертає масив значень його властивостей.
// Якщо в об'єкті відсутні властивості, метод Object.values(object) поверне порожній масив
function countTotalSalary(salaries) {
  let totalSalary = 0;
  const salariesValue = Object.values(salaries);
  //   console.log(salariesValue); // поверртає масив зарплат
  for (const salary in salariesValue) {
    // console.log(salary); // повертає індекси масиву
    totalSalary += salariesValue[salary];
  }
  return totalSalary;
}

console.log(countTotalSalary({})); //повертає 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //повертає 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //повертає 400
