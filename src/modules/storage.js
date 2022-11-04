export default class Store {
  static getTask() {
    let userInput;
    if (localStorage.getItem('userInput') === null) {
      userInput = [];
    } else {
      userInput = JSON.parse(localStorage.getItem('userInput'));
    }
    return userInput;
  }

  static addTask(task) {
    const userInput = Store.getTask();
    userInput.push(task);
    localStorage.setItem('userInput', JSON.stringify(userInput));
  }

  static removeTask(del) {
    const userInput = Store.getTask();
    userInput.forEach((task, index) => {
      if (task.del === del) {
        userInput.filter(this.getTask(JSON.parse(localStorage.getItem('userInput')), index));
      }
    });
    localStorage.setItem('userInput', JSON.stringify(userInput));
  }
}