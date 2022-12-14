import { Store } from './index';

class AddItemsToList {
  static addListItemsToInterface = () => {
    const tasks = Store.getItems();
    const listItems = document.querySelector('.list-items');
    listItems.innerHTML = '';
    tasks.forEach((task) => {
      listItems.innerHTML += `
        <li class="list-info">
          <input
            type="checkbox"
            name="checkbox"
            id="${task.index}"
            title="Check"
            value="${task.description}"
            ${task.completed && 'checked'}
          >
          <input type="text" name="description" value="${task.description}" id="${
        task.index
      }" class="${task.completed ? 'line-through' : ''}">
          <i class="fa-solid fa-trash-can"></i>
        </li>
    `;
    });
  };

  static addItemToList = (task) => {
    const tasks = Store.getItems();
    tasks.push(task);
    Store.setItems(tasks);
  };

  static addEditedTaskToStore = (newDescription, index) => {
    const tasks = Store.getItems();
    tasks[index].description = newDescription;
    Store.setItems(tasks);
  };
}

export default AddItemsToList;