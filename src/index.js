/* eslint-disable import/extensions */
import './style.css';
import removeItem from './modules/remove_from_list';
import addTasksToList from './modules/add_to_list';
import Store from './modules/storage';

// ========== Event Listener to display items ===========
document.addEventListener('DOMContentLoaded', addTasksToList.addItemsToInterface);

// ========== Event Listener to add item to list ==========
const form = document.querySelector('.add-form');
const listInput = document.getElementById('add-to-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const index = Store.getTask().length ? Store.getTask()[Store.getTask().length - 1].index + 1 : 0;
  const item = { description: listInput.value, completed: false, index };
  addTasksToList.addToList(item);
  addTasksToList.addItemsToInterface();
  form.reset();
});

// ======= Event to remove Item from List ========
const listItems = document.querySelector('.list-items');
listItems.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    removeItem.removeFromList(e.target);
    removeItem.changeIndex();
  }
});

// ======== Event To Add Edited Description To Store ========
listItems.addEventListener('input', (e) => {
  const items = Store.getTask();
  if (e.target.name === 'description') {
    let itemIndex;
    items.filter((item, index) => {
      if (item.index === parseInt(e.target.id, 10)) {
        itemIndex = index;
        return item.index === parseInt(e.target.id, 10);
      }
      return null;
    });
    addTasksToList.addEditedTaskToStore(e.target.value, itemIndex);
  }
});