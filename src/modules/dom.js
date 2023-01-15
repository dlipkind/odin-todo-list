import Storage from "./storage";
import Project from "./project";
import Task from "./task";
import Todo from "./todo";

console.log("DOM here");

export default class DOM {
  //EVENT LISTENERS

  static projectFormSubmit() {
    const projectForm = document.getElementById("form_pr");
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const projectName = document.getElementById("pr_title").value;
      const newProject = new Project(projectName);
      Todo.addProject(newProject);
      DOM.clearProjectPreview();
      DOM.previewProjects();
    });
  }

  static taskFormSubmit() {
    const todoForm = document.getElementById("form_td");
    todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskFormFields = e.target;
      DOM.taskObjCompiler(
        taskFormFields,
        Todo.currentProject,
        Todo.getProjects()
      );
      DOM.clearTaskPreview();
      DOM.previewTasks(Todo.currentProject);
    });
  }

  static taskObjCompiler(taskFormFields, currentProject, projectsArray) {
    const myFormData = new FormData(taskFormFields);
    const formDataObj = {};

    myFormData.forEach((value, key) => (formDataObj[key] = value));
    formDataObj.project = currentProject;

    projectsArray.forEach((project) => {
      project.name === currentProject ? project.tasks.push(formDataObj) : false;
    });
  }

  //PROJECTS

  static previewProjects() {
    Todo.getProjects().forEach((project) => {
      DOM.createProjectDivs(project.name);
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
    DOM.addListenersToProjects(div, projectName);
    projectPreview.appendChild(div);
  }

  static addListenersToProjects(div, projectName) {
    div.addEventListener("click", () => {
      Todo.setCurrentProject(projectName);
      DOM.clearTaskPreview();
      DOM.previewTasks(Todo.currentProject);
    });
  }

  //TASKS

  static previewTasks(currentProject) {
    Todo.getProjects().forEach((project) => {
      project.name === currentProject ? DOM.createTasksDivs(project) : false;
    });
  }

  static clearTaskPreview() {
    const taskPreview = document.querySelector(".tasks");
    taskPreview.textContent = "";
  }

  static createTasksDivs(project) {
    let taskList = Project.getTasks.call(project);
    taskList.forEach((task) => {
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
