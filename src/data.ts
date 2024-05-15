
import { Task } from './types';

let tasks: Task[] = [];

export function getTasks(): Task[] {
  return tasks;
}

export function createTask(task: Task): Task {
  tasks.push(task);
  return task;
}

export function updateTask(id: string, updatedTask: Partial<Task>): Task | undefined {
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedTask };
    return tasks[index];
  }
  return undefined;
}

export function deleteTask(id: string): boolean {
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
}