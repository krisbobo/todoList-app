import events from './add_delete';

const taskToEdit = document.getElementsByTagName('label');
for (let i = 0; i < taskToEdit.length; i += 1) {
  const element = taskToEdit[i];
  element.addEventListener('click', (e) => {
    const clickedElement = e.target;
    events(clickedElement);
  });
}
export default taskToEdit;