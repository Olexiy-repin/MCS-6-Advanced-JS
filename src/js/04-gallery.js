import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery } from './unsplash-api';

// https://unsplash.com/documentation

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    const inputValue = event.currentTarget.elements.user_query.value.trim();

    if (inputValue === '') {
      alert('Інпут має бути обовʼязково заповненим!');

      return;
    }

    const response = await fetchPhotosByQuery(inputValue);

    if (response.data.total === 0) {
      alert(`За таким запитом ${inputValue} зображень не знайдено!`);

      galleryEl.innerHTML = '';

      return;
    }

    galleryEl.innerHTML = createGalleryCardTemplate(response.data.results);
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
