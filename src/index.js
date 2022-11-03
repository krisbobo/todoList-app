import _ from 'lodash';
import './style.css';

const tasks = [
  {
    description: 'Commit to GitHub',
    completed: false,
    index: 0,
  },
  {
    description: 'Solve a challenge on hackerrank',
    completed: true,
    index: 1,
  },
  {
    description: 'Read a novel',
    completed: false,
    index: 2,
  },
  {
    description: 'Watch a movie',
    completed: false,
    index: 3,
  },
];

const info = () => {
  const taskContent = document.querySelector('.list-items');
  for (let i = 0; i < tasks.length; i++) {
    const element = document.createElement('li');
    element.classList.add('list-info');
    element.innerHTML = `
    <input type="checkbox" name="${tasks.index}" id="${tasks.index}" title="Check">
    <label for="${tasks.index}" contentEditable="true">${tasks[i].description}</label>
    <i class="material-icons">more_vert</i>
    `;
    taskContent.appendChild(element);
  }
};

info();