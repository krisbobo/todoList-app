import Store from './storage';
import addTasksToList from './add_to_list';

class removeItem {
  static removeFromList = (itemList) => {
    itemList.parentElement.remove();
    const tasks = Store.getTask();
    const newTasks = tasks.filter(
      (item) => parseInt(itemList.previousElementSibling.id, 10) !== item.index,
    );
    Store.addTask(newTasks);
  }

  static changeIndex = () => {
    const tasks = Store.getTask();
    const newTasks = tasks.map((task, index) => {
      task.index = index;
      return task;
    });
    Store.addTask(newTasks);
    addTasksToList.addItemsToInterface();
  };
}

export default removeItem;