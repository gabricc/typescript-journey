"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalTask = void 0;
const Task_1 = require("./Task");
class PersonalTask extends Task_1.Task {
    constructor(title, description, priority, location // Additional property specific to PersonalTask
    ) {
        super(title, description, priority);
        this.location = location;
    }
    getDetails() {
        return `${this.title} @ ${this.location} (${this.priority} Priority)${this.completed ? ' ✓' : ''}`;
    }
}
exports.PersonalTask = PersonalTask;
