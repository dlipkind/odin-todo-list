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
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formFields = e.target;
  addTodo(formFields, arrProjects);
});

function addProject() {
  const titleValue = document.getElementById("pr_title").value;
  const newProject = new ProjectConstruct(titleValue);
  console.log(newProject);
  arrProjects.push(newProject);
  console.log(arrProjects);
}

function addTodo(formFields, arrProjects) {
  const myFormData = new FormData(formFields);
  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  formDataObj.project = currentProject;
  console.log(formDataObj);
  console.log(arrProjects);
  console.log(arrProjects.currentProject.toDos);

  arrProjects.currentProject.toDos.push(formDataObj);
  console.log(formDataObj);
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
  console.log(currentProject);
  return currentProject;
}
