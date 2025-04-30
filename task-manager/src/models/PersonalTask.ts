import { Priority } from '../interfaces/Priority';
import { Task } from './Task';

export class PersonalTask extends Task {
    constructor(
        title: string,
        description: string,
        priority: Priority,
        public location: string    // Additional property specific to PersonalTask
    ) {
        super(title, description, priority);
    }

    getDetails(): string {
        return `${this.title} @ ${this.location} (${this.priority} Priority)${this.completed ? ' ✓' : ''}`;
    }
}
