import { Priority } from './Priority';

export interface ITask {
    title: string;
    description: string;
    priority: Priority;
    completed: boolean;
    
    getDetails(): string;
    markAsComplete(): void;
    markAsIncomplete(): void;
    isCompleted(): boolean;
}
