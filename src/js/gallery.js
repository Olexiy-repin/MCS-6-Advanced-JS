import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery } from './unsplash-api';

// https://unsplash.com/documentation

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let page = 1;
let inputValue = '';

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    inputValue = event.currentTarget.elements.user_query.value.trim();

    if (inputValue === '') {
      alert('Інпут має бути обовʼязково заповненим!');

      return;
    }

    page = 1;

    loadMoreBtnEl.classList.add('is-hidden');

    const response = await fetchPhotosByQuery(inputValue, page);

    if (response.data.total === 0) {
      alert(`За таким запитом ${inputValue} зображень не знайдено!`);

      galleryEl.innerHTML = '';
      searchFormEl.reset();

      return;
    }

    if (response.data.total_pages > 1) {
      loadMoreBtnEl.classList.remove('is-hidden');

      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
    }

    galleryEl.innerHTML = createGalleryCardTemplate(response.data.results);
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const response = await fetchPhotosByQuery(inputValue, page);

    galleryEl.insertAdjacentHTML('beforeend', createGalleryCardTemplate(response.data.results));

    if (page === response.data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');

      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (err) {
    console.log(err);
  }
};
