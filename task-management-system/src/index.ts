import { TaskManager } from "./models/TaskManager";
import { TaskPriority } from "./enums/TaskPriority";
import { TaskStatus } from "./enums/TaskStatus";

const taskmanager1 = new TaskManager();

taskmanager1.createTask("Task 1", TaskPriority.LOW, "John Doe");
console.log(taskmanager1.toString());

taskmanager1.updateTaskStatus("TASK-1", TaskStatus.IN_PROGRESS);
console.log(taskmanager1.toString());

taskmanager1.updateTaskPriority("TASK-1", TaskPriority.HIGH);
console.log(taskmanager1.toString());

taskmanager1.assignTask("TASK-1", "Jane Doe");
console.log(taskmanager1.toString());

const tasks = taskmanager1.getTasksByStatus(TaskStatus.IN_PROGRESS);
console.log(tasks);

const tasksByPriority = taskmanager1.getTasksByPriority(TaskPriority.HIGH);
console.log(tasksByPriority);

const tasksByAssignee = taskmanager1.getTasksByAssignee("Jane Doe");
console.log(tasksByAssignee);