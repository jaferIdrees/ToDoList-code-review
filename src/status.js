import { updateLocalStorage, updateList } from './pageFunc.js'

let tasks = JSON.parse(localStorage.getItem('ToDoTasks'));

export function updateStatus() {
  tasks = JSON.parse(localStorage.getItem('ToDoTasks'));
  console.log(this.parentNode.querySelector('.task').id)
  const index = parseInt(this.parentNode.querySelector('.task').id, 10);
  const status = this.checked;
  tasks[index].completed = status;
  console.log('Update Status checked');
  updateLocalStorage(tasks);
}

export const clearAllCompleted = () => {
  tasks = JSON.parse(localStorage.getItem('ToDoTasks'));
  tasks = tasks.filter((task) => !task.completed);
  updateLocalStorage(tasks);
  updateList(tasks);
}