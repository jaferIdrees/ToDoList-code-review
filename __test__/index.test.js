/**
 * @jest-environment jsdom
 */

import {addTaskToPage} from '../src/addTaskToPage.js';

test('Add one new item to the list', () => {
  document.body.innerHTML =
  '<ul>'+
  '<div class="dragContainer">'+
  '</div>'+
  '</ul>';
for (let i=0; i<5; i++) {
  const newTask = {
    description :'desc',
    completed : false,
    index : i,
  };
  addTaskToPage(newTask);
}
  const list = document.querySelectorAll('.lItem');
  //expect(addTaskToPage).toBeCalledTimes(1);
  expect(list).toHaveLength(5);
});