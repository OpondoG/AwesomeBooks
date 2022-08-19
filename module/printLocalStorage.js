export default (books) => {
  if (books && books.length) {
    for (let i = 0, len = books.length; i < len; i += 1) {
      const book = document.createElement('ul');
      book.className = 'book-menu border-bottom';
      book.innerHTML = `<li class="book-name list-group-item">${books[i].title}</li>
            <li class="author-name list-group-item">${books[i].author}</li>
            <li class="index d-none author-name list-group-item">${i}</li>
            <button type="button" class="remove btn btn-outline-primary">Remove</button>`;
      document.querySelector('.book-details').appendChild(book);
    }
  }
};
