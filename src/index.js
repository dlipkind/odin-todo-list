import Storage from "./modules/storage";
import Project from "./modules/project";
import Todo from "./modules/todo";
import Task from "./modules/task";
import DOM from "./modules/dom";

console.log("index js here");

console.log(typeof new Project("Name"));

DOM.projectFormSubmit();
DOM.taskFormSubmit();
