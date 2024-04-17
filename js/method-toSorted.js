console.log('____toSorted');
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
];
const ascendingReleaseDates = releaseDates.toSorted();
const ascendingReleaseDates2 = releaseDates.toSorted((a, b) => a - b);
const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
const alphabeticalAuthors = authors.toSorted();
console.log(ascendingReleaseDates);
console.log(ascendingReleaseDates2); //Свій порядок сортування чисел
console.log(descendingReleaseDates); //Свій порядок сортування чисел
console.log(alphabeticalAuthors);
// !!!!!!!!!!!!!!
const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
const scores = [27, 2, 41, 4, 7, 3, 75];
console.log(letters);
console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]
console.log(scores);
console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

// ////

const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b)); //["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]

const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a)); //["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);
///////////
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
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    rating: 7.94,
  },
  {
    title: 'Enemy of God',
    author: 'Bernard Cornwell',
    rating: 8.67,
  },
];

const sortedByAuthorName = books.toSorted((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);

const sortedByReversedAuthorName = books.toSorted((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);

const sortedByAscendingRating = books.toSorted(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);

const sortedByDescantingRating = books.toSorted(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);
console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescantingRating);
//sortedByAuthorName  ім'ям автора в алфавітному порядку.
//sortedByReversedAuthorName за ім'ям автора у зворотному алфавітному порядку.
//sortedByAscendingRating відсортований за зростанням рейтингу.
//змінній sortedByDescentingRating  відсортований за спаданням рейтингу.

/* Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку

Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку

Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу

Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
 */
//
// Значення змінної names - це масив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
/* Змінна names повинна формуватися за допомогою ланцюжка методів
filter, map, toSorted, при цьому інші змінні не повинні оголошуватись */
const books2 = [
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
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books2
  .filter(book => book.rating >= MIN_BOOK_RATING)
  .map(books => books.author)
  .toSorted((firstBook, secondBBook) => firstBook.localeCompare(secondBBook));
console.log(names); //["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
