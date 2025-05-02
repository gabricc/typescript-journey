import { ITask } from "../interfaces/ITask"
import { TaskPriority } from "../enums/TaskPriority"
import { TaskStatus } from "../enums/TaskStatus"

export class Task implements ITask {
    constructor(
        public id: string,
        public name: string,
        public priority: TaskPriority,
        public status: TaskStatus,
        public assignee: string
    ) {}

    updateStatus(newStatus: TaskStatus): void {
        this.status = newStatus
    }
    updatePriority(newPriority: TaskPriority): void {
        this.priority = newPriority
    }
    assignTo(assignee: string): void {
        this.assignee = assignee
    }
    toString(): string {
        return `Task ID: ${this.id}\n` +
            `Name: ${this.name}\n` +
            `Priority: ${this.priority}\n` +
            `Status: ${this.status}\n` +
            `Assignee: ${this.assignee}`
    }
    private static nextId: number = 1;
    static generateId(): string {
        return `TASK-${this.nextId++}`;
    }
}