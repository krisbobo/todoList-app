import { Store } from './index';

class addTasksToList {
  static addItemsToInterface() {
    const tasks = Store.getTask();
    const list = document.querySelector('.list-items');
    list.innerHTML = '';
    tasks.forEach((task) => {
      list.innerHTML = `
    <li class="list-info">
    <input type=“checkbox” name=“checkbox” id=“${task.index}” title=“Check” value="${task.description}" ${task.completed && 'checked'}>
    <input type="text" name="description" value="${task.description}" id="${task.index}" class="${task.completed ? 'line-through' : ''}">
    <i class="fa-solid fa-trash-can"></i>
    </li>
    `;
    });
  }

  static addToList(task) {
    const tasks = Store.getTask();
    tasks.push(task);
    Store.addTask(tasks);
  }

  static addEditedTaskToStore = (newDescription, index) => {
    const tasks = Store.getTask();
    tasks[index].description = newDescription;
    Store.addTask(tasks);
  };
}

export default addTasksToList;