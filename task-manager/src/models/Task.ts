import { Priority } from '../interfaces/Priority';
import { ITask } from '../interfaces/ITask';

export abstract class Task implements ITask {
    constructor(
        public title: string,
        public description: string,
        public priority: Priority,
        public completed: boolean = false
    ) {}

    abstract getDetails(): string;
    
    markAsComplete(): void {
        this.completed = true;
    }

    markAsIncomplete(): void {
        this.completed = false;
    }

    isCompleted(): boolean {
        return this.completed;
    }
}
