/*
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response);

    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    if (err.message === '404') {
      alert('Ресурс не знайдено!');
    }
  });