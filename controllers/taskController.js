const TaskService = require('../services/taskService');

exports.createTask = async (req, res) => {
    try {
        const task = await TaskService.createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const filters = req.query;
        const tasks = await TaskService.getTasks(filters);
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await TaskService.updateTask(req.params.id, req.body);
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await TaskService.deleteTask(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
