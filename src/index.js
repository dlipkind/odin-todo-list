import { ProjectConstruct } from "./classes.js";

console.log("TEST: Hello index js here");

let arrProjects = [];

let currentProject = undefined;

const projectForm = document.getElementById("form_pr");
const todoForm = document.getElementById("form_td");

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addProject(arrProjects, currentProject, ProjectConstruct);
  updProjectList(arrProjects);
  selectCurrentProject(newProject); /// проверить работает ли
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formFields = e.target;
  addTodo(formFields, arrProjects, currentProject);
});

function addProject() {
  const titleValue = document.getElementById("pr_title").value;
  const newProject = new ProjectConstruct(titleValue);
  arrProjects.push(newProject);
  return newProject;
}

function addTodo(formFields, arrProjects, currentProject) {
  const myFormData = new FormData(formFields);
  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  formDataObj.project = currentProject;

  arrProjects.forEach((project) => {
    if (project.name === currentProject) {
      project.toDos.push(formDataObj);
    }
  });

  listCurrentToDos(currentProject); /// Перенести это в функцию, которая вызывает весь процесс

  console.log(formDataObj);
  console.log(arrProjects);
}

function updProjectList() {
  const projectList = document.querySelector(".projects");
  projectList.textContent = "";

  arrProjects.forEach((project) => {
    const div = document.createElement("div");
    div.textContent = project.name;
    div.addEventListener("click", () => {
      selectCurrentProject(project.name);
      listCurrentToDos(project.name);
    });
    projectList.appendChild(div);
  });
}

function selectCurrentProject(projectTitle) {
  currentProject = projectTitle;
  console.log(currentProject);
  return currentProject;
}

function listCurrentToDos(projectTitle) {
  currentProject = projectTitle;
  const todoList = document.querySelector(".tasks");
  todoList.textContent = "";

  arrProjects.forEach((project) => {
    if (project.name === currentProject) {
      project.toDos.forEach((todo) => {
        const div = document.createElement("div");
        div.textContent = todo.title;
        div.addEventListener("click", () => {
          // expandTodo();
        });
        todoList.appendChild(div);
      });
    }
  });
}
