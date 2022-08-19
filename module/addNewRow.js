import { Books } from './book.js';

const addnewRow = () => {
    const books = new Books();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const storedBooksList = JSON.parse(localStorage.getItem('books'));
    books.add(title, author);
    if (localStorage.getItem('books') === null) {
        localStorage.setItem('books', JSON.stringify(books.list));

        location.reload();

    } else {
        const newList = storedBooksList.concat(books.list);
        localStorage.setItem('books', JSON.stringify(newList));

        location.reload();

    }
};

export { addnewRow };