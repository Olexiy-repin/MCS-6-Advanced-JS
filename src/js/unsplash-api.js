import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotosByQuery = searchedQuery => {
  const requestParams = {
    query: searchedQuery,
    client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
  };

  return axios.get(`/search/photos`, { params: requestParams });
};
