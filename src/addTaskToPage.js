import { enableEdit, editTask,  removeTask } from './pageFunc.js';
import { updateStatus} from './status.js';

export function addTaskToPage(task) {
  const iTag = document.createElement('i');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const a1 = document.createElement('a');
  const chckbx = document.createElement('input');
  const desc = document.createElement('input');
  const a2 = document.createElement('a');
  const icnCont = document.createElement('div');
  const litem = document.createElement('li');

  span2.className = 'trash';
  span2.append(span1, iTag);
  a1.className = 'trashCont hide';
  a1.appendChild(span2);
  a1.onmousedown = ((e)=>  e.preventDefault());
  a1.onclick = removeTask;
  a2.className = 'editIcon';
  a2.onclick = enableEdit;
  icnCont.className = 'icnCont';
  icnCont.append(a1, a2);


  desc.id = task.index;
  desc.value = task.description;
  desc.className = 'task';
  desc.disabled = true;
  desc.onchange = editTask;
  desc.onblur = editTask;
  chckbx.type = 'checkbox';
  chckbx.checked = task.completed;
  chckbx.onchange = updateStatus;
  litem.className = "lItem draggable";
  litem.append(chckbx, desc, icnCont);
  const ulist = document.querySelector('.dragContainer');
  ulist.appendChild(litem);
}