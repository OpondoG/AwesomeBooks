const printLocalStorage = () => {
    if (localStorage.getItem('books') != null) {
        const storedBooksList = JSON.parse(localStorage.getItem('books'));

        for (let i = 0; i < storedBooksList.length; i++) {
            const book = document.createElement('ul');
            book.className = 'book-menu border-bottom';
            book.innerHTML = `<li class="book-name list-group-item">${storedBooksList[i].title}</li>
            <li class="author-name list-group-item">${storedBooksList[i].author}</li>
            <li class="index d-none author-name list-group-item">${i}</li>
            <button type="button" class="remove btn btn-outline-primary">Remove</button>`;
            document.querySelector('.book-details').appendChild(book);
        }
    }
};

export { printLocalStorage };