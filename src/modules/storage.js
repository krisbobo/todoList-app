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
}