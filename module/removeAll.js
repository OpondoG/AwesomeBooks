const removeAll = () => {
  localStorage.removeItem('books');
  /* eslint-disable */
  location.reload();
  /* eslint-enable */
};
/* eslint-disable */
export { removeAll };
/* eslint-enable */
