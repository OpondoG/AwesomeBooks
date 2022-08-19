import printLocalStorage from './printLocalStorage.js';

class Book {
  constructor(title, author, index) {
    this.title = title;
    this.author = author;
    this.index = index;
  }
}

export default class Books {
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
