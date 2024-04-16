console.log('____map і flatMap');
/* Функція changeEven(numbers, value) приймає масив чисел numbers 
і оновлює кожен елемент, значення якого - це парне число, 
додаючи до нього значення параметра value.

Виконай рефакторинг функції таким чином, щоб вона 
не змінювала масив чисел numbers, а створювала, 
наповнювала і повертала новий масив з оновленими значеннями.
 */
function changeEven(numbers, value) {
  const newArr = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArr.push(numbers[i] + value);
    } else newArr.push(numbers[i]);
  }
  return newArr;
}
console.log(changeEven([1, 2, 3, 4, 5], 10)); //повертає новий масив [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // повертає новий масив [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); // повертає новий масив [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // повертає новий масив [144, 13, 81, 192, 136, 154]

// array.method(callback(currentValue, index, array));

/*  Доповни код таким чином, щоб у змінній planetsLengths вийшов масив,
    що буде складатися з довжин назв кожної планети з масиву planets.
        Обов'язково використовуй метод map(). */
const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const planetsLengths = planets.map(planet => planet.length);

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
console.log(planetsLengths); // це масив [5, 4, 5, 7]
console.log(planets); // залишився без змін

/* 
Масив books містить колекцію об'єктів книг, 
кожен з яких містить властивості title, author, rating.
Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв
 усіх книг(властивість title) з масиву books. */
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
    genres: ['fiction'],
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    rating: 7.94,
    genres: ['horror', 'mysticism'],
  },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const titles = books.map(book => book.title);
console.log(titles);

const genresMap = books.map(book => book.genres);
console.log(genresMap); // повертає окремі масиви
const genres = books.flatMap(book => book.genres);
console.log(genres);

/* Повернути  масив поштових адрес користувачів(властивість email) 
    з масиву об'єктів в параметрі users. */
const usersArray = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
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
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
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
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
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
    skills: ['adipisicing', 'irure', 'velit'],
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
    skills: ['ex', 'culpa', 'nostrud'],
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
    skills: ['non', 'amet', 'ipsum'],
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
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
const getUserEmails = usersArray => usersArray.map(user => user.email);
const userEmails = getUserEmails(usersArray);
console.log(userEmails);
/* 
повертає масив
["moorehensley@indexia.com", "sharlenebush@tubesys.com",
    "rossvazquez@xinware.com", "elmahead@omatom.com",
    "careybarr@nurali.com", "blackburndotson@furnigeer.com",
    "shereeanthony@kog.com"] */
