/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_task__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\n\n\n\n\nconsole.log(\"index js here\");\n\n_modules_dom__WEBPACK_IMPORTED_MODULE_4__[\"default\"].projectFormSubmit();\n_modules_dom__WEBPACK_IMPORTED_MODULE_4__[\"default\"].taskFormSubmit();\n\n\n//# sourceURL=webpack://js-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOM)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_task__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n\n\n\n\n\nconsole.log(\"DOM here\");\n\nclass DOM {\n  //EVENT LISTENERS\n\n  static projectFormSubmit() {\n    const projectForm = document.getElementById(\"form_pr\");\n    projectForm.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      const projectName = document.getElementById(\"pr_title\").value;\n      const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName);\n      _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(newProject);\n      DOM.clearProjectPreview();\n      DOM.previewProjects();\n    });\n  }\n\n  static taskFormSubmit() {\n    const todoForm = document.getElementById(\"form_td\");\n    todoForm.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      const taskFormFields = e.target;\n      DOM.taskObjCompiler(\n        taskFormFields,\n        _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].currentProject,\n        _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getProjects()\n      );\n      DOM.clearTaskPreview();\n      DOM.previewTasks(_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].currentProject);\n    });\n  }\n\n  static taskObjCompiler(taskFormFields, currentProject, projectsArray) {\n    const myFormData = new FormData(taskFormFields);\n    const formDataObj = {};\n\n    myFormData.forEach((value, key) => (formDataObj[key] = value));\n    formDataObj.project = currentProject;\n\n    projectsArray.forEach((project) => {\n      project.name === currentProject ? project.tasks.push(formDataObj) : false;\n    });\n  }\n\n  //PROJECTS\n\n  static previewProjects() {\n    _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getProjects().forEach((project) => {\n      DOM.createProjectDivs(project.name);\n    });\n  }\n\n  static clearProjectPreview() {\n    const projectPreview = document.querySelector(\".projects\");\n    projectPreview.textContent = \"\";\n  }\n\n  static createProjectDivs(projectName) {\n    const projectPreview = document.querySelector(\".projects\");\n    const div = document.createElement(\"div\");\n    div.textContent = projectName;\n    DOM.addListenersToProjects(div, projectName);\n    projectPreview.appendChild(div);\n  }\n\n  static addListenersToProjects(div, projectName) {\n    div.addEventListener(\"click\", () => {\n      _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setCurrentProject(projectName);\n      DOM.clearTaskPreview();\n      DOM.previewTasks(_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].currentProject);\n    });\n  }\n\n  //TASKS\n\n  static previewTasks(currentProject) {\n    _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getProjects().forEach((project) => {\n      project.name === currentProject ? DOM.createTasksDivs(project) : false;\n    });\n  }\n\n  static clearTaskPreview() {\n    const taskPreview = document.querySelector(\".tasks\");\n    taskPreview.textContent = \"\";\n  }\n\n  static createTasksDivs(project) {\n    let taskList = _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTasks.call(project);\n    taskList.forEach((task) => {\n      const taskList = document.querySelector(\".tasks\");\n      const div = document.createElement(\"div\");\n      div.textContent = task.title;\n      DOM.addListenersToTasks(div);\n      taskList.appendChild(div);\n    });\n  }\n\n  static addListenersToTasks(div) {\n    div.addEventListener(\"click\", () => {\n      // expandTodo();\n    });\n  }\n}\n\n\n//# sourceURL=webpack://js-todo-list/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_task__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\n\n\n\nconsole.log(\"project here\");\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n\n  static getName() {\n    return this.name;\n  }\n\n  static setTasks(tasks) {\n    this.tasks = tasks;\n  }\n\n  static getTasks() {\n    return this.tasks;\n  }\n}\n\n\n//# sourceURL=webpack://js-todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_task__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\n\n\n\nconsole.log(\"storage here\");\n\n// export default class Storage {\n//   static getTodoList() {\n//     const todoList = Object.assign(\n//       new TodoList(),\n//       JSON.parse(localStorage.getItem(\"todoList\"))\n//     );\n\n//     todoList.setProjects(\n//       todoList\n//         .getProjects()\n//         .map((project) => Object.assign(new Project(), project))\n//     );\n\n//     todoList\n//       .getProjects()\n//       .forEach((project) =>\n//         project.setTasks(\n//           project.getTasks().map((task) => Object.assign(new Task(), task))\n//         )\n//       );\n\n//     return todoList;\n//   }\n\n//   static addProject(project) {\n//     const todoList = Storage.getTodoList();\n//     todoList.addProject(project);\n//     Storage.saveTodoList(todoList);\n//   }\n\n//   static addTask(projectName, task) {\n//     const todoList = Storage.getTodoList();\n//     todoList.getProject(projectName).addTask(task);\n//     Storage.saveTodoList(todoList);\n//   }\n// }\n\n\n//# sourceURL=webpack://js-todo-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://js-todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_task__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\n\n\n\nconsole.log(\"todo here\");\n\nclass Todo {\n  static projectsArray = [];\n\n  static currentProject;\n\n  static setCurrentProject(projectName) {\n    return (Todo.currentProject = projectName);\n  }\n\n  static getProjects() {\n    return Todo.projectsArray;\n  }\n\n  static getProject(projectName) {\n    return this.projectsArray.find(\n      (project) => project.getName() === projectName\n    );\n  }\n\n  static addProject(newProject) {\n    Todo.projectsArray.push(newProject);\n  }\n\n  static deleteProject(projectToDelete) {\n    Todo.projectsArray.splice(Todo.projectsArray.indexOf(projectToDelete), 1);\n  }\n}\n\n\n//# sourceURL=webpack://js-todo-list/./src/modules/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;