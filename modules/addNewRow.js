import { Books } from './book.js';

const addnewRow = () => {
  const books = new Books();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const storedBooksList = JSON.parse(localStorage.getItem('books'));
  books.add(title, author);
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify(books.list));
    /* eslint-disable */
      location.reload();
      /* eslint-enable */
  } else {
    const newList = storedBooksList.concat(books.list);
    localStorage.setItem('books', JSON.stringify(newList));
    /* eslint-disable */
      location.reload();
      /* eslint-enable */
  }
};
/* eslint-disable */
export { addnewRow };
/* eslint-enable */