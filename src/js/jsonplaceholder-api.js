import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = page => {
  const requestParams = {
    _page: page,
    _limit: 20,
  };

  return axios.get('/posts', { params: requestParams });
};
