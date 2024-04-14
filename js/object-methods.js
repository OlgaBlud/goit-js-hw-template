'use strict';
//Програма має додавати, видаляти, шукати та оновлювати зілля.
// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// Значення властивості potions - це масив де будуть зберігатися зілля. []
// Значення властивості getPotions - це метод об'єкта, який повертає рядок "List of all available potions"
// Значення властивості addPotion - це метод об'єкта, який повертає рядок "Adding <potionName>"
// console.log(atTheOldToad.getPotions()); //повертає "List of all available potions"
// console.log(atTheOldToad.addPotion('Invisibility')); // повертає "Adding Invisibility"
// console.log(atTheOldToad.addPotion('Power potion')); // повертає "Adding Power potion"

// ===================================================================
// Зміни код метода так, щоб він повертав значення властивості potions
// Зміни код методу addPotion так, щоб він додавав зілля potionName в кінець масиву у властивості potions.
// const atTheOldToad2 = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     // return 'List of all available potions';
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (potionName !== undefined) {
//       this.potions.push(potionName);
//       return this.potions;
//     } else return this.potions;
//   },
// };

// console.log(atTheOldToad2.getPotions()); //повертає поточне значення властивості potions
// console.log(atTheOldToad2.addPotion()); //повертає поточне значення властивості potions
// console.log(atTheOldToad2.addPotion('Invisibility')); //повертає["Speed potion", "Stone skin", "Invisibility"]
// console.log(atTheOldToad2.addPotion('Power potion')); //повертає["Speed potion", "Stone skin", "Invisibility", "Power potion"]

// ===================================================================
/*Тепер potions — масив рядків, з назвами зіль і ціною
getPotions() — метод, який повертає значення властивості potions
addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
Додай метод getTotalPrice(), який повертає загальну вартість potions. */
const atTheOldToad3 = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
    return this.potions;
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};
// console.log(atTheOldToad3.getPotions());
console.log(atTheOldToad3.addPotion({ name: 'Invisibility', price: 620 })); // в масиві potions останнім елементом буде цей об'єкт
console.log(atTheOldToad3.addPotion({ name: 'Power potion', price: 270 })); // в масиві potions останнім елементом буде цей об'єкт
console.log(atTheOldToad3.getTotalPrice()); // повертає загальну вартість усіх зіль з властивості potions

const atTheOldToad4 = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        return this.potions;
      }
    }
  },
};
console.log(atTheOldToad4.updatePotionName('Stone skin', 'Invisibility'));
// у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]
console.log(atTheOldToad4.updatePotionName('Speed potion', 'Polymorth'));
//у властивості potions буде масив [{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 } ]
