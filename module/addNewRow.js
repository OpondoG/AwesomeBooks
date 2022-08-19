import books from './book.js';

export default () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  books.add(title, author);
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify(books.list));

    document.querySelector('.list').click();
  } else {
    localStorage.setItem('books', JSON.stringify(books.list));

    document.querySelector('.list').click();
  }
};
