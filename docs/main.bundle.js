"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(desc, index, completed = false) {\n    this.description = desc;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/Task.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ activateDrag)\n/* harmony export */ });\nfunction activateDrag() {\n  const draggables = document.querySelectorAll('.lItem');\n  const container = document.querySelector('.dragContainer')\n  draggables.forEach(task => task.draggable = true);\n\n  draggables.forEach(draggable => {\n    draggable.addEventListener('dragstart', () => {\n      draggable.classList.add('dragging')\n    })\n    draggable.addEventListener('dragend', () => {\n      draggable.classList.remove('dragging');\n      const tasks = JSON.parse( localStorage.getItem('ToDoTasks'));\n      const draggableElements = [...container.querySelectorAll('.draggable')]\n      for (let i=0; i<draggableElements.length; i++) {\n        let index = parseInt(draggableElements[i].querySelector('.task').id,10);\n        tasks[index].index = i;\n        draggableElements[i].querySelector('.task').id = i;\n      }\n      tasks.sort((a,b) => a.index > b.index ? 1 :-1);\n      localStorage.setItem('ToDoTasks', JSON.stringify(tasks))\n    })\n  });\n\n  container.addEventListener('dragover', e => {\n    e.preventDefault()\n    const afterElement = getDragAfterElement(container, e.clientY)\n    const draggable = document.querySelector('.dragging')\n    if (afterElement == null) {\n      container.appendChild(draggable)\n    } else {\n      container.insertBefore(draggable, afterElement)\n    }\n  })\n\n  function getDragAfterElement(container, y) {\n    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]\n    return draggableElements.reduce((closest, child) => {\n      const box = child.getBoundingClientRect()\n      const offset = y - box.top - box.height / 2\n      if (offset < 0 && offset > closest.offset) {\n        return { offset: offset, element: child }\n      } else {\n        return closest\n      }\n    }, { offset: Number.NEGATIVE_INFINITY }).element\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageFunc.js */ \"./src/pageFunc.js\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n//import _ from 'lodash';\n//import './style.css';\n\n\n\n\n\n\nlet tasks = [\n]\n\nfunction addTaskToPage(task) {\n  const iTag = document.createElement('i');\n  const span1 = document.createElement('span');\n  const span2 = document.createElement('span');\n  span2.className = 'trash';\n  span2.append(span1, iTag);\n  const a1 = document.createElement('a');\n  a1.className = 'trashCont hide';\n  a1.appendChild(span2);\n  a1.onmousedown = preventDef;\n  a1.onclick = _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.removeTask;\n  const a2 = document.createElement('a');\n  a2.className = 'editIcon';\n  a2.onclick = _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.enableEdit;\n  const icnCont = document.createElement('div');\n  icnCont.className = 'icnCont';\n  icnCont.append(a1, a2);\n\n\n  const chckbx = document.createElement('input');\n  const desc = document.createElement('input');\n  desc.id = task.index;\n  desc.value = task.description;\n  desc.className = 'task';\n  desc.disabled = true;\n  desc.onchange = _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.editTask;\n  desc.onblur = _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.editTask;\n  chckbx.type = 'checkbox';\n  chckbx.checked = task.completed;\n  chckbx.onchange = _status_js__WEBPACK_IMPORTED_MODULE_1__.updateStatus;\n  const litem = document.createElement('li');\n  litem.className = \"lItem draggable\";\n  litem.append(chckbx, desc, icnCont);\n  const ulist = document.querySelector('.dragContainer');\n  ulist.appendChild(litem);\n}\n\nconst preventDef = (e) => {\n  e.preventDefault();\n}\n\nconst updateList = (tasks) => {\n  for (let task of tasks) {\n    addTaskToPage(task);\n  }\n}\n\ndocument.getElementById('addItem').addEventListener('keyup', (e) => {\n  if (e.key === 'Enter') {\n    addTaskToPage((0,_pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(tasks, e.target.value));\n    e.target.value = '';\n    (0,_drag_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n})\n\ndocument.getElementById('clrCompleted').onclick = _status_js__WEBPACK_IMPORTED_MODULE_1__.clearAllCompleted;\nwindow.addEventListener('load', () => {\n  if (localStorage.getItem('ToDoTasks')) tasks = JSON.parse(localStorage.getItem('ToDoTasks'));\n  updateList(tasks);\n  document.getElementById('addItem').focus();\n  (0,_drag_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/pageFunc.js":
/*!*************************!*\
  !*** ./src/pageFunc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"enableEdit\": () => (/* binding */ enableEdit),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"updateLocalStorage\": () => (/* binding */ updateLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n\n\nfunction enableEdit(){\n  this.parentNode.parentNode.querySelector('.task').disabled = false;\n  this.parentNode.parentNode.querySelector('.task').focus();\n  this.classList.add('hide');\n  this.parentNode.querySelector('.trashCont').classList.remove('hide');\n}\n\nfunction editTask(){\n  const index = parseInt(this.parentNode.querySelector('.task').id,10);\n  this.disabled = true;\n  this.parentNode.querySelector('.icnCont').querySelector('.trashCont').classList.add('hide');\n  this.parentNode.querySelector('.icnCont').querySelector('.editIcon').classList.remove('hide');\n  this.parentNode.querySelector('.task').focus();\n  const tasks = JSON.parse(localStorage.getItem('ToDoTasks'));\n  tasks[index].description = this.parentNode.querySelector('.task').value;\n  updateLocalStorage(tasks);\n}\n\nfunction addTask(tasks,desc){\n  const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](desc, tasks.length);\n  tasks.push(newTask);\n  updateLocalStorage(tasks);\n  return newTask;\n}\n\nfunction updateLocalStorage(tasks){\n  localStorage.setItem('ToDoTasks',JSON.stringify(tasks));\n}\n\nfunction removeTask(){\n  const tasks = JSON.parse(localStorage.getItem('ToDoTasks'));\n  const index = parseInt(this.parentNode.parentNode.querySelector('.task').id);\n  console.log(`removeFun ${index}`)\n  tasks.splice(index, 1);\n  for (let i = 0; i < tasks.length; i++) tasks[i].index = i;\n  updateLocalStorage(tasks);\n  document.location.reload();\n}\n\n//# sourceURL=webpack://to-do-list/./src/pageFunc.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearAllCompleted\": () => (/* binding */ clearAllCompleted),\n/* harmony export */   \"updateStatus\": () => (/* binding */ updateStatus)\n/* harmony export */ });\n/* harmony import */ var _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageFunc.js */ \"./src/pageFunc.js\");\n\n\nlet tasks = JSON.parse( localStorage.getItem('ToDoTasks'));\n\nfunction updateStatus(){\n  const index = parseInt(this.parentNode.querySelector('.task').id,10);\n  const status = this.checked;\n  tasks[index].completed = status;\n  (0,_pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);\n}\n\nconst clearAllCompleted = () => {\n  tasks = JSON.parse( localStorage.getItem('ToDoTasks'));\n  console.log(tasks);\n  tasks = tasks.filter((task) => !task.completed);\n  console.log(tasks);\n  (0,_pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);\n  \n  window.location.reload();\n}\n\n//# sourceURL=webpack://to-do-list/./src/status.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);