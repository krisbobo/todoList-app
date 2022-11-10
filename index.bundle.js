"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodoList_app"] = self["webpackChunktodoList_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/index */ \"./src/modules/add_to_list.js\");\n/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/index */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/index */ \"./src/modules/remove_from_list.js\");\n/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/index */ \"./src/modules/update.js\");\n/* eslint-disable import/extensions */\n\n\n\n// ========== Event Listener to display items ===========\ndocument.addEventListener('DOMContentLoaded', _modules_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addListItemsToInterface);\n\n// ========== Event Listener to add item to list ==========\nconst form = document.querySelector('.add-form');\nconst listInput = document.getElementById('add-to-list');\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const index = _modules_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getItems().length + 1;\n  const item = { description: listInput.value, completed: false, index };\n  _modules_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addItemToList(item);\n  _modules_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addListItemsToInterface();\n  form.reset();\n});\n\n// ======= Event to remove Item from List ========\nconst listItems = document.querySelector('.list-items');\nlistItems.addEventListener('click', (e) => {\n  if (e.target.classList.contains('fa-trash-can')) {\n    _modules_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeItemFromList(e.target);\n    _modules_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeTaskIndex();\n  }\n});\n\n// ======== Event To Add Edited Description To Store ========\nlistItems.addEventListener('input', (e) => {\n  const items = _modules_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getItems();\n  if (e.target.name === 'description') {\n    let itemIndex;\n    items.filter((item, index) => {\n      if (item.index === parseInt(e.target.id, 10)) {\n        itemIndex = index;\n        return item.index === parseInt(e.target.id, 10);\n      }\n      return null;\n    });\n    _modules_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addEditedTaskToStore(e.target.value, itemIndex);\n  }\n});\n\n// ========= Event to toggle task completion ===========\nlistItems.addEventListener('change', (event) => {\n  if (event.target.name === 'checkbox') {\n    if (event.target.checked) {\n      event.target.nextElementSibling.classList.add('line-through');\n      _modules_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateTaskToCompleted(event.target);\n    } else {\n      event.target.nextElementSibling.classList.remove('line-through');\n      _modules_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateTaskToCompleted(event.target);\n    }\n  }\n});\n\n// ============ Event To Clear All Completed Tasks ============\nconst clearBtn = document.querySelector('.clear-btn');\nclearBtn.addEventListener('click', () => {\n  const tasks = _modules_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getItems();\n  const filteredTasks = tasks.filter((task) => task.completed === false);\n  _modules_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setItems(filteredTasks);\n  _modules_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeTaskIndex();\n  _modules_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addListItemsToInterface();\n});\n\n//# sourceURL=webpack://todoList-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/add_to_list.js":
/*!************************************!*\
  !*** ./src/modules/add_to_list.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/modules/storage.js\");\n\n\nclass AddItemsToList {\n  static addListItemsToInterface = () => {\n    const tasks = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getItems();\n    const listItems = document.querySelector('.list-items');\n    listItems.innerHTML = '';\n    tasks.forEach((task) => {\n      listItems.innerHTML += `\n        <li class=\"list-info\">\n          <input\n            type=\"checkbox\"\n            name=\"checkbox\"\n            id=\"${task.index}\"\n            title=\"Check\"\n            value=\"${task.description}\"\n            ${task.completed && 'checked'}\n          >\n          <input type=\"text\" name=\"description\" value=\"${task.description}\" id=\"${\n        task.index\n      }\" class=\"${task.completed ? 'line-through' : ''}\">\n          <i class=\"fa-solid fa-trash-can\"></i>\n        </li>\n    `;\n    });\n  };\n\n  static addItemToList = (task) => {\n    const tasks = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getItems();\n    tasks.push(task);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setItems(tasks);\n  };\n\n  static addEditedTaskToStore = (newDescription, index) => {\n    const tasks = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getItems();\n    tasks[index].description = newDescription;\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setItems(tasks);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddItemsToList);\n\n//# sourceURL=webpack://todoList-app/./src/modules/add_to_list.js?");

/***/ }),

/***/ "./src/modules/remove_from_list.js":
/*!*****************************************!*\
  !*** ./src/modules/remove_from_list.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/modules/storage.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/modules/add_to_list.js\");\n\n\nclass RemoveItemFromList {\n  static removeItemFromList = (itemList) => {\n    itemList.parentElement.remove();\n    const tasks = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getItems();\n    const newTasks = tasks.filter(\n      // eslint-disable-next-line comma-dangle\n      (item) => parseInt(itemList.previousElementSibling.id, 10) !== item.index\n    );\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setItems(newTasks);\n  };\n\n  static changeTaskIndex = () => {\n    const tasks = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getItems();\n    const newTasks = tasks.map((task, index) => {\n      task.index = index;\n      return task;\n    });\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setItems(newTasks);\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addListItemsToInterface();\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveItemFromList);\n\n//# sourceURL=webpack://todoList-app/./src/modules/remove_from_list.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Store {\n  static getItems = () => {\n    let tasks = null;\n    if (localStorage.getItem('tasks') === null) {\n      tasks = [];\n      return tasks;\n    }\n\n    tasks = JSON.parse(localStorage.getItem('tasks'));\n    return tasks;\n  };\n\n  static setItems = (itemToAdd) => {\n    localStorage.setItem('tasks', JSON.stringify(itemToAdd));\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);\n\n//# sourceURL=webpack://todoList-app/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/update.js":
/*!*******************************!*\
  !*** ./src/modules/update.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/modules/storage.js\");\n\n\nclass UpdateStatus {\n  static updateTaskToCompleted = (item) => {\n    const tasks = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getItems();\n\n    const newTasks = tasks.map((task) => {\n      if (task.index === parseInt(item.id, 10)) {\n        task.completed = !task.completed;\n      }\n\n      return task;\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setItems(newTasks);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateStatus);\n\n\n//# sourceURL=webpack://todoList-app/./src/modules/update.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);