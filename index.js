import { DateTime } from './module/luxon.js';
import deleteRow from './module/deleteRow.js';
import addnewRow from './module/addNewRow.js';
import removeAll from './module/removeAll.js';
import printLocalStorage from './module/printLocalStorage.js';
import { addForm, addListmenu, contact } from './module/desktopVersion.js';
import Books from './module/book.js';

export const books = new Books();

const currentdate = DateTime.now().toRFC2822();
document.querySelector('.date').innerHTML = currentdate;

printLocalStorage(JSON.parse(localStorage.getItem('books')));

document.getElementById('add').addEventListener('click', addnewRow);

document.querySelector('.book-details').addEventListener('click', (e) => {
  const { target } = e;

  if (!target.classList.contains('remove') || target.tagName !== 'BUTTON')
    return;

  deleteRow(e);
});

document.querySelector('#removeAll').addEventListener('click', removeAll);

document.querySelector('.list').addEventListener('click', addListmenu);

document.querySelector('.add-new').addEventListener('click', addForm);

document.querySelector('.contact').addEventListener('click', contact);
