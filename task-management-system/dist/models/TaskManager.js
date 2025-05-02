"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const Task_1 = require("../models/Task");
const TaskStatus_1 = require("../enums/TaskStatus");
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    createTask(name, priority, assignee) {
        const task = new Task_1.Task(Task_1.Task.generateId(), name, priority, TaskStatus_1.TaskStatus.TODO, assignee);
        this.tasks.push(task);
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    getTaskById(id) {
        if (id) {
            return this.tasks.find(task => task.id === id);
        }
        return undefined;
    }
    getAllTasks() {
        return this.tasks;
    }
    updateTaskStatus(id, newStatus) {
        const task = this.getTaskById(id);
        if (task) {
            task.updateStatus(newStatus);
        }
    }
    updateTaskPriority(id, newPriority) {
        const task = this.getTaskById(id);
        if (task) {
            task.updatePriority(newPriority);
        }
    }
    assignTask(id, assignee) {
        const task = this.getTaskById(id);
        if (task) {
            task.assignTo(assignee);
        }
    }
    getTasksByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }
    getTasksByPriority(priority) {
        return this.tasks.filter(task => task.priority === priority);
    }
    getTasksByAssignee(assignee) {
        return this.tasks.filter(task => task.assignee === assignee);
    }
    searchTasks(query) {
        return this.tasks.filter(task => task.name.toLowerCase().includes(query.toLowerCase()));
    }
    toString() {
        return this.tasks.map(task => task.toString()).join('\n');
    }
}
exports.TaskManager = TaskManager;
