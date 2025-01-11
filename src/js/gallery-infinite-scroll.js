import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery } from './unsplash-api';

// https://unsplash.com/documentation

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const observeredEl = document.querySelector('.js-observered');

let page = 1;
let inputValue = '';

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 1,
};

const observerCallBack = async entries => {
  if (entries[0].isIntersecting) {
    try {
      page++;

      const response = await fetchPhotosByQuery(inputValue, page);

      galleryEl.insertAdjacentHTML('beforeend', createGalleryCardTemplate(response.data.results));

      if (page === response.data.total_pages) {
        observerInstance.unobserve(observeredEl);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

const observerInstance = new IntersectionObserver(observerCallBack, observerOptions);

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
      observerInstance.observe(observeredEl);
    }

    galleryEl.innerHTML = createGalleryCardTemplate(response.data.results);
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

// const onLoadMoreBtnClick = async event => {
//   try {
//     page++;

//     const response = await fetchPhotosByQuery(inputValue, page);

//     galleryEl.insertAdjacentHTML('beforeend', createGalleryCardTemplate(response.data.results));

//     scrollBy({
//       top: cardHeight * 2,
//       behavior: 'smooth',
//     });

//     if (page === response.data.total_pages) {
//       loadMoreBtnEl.classList.add('is-hidden');

//       loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
