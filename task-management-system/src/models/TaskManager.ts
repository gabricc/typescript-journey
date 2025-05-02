import { Task } from "../models/Task"
import { TaskPriority } from "../enums/TaskPriority"
import { TaskStatus } from "../enums/TaskStatus"

export class TaskManager {
    private tasks: Task[] = []
    createTask(name: string, priority: TaskPriority, assignee: string) {
        const task = new Task(
            Task.generateId(),
            name,
            priority,
            TaskStatus.TODO,
            assignee
        )
        this.tasks.push(task)
    }
    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
    getTaskById(id: string): Task | undefined {
        if (id) {
            return this.tasks.find(task => task.id === id)
        }
        return undefined
    }
    getAllTasks(): Task[] {
        return this.tasks
    }

    updateTaskStatus(id: string, newStatus: TaskStatus) {
        const task = this.getTaskById(id)
        if (task) {
            task.updateStatus(newStatus)
        }
    }
    updateTaskPriority(id: string, newPriority: TaskPriority) {
        const task = this.getTaskById(id)
        if (task) {
            task.updatePriority(newPriority)
        }
    }
    assignTask(id: string, assignee: string) {
        const task = this.getTaskById(id)
        if (task) {
            task.assignTo(assignee)
        }
    }


    getTasksByStatus(status: TaskStatus): Task[] {
        return this.tasks.filter(task => task.status === status)
    }

    getTasksByPriority(priority: TaskPriority): Task[] {
        return this.tasks.filter(task => task.priority === priority)
    }

    getTasksByAssignee(assignee: string): Task[] {
        return this.tasks.filter(task => task.assignee === assignee)
    }

    searchTasks(query: string): Task[] {
        return this.tasks.filter(task => task.name.toLowerCase().includes(query.toLowerCase()))
    }
    
    toString(): string {
        return this.tasks.map(task => task.toString()).join('\n')
    }
}
