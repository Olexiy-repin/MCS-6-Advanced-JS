//* Створення нової дати
// const date = new Date('2024-12-04T12:30:00');

// console.dir(date);

//? Створіть об'єкт date для дати: 10 вересня 2022 року, 3 години 12 хвилин.
// const date1 = new Date('2022-09-10T03:12:00');
// const date2 = new Date(2022, 8, 10, 3, 12);

// console.log(date1);
// console.log(date2);

/*
? Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
? 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'.
*/
// const getWeekDay = date => {
//   const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return days[date.getDay()];
// };

// console.log(getWeekDay(new Date('2023-09-18')));

/*
? Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
? Параметри:
? year – рік з чотирьох цифр, наприклад, 2012.
? month – місяць від 0 до 11.
? Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).
*/
// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2012, 1));

//? Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.
// const getSecondsToTomorrow = () => {
//   const nowDate = new Date();
//   const tomorrowDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1);

//   const diff = tomorrowDate - nowDate;

//   return diff / 1000;
// };

// console.log(getSecondsToTomorrow());
