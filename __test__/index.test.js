/**
 * @jest-environment jsdom
 */

import {addTaskToPage} from '../src/addTaskToPage.js';
import {Task} from '../src/Task.js';

jest.mock('../src/addTaskToPage.js');
test('Add one new item to the list', () => {
  document.body.innerHTML =
  '<ul>'+
  '<div class="dragContainer">'+
  '</div>'+
  '</ul>';

  const newTask = {
    description :'desc',
    completed : false,
    index : 0,
  };
  //const addTaskToPage = require('../src/addTaskToPage.js');
  addTaskToPage.mockImplementation(addTaskToPage({description :'desc',
  completed : false,
  index : 0,}));
  const list = document.querySelectorAll('li');
  console.log(list);
  expect(list).toHaveLength(1);
});