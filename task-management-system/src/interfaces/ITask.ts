import { TaskPriority } from "../enums/TaskPriority"
import { TaskStatus } from "../enums/TaskStatus"

export interface ITask {
    id: string;
    name: string;
    priority: TaskPriority;
    status: TaskStatus;
    assignee: string
}
