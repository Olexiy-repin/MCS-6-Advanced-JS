/*
 * Скалярні типи:
 * - boolean
 * - number
 * - string
 * - null and undefined
 *
 * Складні типи:
 * - object
 * - array
 */

//* Скалярні типи для змінних:
// let isOpen: boolean = true;
// let pricePerItem: number = 3000;
// let username: string = 'Oleksii';
// let empty: null = null;
// let notValue: undefined = undefined;

//* Типізація параметрів функції:
// function showMessage(firstName: string, lastName: string, age: number) {
//   console.log(`${firstName} ${lastName} is ${age} years old.`);
// }

// showMessage('Garrett', 'Walton', 30);

//* Складні типи:
//* object

// type Book = { title: string; description: string; rating: number };

// function showBookInfo(book: Book) {
//   console.group('Book info:');
//   console.log(`Title: ${book.title}`);
//   console.log(`Description: ${book.description}`);
//   console.log(`Rating: ${book.rating}`);
//   console.groupEnd();
// }

// const bookJS = {
//   title: 'JS',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//   rating: 9,
// };

// showBookInfo(bookJS);

// const bookHTML = {
//   title: 'HTML',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//   rating: 8.5,
// };

// showBookInfo(bookHTML);

//* array
// const temperature: number[] = [10, 15, 12.5, 13];

// const property: (string | number)[] = ['rating', 10];

// type Book = { title: string; description: string; rating: number };

// const books = [
//   {
//     title: 'JS',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 9,
//   },
//   {
//     title: 'HTML',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 8.5,
//   },
//   {
//     title: 'CSS',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 9,
//   },
// ];

// function getBooksTitles(books: Book[]) {
//   return books.map(book => book.title);
// }

// console.log(getBooksTitles(books));
