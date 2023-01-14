import Storage from "./storage";
import Project from "./project";
import Task from "./task";
import DOM from "./dom";

console.log("todo here");

export default class Todo {
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
