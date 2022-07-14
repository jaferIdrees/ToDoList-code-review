//import _ from 'lodash';
//import './style.css';
import { addTask,  } from './pageFunc.js';
import {  clearAllCompleted } from './status.js';
import { addTaskToPage } from './addTaskToPage.js';
import activateDrag from './drag.js';

let tasks = [
]

const updateList = (tasks) => {
  for (let task of tasks) {
    addTaskToPage(task);
  }
}

document.getElementById('addItem').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addTaskToPage(addTask(tasks, e.target.value));
    e.target.value = '';
    activateDrag();
  }
})

document.getElementById('clrCompleted').onclick = clearAllCompleted;
window.addEventListener('load', () => {
  if (localStorage.getItem('ToDoTasks')) tasks = JSON.parse(localStorage.getItem('ToDoTasks'));
  updateList(tasks);
  document.getElementById('addItem').focus();
  activateDrag();
});
