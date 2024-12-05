/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isSuccess = Math.random() > 0.5;

//     if (isSuccess) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 1000);
// });

// console.log(promise);

// promise
//   .finally(() => {
//     console.log('Preloader stoped!');
//   })
//   .then(result => {
//     console.log(promise);

//     console.log(result);
//   })
//   .catch(errMessage => {
//     console.log(promise);

//     console.log(errMessage);
//   });

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// promise
//   .then(result => {
//     console.log(result);

//     return 'Hello!';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(errMessage => {
//     console.log(errMessage);
//   });

//? Чи можна "перевиконати" проміс?
// const promise = new Promise((resolve, reject) => {
//   resolve(1);

//   resolve(2);
// });

// promise.then(result => {
//   console.log(promise);

//   console.log(result);
// });

//? Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(promise);

//     console.log(error);
//   });
