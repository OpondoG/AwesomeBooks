import printLocalStorage from './printLocalStorage.js';
import Book from './b.js';

class Books {
  constructor() {
    this.list = [];
  }

  add(title, author) {
    if (Array.isArray(this.list)) {
      this.list.push(new Book(title, author));
    }

    this.display();
  }

  removeItem(index) {
    if (Array.isArray(this.list)) {
      const array = this.list;
      array.splice(index, 1);
    }

    this.display();
  }

  display() {
    const list = document.querySelector('.book-details');

    list.innerHTML = '';

    printLocalStorage(this.list);
  }
}

export default new Books();
