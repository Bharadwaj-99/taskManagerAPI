"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_1 = require("./data");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.get('/api/tasks', (req, res) => {
    res.json((0, data_1.getTasks)());
});
app.post('/api/tasks', (req, res) => {
    const newTask = Object.assign(Object.assign({}, req.body), { id: Math.random().toString(36).substring(2, 9) });
    const createdTask = (0, data_1.createTask)(newTask);
    res.status(201).json(createdTask);
});
app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const updatedTask = (0, data_1.updateTask)(id, req.body);
    if (updatedTask) {
        res.json(updatedTask);
    }
    else {
        res.status(404).json({ message: `Task with id ${id} not found` });
    }
});
app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const deleted = (0, data_1.deleteTask)(id);
    if (deleted) {
        res.status(204).end();
    }
    else {
        res.status(404).json({ message: `Task with id ${id} not found` });
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
