import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery } from './unsplash-api';
import Pagination from 'tui-pagination';

// https://unsplash.com/documentation

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const pagePaginationContainerEl = document.querySelector('.js-tui-pagination');

let page = 1;
let inputValue = '';

const loadMorePhotos = async ({ page: currentPage }) => {
  try {
    page = currentPage;

    const response = await fetchPhotosByQuery(inputValue, page);

    galleryEl.innerHTML = createGalleryCardTemplate(response.data.results);
  } catch (err) {
    console.log(err);
  }
};

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    inputValue = event.currentTarget.elements.user_query.value.trim();

    if (inputValue === '') {
      alert('Інпут має бути обовʼязково заповненим!');

      return;
    }

    page = 1;

    const response = await fetchPhotosByQuery(inputValue, page);

    if (response.data.total === 0) {
      alert(`За таким запитом ${inputValue} зображень не знайдено!`);

      galleryEl.innerHTML = '';
      searchFormEl.reset();

      return;
    }

    if (response.data.total_pages > 1) {
      const paginationOptions = {
        totalItems: response.data.total,
        itemsPerPage: 10,
        visiblePages: 5,
        page: 1,
      };

      const paginationInstance = new Pagination(pagePaginationContainerEl, paginationOptions);

      paginationInstance.on('beforeMove', loadMorePhotos);
    }

    galleryEl.innerHTML = createGalleryCardTemplate(response.data.results);
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
