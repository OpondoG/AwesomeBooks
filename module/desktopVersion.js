const addListmenu = (event) => {
    event.preventDefault();
    document.querySelector('.add-div').style.display = 'none';
    document.querySelector('.books-div').style.display = 'block';
    document.querySelector('.contact-div').style.display = 'none';
    document.querySelector('.book-details').style.height = '500px';
};


const addForm = (event) => {
    event.preventDefault();
    document.querySelector('.books-div').style.display = 'none';
    document.querySelector('.add-div').style.display = 'block';
    document.querySelector('.contact-div').style.display = 'none';
    document.querySelector('.add-div').style.height = '604px';
};


const contact = (event) => {
    event.preventDefault();
    document.querySelector('.books-div').style.display = 'none';
    document.querySelector('.add-div').style.display = 'none';
    document.querySelector('.contact-div').style.display = 'block';
    document.querySelector('.contact-div').style.height = '604px';
};

export { addListmenu, addForm, contact };