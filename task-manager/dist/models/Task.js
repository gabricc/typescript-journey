"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(title, description, priority, completed = false) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = completed;
    }
    markAsComplete() {
        this.completed = true;
    }
    markAsIncomplete() {
        this.completed = false;
    }
    isCompleted() {
        return this.completed;
    }
}
exports.Task = Task;
