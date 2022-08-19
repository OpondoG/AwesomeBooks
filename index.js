import { DateTime } from './module/luxon.js';
import { deleteRow } from './module/deleteRow.js';
import { addnewRow } from './module/addNewRow.js';
import { removeAll } from './module/removeAll.js';
import { printLocalStorage } from './module/printLocalStorage.js';
import { addForm, addListmenu, contact } from './module/desktopVersion.js';

// PRINTING THE CURRENT DATE
const currentdate = (DateTime.now().toRFC2822());
document.querySelector('.date').innerHTML = currentdate;

// PRINTING THE LOCAL STORAGE
printLocalStorage();

// ADD NEW BOOK.
document.getElementById('add').addEventListener('click', addnewRow);

// DELETE THE CURRENT ROW OF THE DATDABASE.
document.querySelectorAll('.remove').forEach((removeButton) => {
    removeButton.addEventListener('click', deleteRow);
});

// REMOVING THE WHOLE LIST
document.querySelector('#removeAll').addEventListener('click', removeAll);

// ONCLICK OF List MENU
document.querySelector('.list').addEventListener('click', addListmenu);

// ONCLICK OF Add new MENU
document.querySelector('.add-new').addEventListener('click', addForm);

// ONCLICK OF Contact MENU
document.querySelector('.contact').addEventListener('click', contact);