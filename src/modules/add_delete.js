import Store from './storage';
import Task from './task';

class View {
  static displayTasks() {
    const newTasks = Store.getTask();
    newTasks.forEach((tasks) => View.taskList(tasks));
  }

  static taskList(tasks) {
    const list = document.querySelector('.list-items');
    const element = document.createElement('li');
    element.classList.add('list-info');
    element.innerHTML = `
    <input type=“checkbox” name=“${tasks.index}” id=“${tasks.index}” title=“Check”>
    <label for=“${tasks.index}” contentEditable=“true”>${tasks.description}</label>
    <i class=“icon material-icons”>more_vert</i>
    `;
    list.appendChild(element);
  }

  static deleteTask(target) {
    if (target.classList.contains('icon')) {
      target.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#add-to-list').value = '';
  }
}

const events = () => {
  document.addEventListener('DOMContentLoaded', View.displayTasks);

  document.querySelector('.add-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const task = document.getElementById('add-to-list').value;
    if (task !== 0) {
      const tasks = new Task(task, this.completed, this.index);
      View.taskList(tasks);
      Store.addTask(tasks);
    }
    View.clearFields();
  });

  document.querySelector('.list-items').addEventListener('click', (e) => {
    View.deleteTask(e.target);
    Store.removeTask();
  });
};

export default events;