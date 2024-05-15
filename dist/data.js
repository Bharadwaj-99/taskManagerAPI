"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
let tasks = [];
function getTasks() {
    return tasks;
}
exports.getTasks = getTasks;
function createTask(task) {
    tasks.push(task);
    return task;
}
exports.createTask = createTask;
function updateTask(id, updatedTask) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
        tasks[index] = Object.assign(Object.assign({}, tasks[index]), updatedTask);
        return tasks[index];
    }
    return undefined;
}
exports.updateTask = updateTask;
function deleteTask(id) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
}
exports.deleteTask = deleteTask;
