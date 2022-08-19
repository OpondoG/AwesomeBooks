import { books } from '../index.js';

export default (e) => {
  const index = e.target.previousElementSibling.textContent.trim();
  const booksStored = JSON.parse(localStorage.getItem('books'));

  console.log(index);

  books.list = booksStored;
  books.removeItem(+index);
  localStorage.setItem('books', JSON.stringify(books.list));

  document.querySelector('.list').click();
};
