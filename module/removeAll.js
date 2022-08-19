import books from './book.js';

export default () => {
  localStorage.removeItem('books');
  books.list = [];
  books.display();

  document.querySelector('.book-details *').remove();

  document.querySelector('.list').click();
};
