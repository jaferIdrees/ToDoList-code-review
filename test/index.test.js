/**
 * @jest-environment jsdom
 */

import { addTaskToPage } from '../src/addTaskToPage.js';
import { addTask } from '../src/pageFunc';
import Task from '../src/Task.js';

describe('Test Add functionality', () => {
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

    //expect(addTaskToPage).toBeCalledTimes(1);
    expect(list).toHaveLength(5);
  });
})

describe('Test Remove functionality', () => {
  test('Remove one new item to the list', () => {
    document.getElementById('0').parentElement.querySelector('.trashCont').click()
    const list = document.querySelectorAll('.lItem');
    expect(list).toHaveLength(4);
    //test push
  });
})
