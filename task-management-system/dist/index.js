"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const TaskManager_1 = require("./models/TaskManager");
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const taskManager = new TaskManager_1.TaskManager();
// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(taskManager.getAllTasks());
});
// Get task by ID
app.get('/tasks/:id', (req, res) => {
    const task = taskManager.getTaskById(req.params.id);
    if (task) {
        res.json(task);
    }
    else {
        res.status(404).json({ error: 'Task not found' });
    }
});
// Create new task
app.post('/tasks', (req, res) => {
    const { name, priority, assignee } = req.body;
    taskManager.createTask(name, priority, assignee);
    res.status(201).json({ message: 'Task created successfully' });
});
// Update task status
app.put('/tasks/:id/status', (req, res) => {
    const { status } = req.body;
    taskManager.updateTaskStatus(req.params.id, status);
    res.json({ message: 'Task status updated successfully' });
});
// Update task priority
app.put('/tasks/:id/priority', (req, res) => {
    const { priority } = req.body;
    taskManager.updateTaskPriority(req.params.id, priority);
    res.json({ message: 'Task priority updated successfully' });
});
// Assign task
app.put('/tasks/:id/assign', (req, res) => {
    const { assignee } = req.body;
    taskManager.assignTask(req.params.id, assignee);
    res.json({ message: 'Task assigned successfully' });
});
// Delete task
app.delete('/tasks/:id', (req, res) => {
    taskManager.deleteTask(req.params.id);
    res.json({ message: 'Task deleted successfully' });
});
// Get tasks by status
app.get('/tasks/status/:status', (req, res) => {
    const tasks = taskManager.getTasksByStatus(req.params.status);
    res.json(tasks);
});
// Get tasks by priority
app.get('/tasks/priority/:priority', (req, res) => {
    const tasks = taskManager.getTasksByPriority(req.params.priority);
    res.json(tasks);
});
// Get tasks by assignee
app.get('/tasks/assignee/:assignee', (req, res) => {
    const tasks = taskManager.getTasksByAssignee(req.params.assignee);
    res.json(tasks);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
