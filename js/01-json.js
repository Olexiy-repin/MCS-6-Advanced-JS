/*
 * Формат JSON
 *
 * - Метод JSON.stringify(value)
 * - Метод JSON.parse(value)
 * - Перетворення функцій
 */

// const user = {
//   firstName: 'Jerry',
//   lastName: 'Smith',
//   age: 30,

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user);

// const jsonUser = JSON.stringify(user);

// console.log(jsonUser);

// const users = [
//   { firstName: 'Jerry', lastName: 'Smith', age: 30 },
//   { firstName: 'Jerry', lastName: 'Smith', age: 30 },
//   { firstName: 'Jerry', lastName: 'Smith', age: 30 },
// ];

// console.log(users);

// const jsonUsers = JSON.stringify(users);

// console.log(jsonUsers);

// console.log(JSON.parse(jsonUsers));

// const fn = () => {
//   console.log('Hello');
// };

// console.log(JSON.stringify(fn));

/*
 * Конструкція try...catch для обробки помилок
 */
// console.log('Start');

// try {
//   const user = '{ "firstName": "Oleksii", "lastName": "Repin", }';

//   console.log(JSON.parse(user));
// } catch (err) {
//   console.log(err);
// }

// console.log('End');
