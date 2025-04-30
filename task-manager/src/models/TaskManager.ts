import { Priority } from '../interfaces/Priority';
import { Task } from './Task';

export class TaskManager<T extends Task> {
    private tasks: T[] = [];

    addTask(task: T): void {
        this.tasks.push(task);
    }

    listTasks(): void {
        if (this.tasks.length === 0) {
            console.log('No tasks found.');
            return;
        }

        this.tasks.forEach(task => {
            console.log(task.getDetails());
        });
    }

    listByPriority(priority: Priority): T[] {
        return this.tasks.filter(task => task.priority === priority);
    }

    markTaskAsComplete(index: number): void {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].markAsComplete();
        }
    }

    getTaskCount(): number {
        return this.tasks.length;
    }
}
