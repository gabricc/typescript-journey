"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkTask = void 0;
const Task_1 = require("./Task");
class WorkTask extends Task_1.Task {
    constructor(title, description, priority, project // Additional property specific to WorkTask
    ) {
        super(title, description, priority);
        this.project = project;
    }
    getDetails() {
        return `[${this.project}] ${this.title} (${this.priority} Priority)${this.completed ? ' ✓' : ''}`;
    }
}
exports.WorkTask = WorkTask;
