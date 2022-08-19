// ONCLICK LIST MENU
const addListmenu = (event) => {
  event.preventDefault();
  document.querySelector('.add-div').style.display = 'none';
  document.querySelector('.books-div').style.display = 'block';
  document.querySelector('.contact-div').style.display = 'none';
  document.querySelector('.book-details').style.height = '500px';
};

// ONCLICK OF Add new MENU
const addForm = (event) => {
  event.preventDefault();
  document.querySelector('.books-div').style.display = 'none';
  document.querySelector('.add-div').style.display = 'block';
  document.querySelector('.contact-div').style.display = 'none';
  document.querySelector('.add-div').style.height = '604px';
};

// ONCLICK OF Contact MENU
const contact = (event) => {
  event.preventDefault();
  document.querySelector('.books-div').style.display = 'none';
  document.querySelector('.add-div').style.display = 'none';
  document.querySelector('.contact-div').style.display = 'block';
  document.querySelector('.contact-div').style.height = '604px';
};
/* eslint-disable */
export { addListmenu, addForm, contact };
/* eslint-enable */