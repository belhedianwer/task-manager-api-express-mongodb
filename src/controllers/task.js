const Project = require('../models/project');
const Ticket = require('../models/ticket');
const Task = require('../models/task');

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        const project = await Project.findById(req.body.project);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        const ticket = await Ticket.findById(req.body.ticket);

        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        const task = new Task({
            title,
            description,
            ticket: ticket._id,
            project: project._id,
        });

        await task.save();

        return res.status(201).json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        return res.status(200).json(updatedTask);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.remove();

        return res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
};
