"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskManager_1 = require("./models/TaskManager");
const Priority_1 = require("./interfaces/Priority");
const PersonalTask_1 = require("./models/PersonalTask");
const WorkTask_1 = require("./models/WorkTask");
const workManager = new TaskManager_1.TaskManager();
const personalManager = new TaskManager_1.TaskManager();
const personalTask = new PersonalTask_1.PersonalTask("Task 1", "Description 1", Priority_1.Prioridade.High, "Location 1");
const workTask = new WorkTask_1.WorkTask("Task 2", "Description 2", Priority_1.Prioridade.Medium, "Project 1");
const personalTask2 = new PersonalTask_1.PersonalTask("titulo da tarefa", "description da tarefa", Priority_1.Prioridade.Medium, "Location da tarefa");
// Add tasks to managers
personalManager.addTask(personalTask);
personalManager.addTask(personalTask2);
workManager.addTask(workTask);
// Mark personal task as complete
personalTask.markAsComplete();
console.log("=== Personal Tasks ===");
personalManager.listTasks();
console.log("\n=== Work Tasks ===");
workManager.listTasks();
// List high priority tasks
console.log("\n=== High Priority Personal Tasks ===");
const highPriorityTasks = personalManager.listByPriority(Priority_1.Prioridade.High);
highPriorityTasks.forEach(task => console.log(task.getDetails()));
