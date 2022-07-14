/**
 * @jest-environment jsdom
 */

import { addTaskToPage } from '../src/addTaskToPage.js';
import { addTask } from '../src/pageFunc';
import Task from '../src/Task.js';

// eslint-disable-next-line no-undef
describe('Test Add functionality', () => {
  // eslint-disable-next-line no-undef
  test('Add one new item to the list', () => {
    document.body.innerHTML =
      '<ul>' +
      '<div class="dragContainer">' +
      '</div>' +
      '</ul>';

    let tasks = [
    ]

    for (let i = 0; i < 5; i++) {
      const newTask = new Task('test', i, false);
      addTaskToPage(addTask(tasks, newTask.description));
    }

    const list = document.querySelectorAll('.lItem');

    // eslint-disable-next-line no-undef
    expect(list).toHaveLength(5);
  });
})

// eslint-disable-next-line no-undef
describe('Test Remove functionality', () => {
  // eslint-disable-next-line no-undef
  test('Remove one new item to the list', () => {
    document.getElementById('0').parentElement.querySelector('.trashCont').click()
    const list = document.querySelectorAll('.lItem');
    // eslint-disable-next-line no-undef
    expect(list).toHaveLength(4);
  });
})

describe('Test edit description functionality', () => {
  test('Test edit description functionality', () => {
    document.getElementById('1').parentElement.querySelector('.task').value= 'Test Edit Description';
    document.getElementById('1').parentElement.querySelector('.task').dispatchEvent(new Event('change'));
    const tasks = JSON.parse(localStorage.getItem('ToDoTasks'));
    expect(tasks[1].description).toBe('Test Edit Description');
  })
})

describe('Test check functionality', () => {
  test('Test check is changed when clicked', () => {
    document.getElementById('1').parentElement.querySelector('.chckbx').click();
    const tasks = JSON.parse(localStorage.getItem('ToDoTasks'));
    console.log("This ",tasks[0].completed,tasks[1].completed,tasks[2].completed,tasks[3].completed)
    expect(tasks[1].completed).toBe(true);
  })
})
