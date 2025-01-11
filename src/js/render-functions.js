export const createGalleryCardTemplate = imgArr => {
  return imgArr.reduce((acc, el) => {
    return (
      acc +
      `
      <li class="gallery-card">
        <img class="gallery-img" src="${el.urls.regular}" alt="${el.alt_description}" />
      </li>
   `
    );
  }, '');
};
