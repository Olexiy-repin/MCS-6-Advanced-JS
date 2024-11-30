/* Gallery Card Template
  <li class="gallery__item">
    <a class="gallery__link" href="" >
      <img src="" alt="" width="" height="" />
    </a>
  </li>
*/

export const createGalleryCardsTemplate = picturesArr => {
  return picturesArr.reduce((acc, pictureInfo) => {
    return (
      acc +
      `
      <li class="gallery__item">
        <a class="gallery__link" href="${pictureInfo.bannerUrl}" >
          <img src="${pictureInfo.url}" alt="${pictureInfo.alt}" width="${pictureInfo.width}" height="${pictureInfo.height}" />
        </a>
      </li>
    `
    );
  }, '');
};
