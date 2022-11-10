/* eslint-disable import/extensions */
import './style.css';
import {
  AddItemsToList, Store, RemoveItemFromList, UpdateStatus,
} from './modules/index';

// ========== Event Listener to display items ===========
document.addEventListener('DOMContentLoaded', AddItemsToList.addListItemsToInterface);

// ========== Event Listener to add item to list ==========
const form = document.querySelector('.add-form');
const listInput = document.getElementById('add-to-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const index = Store.getItems().length + 1;
  const item = { description: listInput.value, completed: false, index };
  AddItemsToList.addItemToList(item);
  AddItemsToList.addListItemsToInterface();
  form.reset();
});

// ======= Event to remove Item from List ========
const listItems = document.querySelector('.list-items');
listItems.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    RemoveItemFromList.removeItemFromList(e.target);
    RemoveItemFromList.changeTaskIndex();
  }
});

// ======== Event To Add Edited Description To Store ========
listItems.addEventListener('input', (e) => {
  const items = Store.getItems();
  if (e.target.name === 'description') {
    let itemIndex;
    items.filter((item, index) => {
      if (item.index === parseInt(e.target.id, 10)) {
        itemIndex = index;
        return item.index === parseInt(e.target.id, 10);
      }
      return null;
    });
    AddItemsToList.addEditedTaskToStore(e.target.value, itemIndex);
  }
});

// ========= Event to toggle task completion ===========
listItems.addEventListener('change', (event) => {
  if (event.target.name === 'checkbox') {
    if (event.target.checked) {
      event.target.nextElementSibling.classList.add('line-through');
      UpdateStatus.updateTaskToCompleted(event.target);
    } else {
      event.target.nextElementSibling.classList.remove('line-through');
      UpdateStatus.updateTaskToCompleted(event.target);
    }
  }
});