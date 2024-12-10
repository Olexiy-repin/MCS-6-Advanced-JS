// https://unsplash.com/documentation
// N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const createGalleryCardTemplate = imgInfo => {
  /*
    <li class="gallery-card">
      <img class="gallery-img" src="" alt="" />
    </li>
  */
  return `
    <li class="gallery-card">
      <img class="gallery-img" src="${imgInfo.urls.regular}" alt="${imgInfo.alt_description}" />
    </li>
 `;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const inputValue = event.currentTarget.elements.user_query.value.trim();

  if (inputValue === '') {
    alert('Інпут має бути обовʼязково заповненим!');

    return;
  }

  fetch(
    `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      if (data.total === 0) {
        alert(`За таким запитом ${inputValue} зображень не знайдено!`);

        galleryEl.innerHTML = '';

        return;
      }

      const galleryCardsTemplate = data.results.map(el => createGalleryCardTemplate(el)).join('');

      galleryEl.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
