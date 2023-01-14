/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_task__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");





console.log("DOM here");

class DOM {
  static currentProject;

  static selectProject(projectName) {
    DOM.currentProject === projectName;
  }

  //EVENT LISTENERS

  static projectFormSubmit() {
    const projectForm = document.getElementById("form_pr");
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("TEST!");
      const projectName = document.getElementById("pr_title").value;
      console.log(_todo__WEBPACK_IMPORTED_MODULE_3__["default"].addProject());
      _todo__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](projectName));
      DOM.addProject(projectName);
      DOM.clearProjectPreview();
      DOM.previewProjects();
    });
  }

  static taskFormSubmit() {
    const todoForm = document.getElementById("form_td");
    todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskFormFields = e.target;
      taskObjCompiler(taskFormFields, DOM.currentProject, _todo__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects);
    });
  }

  static taskObjCompiler(taskFormFields, currentProject, projectsArray) {
    const myFormData = new FormData(taskFormFields);
    const formDataObj = {};

    myFormData.forEach((value, key) => (formDataObj[key] = value));
    formDataObj.project = currentProject;

    projectsArray.forEach((project) => {
      project.name === currentProject ? project.toDos.push(formDataObj) : false;
    });
  }

  //PROJECTS

  static previewProjects() {
    _todo__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects.forEach((project) => {
      createProjectDivs(project.name);
    });
  }

  static clearProjectPreview() {
    const projectPreview = document.querySelector(".projects");
    projectPreview.textContent = "";
  }

  static createProjectDivs(projectName) {
    const projectPreview = document.querySelector(".projects");
    const div = document.createElement("div");
    div.textContent = projectName;
    DOM.addListenersToProjects(div);
    projectPreview.appendChild(div);
  }

  static addListenersToProjects(div) {
    div.addEventListener("click", () => {
      DOM.selectProject(projectName);
      DOM.clearTaskPreview();
      DOM.previewTasks(DOM.currentProject);
    });
  }

  //TASKS

  static previewTasks(currentProject) {
    _todo__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects.forEach((project) => {
      project.name === currentProject ? DOM.createTasksDivs : false;
    });
  }

  static clearTaskPreview() {
    const taskPreview = document.querySelector(".tasks");
    taskPreview.textContent = "";
  }

  static createTasksDivs(currentProject) {
    _project__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(currentProject).forEach((task) => {
      const taskList = document.querySelector(".tasks");
      const div = document.createElement("div");
      div.textContent = task.title;
      DOM.addListenersToTasks(div);
      taskList.appendChild(div);
    });
  }

  static addListenersToTasks(div) {
    div.addEventListener("click", () => {
      // expandTodo();
    });
  }
}


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_task__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");





console.log("project here");

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  getName() {
    return this.name;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }
}


/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_task__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");





console.log("storage here");

// export default class Storage {
//   static getTodoList() {
//     const todoList = Object.assign(
//       new TodoList(),
//       JSON.parse(localStorage.getItem("todoList"))
//     );

//     todoList.setProjects(
//       todoList
//         .getProjects()
//         .map((project) => Object.assign(new Project(), project))
//     );

//     todoList
//       .getProjects()
//       .forEach((project) =>
//         project.setTasks(
//           project.getTasks().map((task) => Object.assign(new Task(), task))
//         )
//       );

//     return todoList;
//   }

//   static addProject(project) {
//     const todoList = Storage.getTodoList();
//     todoList.addProject(project);
//     Storage.saveTodoList(todoList);
//   }

//   static addTask(projectName, task) {
//     const todoList = Storage.getTodoList();
//     todoList.getProject(projectName).addTask(task);
//     Storage.saveTodoList(todoList);
//   }
// }


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_task__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");





console.log("todo here");

class Todo {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  addProject(newProject) {
    this.projects.push(newProject);
  }

  deleteProject(projectToDelete) {
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo */ "./src/modules/todo.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_task__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");






console.log("index js here");

document.addEventListener("DOMContentLoaded", _modules_dom__WEBPACK_IMPORTED_MODULE_4__["default"].projectFormSubmit);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map