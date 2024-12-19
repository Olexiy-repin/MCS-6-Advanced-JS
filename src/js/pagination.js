// https://jsonplaceholder.typicode.com/
import { fetchPosts } from './jsonPlaceholder-api';
import { createPostCardsTemplate } from './render-functions';

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let page = 1;

const renderPosts = async () => {
  try {
    const { data: postsArr } = await fetchPosts(page);

    postsListEl.innerHTML = createPostCardsTemplate(postsArr);

    loadMoreBtnEl.classList.remove('is-hidden');

    loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
  } catch (err) {
    console.log(err);
  }
};

renderPosts();

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const { data: postsArr } = await fetchPosts(page);

    if (postsArr.length === 0) {
      loadMoreBtnEl.classList.add('is-hidden');

      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);

      return;
    }

    postsListEl.insertAdjacentHTML('beforeend', createPostCardsTemplate(postsArr));
  } catch (err) {
    console.log(err);
  }
};
