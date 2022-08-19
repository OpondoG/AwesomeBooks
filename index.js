import { DateTime } from './module/luxon.js';
import { deleteRow } from './module/deleteRow.js';
import { addnewRow } from './module/addNewRow.js';
import { removeAll } from './module/removeAll.js';
import { printLocalStorage } from './module/printLocalStorage.js';
import { addForm, addListmenu, contact } from './module/desktopVersion.js';

const currentdate = DateTime.now().toRFC2822();
document.querySelector('.date').innerHTML = currentdate;

printLocalStorage();

document.getElementById('add').addEventListener('click', addnewRow);

document.querySelectorAll('.remove').forEach((removeButton) => {
  removeButton.addEventListener('click', deleteRow);
});

document.querySelector('#removeAll').addEventListener('click', removeAll);

document.querySelector('.list').addEventListener('click', addListmenu);

document.querySelector('.add-new').addEventListener('click', addForm);

document.querySelector('.contact').addEventListener('click', contact);