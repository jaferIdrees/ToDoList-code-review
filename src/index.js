//import _ from 'lodash';
import './style.css';
import { enableEdit, editTask, addTask, removeTask } from './pageFunc.js';
import { updateStatus, clearAllCompleted } from './status.js';
import activateDrag from './drag.js';


let tasks = [
]

function addTaskToPage(task) {
  const iTag = document.createElement('i');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  span2.className = 'trash';
  span2.append(span1, iTag);
  const a1 = document.createElement('a');
  a1.className = 'trashCont hide';
  a1.appendChild(span2);
  a1.onmousedown = preventDef;
  a1.onclick = removeTask;
  const a2 = document.createElement('a');
  a2.className = 'editIcon';
  a2.onclick = enableEdit;
  const icnCont = document.createElement('div');
  icnCont.className = 'icnCont';
  icnCont.append(a1, a2);


  const chckbx = document.createElement('input');
  const desc = document.createElement('input');
  desc.id = task.index;
  desc.value = task.description;
  desc.className = 'task';
  desc.disabled = true;
  desc.onchange = editTask;
  desc.onblur = editTask;
  chckbx.type = 'checkbox';
  chckbx.checked = task.completed;
  chckbx.onchange = updateStatus;
  const litem = document.createElement('li');
  litem.className = "lItem draggable";
  litem.append(chckbx, desc, icnCont);
  const ulist = document.querySelector('.dragContainer');
  ulist.appendChild(litem);
}

const preventDef = (e) => {
  e.preventDefault();
}

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
