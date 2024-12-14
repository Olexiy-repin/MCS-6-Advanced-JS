export const fetchPhotosByQuery = searchedQuery => {
  return fetch(
    `https://api.unsplash.com/search/photos?query=${searchedQuery}&client_id=N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
