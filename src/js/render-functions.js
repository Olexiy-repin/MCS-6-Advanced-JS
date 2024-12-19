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

export const createPostCardsTemplate = postsArr => {
  return postsArr.reduce((acc, post) => {
    return (
      acc +
      `
  <li class="posts-item">
    <h2 class="posts-title">${post.title}</h2>
    <p class="posts-text">${post.body}</p>
    <p class="posts-id">id: ${post.id}</p>
  </li> 
  `
    );
  }, '');
};
