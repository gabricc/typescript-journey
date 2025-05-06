"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, name, priority, status, assignee) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.status = status;
        this.assignee = assignee;
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
    updatePriority(newPriority) {
        this.priority = newPriority;
    }
    assignTo(assignee) {
        this.assignee = assignee;
    }
    toString() {
        return `Task ID: ${this.id}\n` +
            `Name: ${this.name}\n` +
            `Priority: ${this.priority}\n` +
            `Status: ${this.status}\n` +
            `Assignee: ${this.assignee}`;
    }
    static generateId() {
        return `TASK-${this.nextId++}`;
    }
}
exports.Task = Task;
Task.nextId = 1;
