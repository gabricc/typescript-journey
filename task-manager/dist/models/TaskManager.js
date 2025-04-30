"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    listTasks() {
        if (this.tasks.length === 0) {
            console.log('No tasks found.');
            return;
        }
        this.tasks.forEach(task => {
            console.log(task.getDetails());
        });
    }
    listByPriority(priority) {
        return this.tasks.filter(task => task.priority === priority);
    }
    markTaskAsComplete(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].markAsComplete();
        }
    }
    getTaskCount() {
        return this.tasks.length;
    }
}
exports.TaskManager = TaskManager;
