const removeAll = () => {
  localStorage.removeItem('books');

  window.location.reload();
};

export default { removeAll };