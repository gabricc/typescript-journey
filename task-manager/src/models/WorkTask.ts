import { Priority } from '../interfaces/Priority';
import { Task } from './Task';

export class WorkTask extends Task {
    constructor(
        title: string,
        description: string,
        priority: Priority,
        public project: string    // Additional property specific to WorkTask
    ) {
        super(title, description, priority);
    }

    getDetails(): string {
        return `[${this.project}] ${this.title} (${this.priority} Priority)${this.completed ? ' ✓' : ''}`;
    }
}
