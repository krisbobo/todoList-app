import Store from './storage';

class addTasksToList {
  static addItemsToInterface() {
    const tasks = Store.getTask();
    const list = document.querySelector('.list-items');
    const element = document.createElement('li');
    element.classList.add('list-info');
    tasks.forEach((task) => {
      element.innerHTML = `
    <input type=“checkbox” name=“checkbox” id=“${task.index}” title=“Check” value="${task.description}" ${task.completed && 'checked'}>
    <label id=“${task.index}” contentEditable=“true”>${task.description}</label>
    <i class=“icon material-icons”>more_vert</i>
    `;
      list.appendChild(element);
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