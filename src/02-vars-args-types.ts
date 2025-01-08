/*
 * Типи для змінних та аргументів
 *
 * Any
 * Unknown
 * Tuple
 * Enum
 * Union Type
 * Intersection Type
 * Literal Type
 */

//* Any
// let someValue;

// function greetUser(message, firstName) {
//   console.log(`${message} ${firstName}`);
// }

// greetUser('Welcome', 'Nora');

//* Unknown
// let someValue = ' Hello World! ';

/*
? Реалізуйте функцію isPlainObject(value), яка перевіряє, чи є передане значення об'єктом.
*/

// function isPlainObject(value) {}

// console.log(isPlainObject(1)); // false
// console.log(isPlainObject('hello')); // false
// console.log(isPlainObject({})); // true
// console.log(isPlainObject({ username: 'mango' })); // true
// console.log(isPlainObject([1, 8])); // false

//* Tuple
// const date = [12, 10, 2000];

// const coordinates = [10, 20];

/*
? Створіть тип Point, який описує кортеж, що складається з трьох координат: x, y, z.
?
? Реалізуйте функцію isTheSamePoint(firstPoint, secondPoint), яка перевіряє дві точки на їхнє однакове розташування.
? Дві точки збігаються, якщо збігаються всі їхні координати:
*/

// const p1 = [1, 3, 4];
// const p2 = [1, 3, 4];
// const p3 = [0, 8, 4];

// function isTheSamePoint(firstPoint, secondPoint) {}

// console.log(isTheSamePoint(p1, p2)); // true
// console.log(isTheSamePoint(p1, p3)); // false
// console.log(isTheSamePoint(p2, p3)); // false

//* Enum
// enum CardinalDirection {
//   North,
//   South,
//   East,
//   West,
// }

// console.log(CardinalDirection);

/*
? Реалізуйте enum ModalStatus із двома значеннями: Opened та Closed
?
? Реалізуйте функцію buildModal(text, status). Вона повертає об'єкт, що описує модальне вікно.
? Параметри функції:
? - text (текст, який має бути всередині вікна після ініціалізації);
? - status (статус, з яким потрібно створити об'єкт вікна).
?
? Функція повертає об'єкт із двома полями: text (тут зберігається переданий текст) та status (тут зберігається переданий статус)
*/

// function buildModal(text, status) {}

// console.log(buildModal('Some text for modal', ModalStatus.Closed));

//* Union Type
// let numOrStr;

// numOrStr = 10;
// numOrStr = 'Hello';

/*
? Реалізуйте функцію lastIndex(str, char), яка повертає індекс останнього входження символу в рядок або null,
? якщо такого символу немає. Метод lastIndexOf();
*/

// function lastIndex(str, char) {}

// const result1 = lastIndex('test', 't');
// const result2 = lastIndex('test', 'p');

// console.log(result1); // 3
// console.log(result2); // null

//* Intersection Type

/*
? Реалізуйте тип Admin, який є перетином типів AdminPermission та User.
? Реалізуйте функцію addAdmin(user), яка приймає значення з типом User і повертає значення з типом Admin.
? Як значення властивості permission повинно бути значення Permission.READ.
*/

// enum Permission {
//   READ,
//   WRITE,
//   DELETE,
// }

// type User = {
//   login: string;
// };

// type AdminPermission = {
//   permission: Permission;
// };

// const user = { login: 'login1' };

// const admin = addAdmin(user);

// console.log(admin);

//* Literal Type
/*
? Опишіть літеральний тип для змінної orderStatus, яка може містити тільки такі значення:
? 'Created', 'Paid', 'Shipped', 'Delivered';
*/

// let orderStatus = 'Created';
