import Project from "./project";
import Task from "./task";
import Todo from "./todo";
import DOM from "./dom";

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
