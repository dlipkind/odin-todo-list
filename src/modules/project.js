import Storage from "./storage";
import Todo from "./todo";
import Task from "./task";
import DOM from "./dom";

console.log("project here");

export default class Project {
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
