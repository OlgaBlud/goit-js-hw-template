'use strict';

/* =======================================================================
Перебери масив об'єктів colors, використовуючи цикл for...of. 
Додай у масив hexColors значення властивостей hex,
а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors. */
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
for (const color of colors) {
  const hexValue = color.hex;
  const rgbValue = color.rgb;
  //   console.log(hexValue, rgbValue);
  hexColors.push(hexValue);
  rgbColors.push(rgbValue);
}
console.log(hexColors); //["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
console.log(rgbColors); //["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

/*  =======================================================================
Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям
(властивість name) в масиві products і повертала його ціну(властивість price).
Якщо продукт з такою назвою не знайдений, функція повинна повертати null. */
function getProductPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  let productPrice;
  for (const product of products) {
    // console.log(product);

    if (product.name === productName) {
      return (productPrice = product.price);
    }
  }
  return productPrice;
}

console.log(getProductPrice('Radar')); //повертає 1300.
console.log(getProductPrice('Grip')); //повертає 1200.
console.log(getProductPrice('Scanner')); //повертає 2700.
console.log(getProductPrice('Droid')); //повертає 400.
console.log(getProductPrice('Engine')); //повертає null.

/*  ============================================================================
Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
 Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
 */
function getAllPropValues(propName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  const propValues = [];

  for (const product of products) {
    // console.log(Object.keys(product));
    // console.log(Object.keys(product).includes(propName));
    if (Object.keys(product).includes(propName)) {
      propValues.push(product[propName]);
    }
  }
  return propValues;
}

console.log(getAllPropValues('name')); //повертає ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues('quantity')); //повертає [4, 3, 7, 9]
console.log(getAllPropValues('price')); //повертає [1300, 2700, 400, 1200]
console.log(getAllPropValues('category')); //повертає []

/* 
Повернути загальну вартість(ціна * кількість) товару 
з таким ім'ям з масиву products.
Якщо продукту з такою назвою немає, то функція повинна повертати рядок
"Product <productName> not found!", де < productName > — це ім'я товару.
*/
function calculateTotalPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  let totalPrice = `Product ${productName} not found!`;

  for (const product of products) {
    //   if (Object.values(product).includes(productName)) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
    } //else totalPrice = `Product ${productName} not found!`;
    //   !!!!!!!!!!!!?????????????? else
  }
  return totalPrice;
}

console.log(calculateTotalPrice('Blaster')); //повертає "Product Blaster not found!"
console.log(calculateTotalPrice('Radar')); //повертає 5200
console.log(calculateTotalPrice('Droid')); // повертає 2800
console.log(calculateTotalPrice('Grip')); //повертає 10800
console.log(calculateTotalPrice('Scanner')); // повертає 8100
