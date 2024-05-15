// src/server.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { createTask, deleteTask, getTasks, updateTask } from './data';
import { Task } from './types';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/tasks', (req: Request, res: Response<Task[]>) => {
  res.json(getTasks());
});

app.post('/api/tasks', (req: Request, res: Response<Task>) => {
  const newTask: Task = { ...req.body, id: Math.random().toString(36).substring(2, 9) };
  const createdTask = createTask(newTask);
  res.status(201).json(createdTask);
});

app.put('/api/tasks/:id', (req: Request, res: Response<Task | { message: string }>) => {
  const { id } = req.params;
  const updatedTask = updateTask(id, req.body);
  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: `Task with id ${id} not found` });
  }
});

app.delete('/api/tasks/:id', (req: Request, res: Response<{ message: string }>) => {
  const { id } = req.params;
  const deleted = deleteTask(id);
  if (deleted) {
    res.status(204).end();
  } else {
    res.status(404).json({ message: `Task with id ${id} not found` });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});