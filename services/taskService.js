const Task = require('../models/task');

class TaskService {
    static async createTask(data) {
        return Task.create(data);
    }

    static async getTasks(filters) {
        return Task.find(filters);
    }

    static async updateTask(id, data) {
        return Task.findByIdAndUpdate(id, data, { new: true });
    }

    static async deleteTask(id) {
        return Task.findByIdAndDelete(id);
    }
}

module.exports = TaskService;
