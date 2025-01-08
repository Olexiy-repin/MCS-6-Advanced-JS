/*
 * Return Type
 * Void
 * Never
 * Function Type
 * Optional parameters
 */

//* Return Type

/*
? Реалізуйте функцію getBooksTitles(books),
? яка буде приймати до параметру books масив книг,
? а повертати буде масив із назвами книг.
*/
// type Book = {
//   title: string;
//   description: string;
//   rating: number;
// };

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

// const getBooksTitles = function (books) {};

// console.log(getBooksTitles(books));

//* Void

// function greet(firstName, lastName) {
//   console.log(`Welcome ${firstName} ${lastName}`);
// }

// greet('Jorge', 'Moran');

//* Never

// function generateError(message: string) {
//   throw new Error(message);
// }

// try {
//   generateError('error');
// } catch (err) {
//   console.log(err);
// }

//* Function Type
// type NumbersMapCB = (el: number, i: number, arr: number[]) => number;

// function numbersMap(items: number[], cb: NumbersMapCB): number[] {
//   const newArr: number[] = [];

//   for (let i = 0; i < items.length; i++) {
//     newArr.push(cb(items[i], i, items));
//   }

//   return newArr;
// }

// const result = numbersMap([1, 2, 3, 4], (el, idx, arr) => {
//   return el * 2;
// });

// console.log(result);

//* Optional parameters
// const greetUser = (firstName, lastName) => {};

// greetUser();
// greetUser('Oleksii');
// greetUser('Oleksii', 'Repin');
