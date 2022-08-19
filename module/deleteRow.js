import books from './book.js';

export default (e) => {
  const index = e.target.previousElementSibling.textContent.trim();
  const booksStored = JSON.parse(localStorage.getItem('books'));

  books.list = booksStored;
  books.removeItem(+index);
  localStorage.setItem('books', JSON.stringify(books.list));

  document.querySelector('.list').click();
};
