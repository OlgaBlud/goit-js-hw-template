console.log('____every, some і reduce');
// чи всі користувачі зараз активні.
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];
const isEveryUserActive = users => {
  return users.every(user => user.isActive === true);
};
const isAllActiveUsers = isEveryUserActive(users);
console.log('all users is active?', isAllActiveUsers);
const findUserActive = users => {
  return users.some(user => user.isActive === true);
};
const activeUsers = findUserActive(users);
console.log(activeUsers);

/* array.reduce((previousValue, element, index, array) => {
  // Тіло колбек-функції
}, initialValue); */

const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 12
// у змінній totalPlayTime має бути загальний ігровий час з масиву playtimes.
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;
console.log('Total time', totalPlayTime, 'Average', averagePlayTime); //число `2692` /673

/* 
В результаті змінна totalAveragePlaytimePerGame міститиме 
загальну суму середнього часу на одну гру для всіх гравців. */

const players2 = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players2.reduce((acc, player) => {
  const averagePlaytimePerGame = player.playtime / player.gamesPlayed;
  console.log(averagePlaytimePerGame);
  return averagePlaytimePerGame + acc;
}, 0);

console.log(totalAveragePlaytimePerGame); //це число 1023

/* Доповни функцію, щоб вона рахувала і повертала суму 
всіх коштів, які зберігають користувачі з масиву users. */

const calculateTotalBalance = users =>
  users.reduce((previousValue, user) => {
    return user.balance + previousValue;
  }, 0);
const balanceResult = calculateTotalBalance(users);
console.log(balanceResult); // повертає число 20916
