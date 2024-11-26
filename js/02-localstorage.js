/*
 * LocalStorage
 */

/*
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// localStorage.setItem('test', 'Hello world!');

// const user = {
//   firstName: 'Bill',
//   lastName: 'Holland',
//   age: 30,
// };

// localStorage.setItem('user-info', JSON.stringify(user));

/*
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// console.log(localStorage.getItem('test'));

// const userFromLS = JSON.parse(localStorage.getItem('user-info'));

// console.log(userFromLS);

/*
 * Видалення
 */

// localStorage.removeItem('test');
// localStorage.removeItem('user-info');

// localStorage.clear();

/*
 * LocalStorage не може зберігати функції
 */
// const fn = () => {};

// localStorage.setItem('function', JSON.stringify(fn));
