import { TaskManager } from "./models/TaskManager";
import { Prioridade } from "./interfaces/Priority";
import { PersonalTask } from "./models/PersonalTask";
import { WorkTask } from "./models/WorkTask";

const workManager = new TaskManager<WorkTask>();
const personalManager = new TaskManager<PersonalTask>();

const personalTask = new PersonalTask(
    "Task 1",
    "Description 1",
    Prioridade.High,
    "Location 1"
);

const workTask = new WorkTask(
    "Task 2",
    "Description 2",
    Prioridade.Medium,
    "Project 1"
);

const personalTask2 = new PersonalTask(
    "titulo da tarefa",
    "description da tarefa",
    Prioridade.Medium,
    "Location da tarefa"
)

// Add tasks to managers
personalManager.addTask(personalTask);
personalManager.addTask(personalTask2);
workManager.addTask(workTask);

// Mark personal task as complete
personalTask.markAsComplete();

console.log("=== Personal Tasks ===");
personalManager.listTasks();

console.log("\n=== Work Tasks ===");
workManager.listTasks();

// List high priority tasks
console.log("\n=== High Priority Personal Tasks ===");
const highPriorityTasks = personalManager.listByPriority(Prioridade.High);
highPriorityTasks.forEach(task => console.log(task.getDetails()));
