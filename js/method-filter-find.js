console.log('____filter і find');
// у змінній evenNumbers був масив парних чисел із масиву numbers,
// а у змінній oddNumbers — масив непарних.
// Обов'язково використовуй метод filter().
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(evenNumbers); //[24, 82, 36, 18, 52]
console.log(oddNumbers); // [17, 61, 47, 73]
/* Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
Для перебирання масиву books використаний метод filter() */
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);
console.log(topRatedBooks);
console.log(booksByAuthor);
// Доповни функцію getUsersWithEyeColor(users, color)
// таким чином, щоб вона повертала масив користувачів,
//     у яких колір очей(властивість eyeColor)
//     збігається зі значенням другого параметра color.
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
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);
const usersEyesColor = getUsersWithEyeColor(users, 'green');
console.log(usersEyesColor); //користувачі з іменами Ross Vazquez і Elma Head
const usersEyesColor2 = getUsersWithEyeColor(users, 'blue');
console.log(usersEyesColor2); //користувачі з іменами Moore Hensley, Sharlene Bush і Carey Barr
const usersEyesColor3 = getUsersWithEyeColor(users, 'brown');
console.log(usersEyesColor3); //Blackburn Dotson і Sheree Anthony
const usersEyesColor4 = getUsersWithEyeColor(users, 'grey');
console.log(usersEyesColor4); //повертає порожній масив

//повернути масив користувачів, вік яких потрапляє у
//  діапазон від minAge до maxAge.
const users2 = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];
const getUsersWithAge = (users2, minAge, maxAge) =>
  users2.filter(user => user.age >= minAge && user.age <= maxAge);
const ageRange1 = getUsersWithAge(users2, 20, 30); //Ross Vazquez, Elma Head і Carey Barr
console.log(ageRange1);
const ageRange2 = getUsersWithAge(users2, 30, 40); //Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
console.log(ageRange2);
const ageRange3 = getUsersWithAge(users2, 80, 100); //повертає порожній масив
console.log(ageRange3);
// Значення змінної bookWithTitle - це об'єкт книги з назвою "The Dream of a Ridiculous Man"
// Значення змінної bookByAuthor - це об'єкт книги автора "Robert Sheckley"

const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR2 = 'Robert Sheckley';

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR2);
console.log(bookByAuthor);
console.log(bookWithTitle);

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);
const user1 = getUserWithEmail(users, 'shereeanthony@kog.com'); //Sheree Anthony
const user2 = getUserWithEmail(users, 'elmahead@omatom.com'); //Elma Head
const user3 = getUserWithEmail(users, 'test@kog.com'); //undefined
console.log(user1);
console.log(user2);
console.log(user3);
