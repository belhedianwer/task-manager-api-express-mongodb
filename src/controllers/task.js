const Project = require('../models/project');
const Ticket = require('../models/ticket');
const Task = require('../models/task');

const createTask = async (req, res) => {
    try {
        const { name, description } = req.body;

        const project = await Project.findById(req.params.projectId);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        const ticket = await Ticket.findById(req.params.ticketId);

        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        const task = new Task({
            name,
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
        const tasks = await Task.find({ ticket: req.params.ticketId });
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            ticket: req.params.ticketId,
        });

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
        const { name, description, status } = req.body;

        const task = await Task.findOne({
            _id: req.params.id,
            ticket: req.params.ticketId,
        });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        if (name) {
            task.name = name;
        }

        if (description) {
            task.description = description;
        }
        
        if (status) {
            task.status = status;
        }

        await task.save();

        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            ticket: req.params.ticketId,
        });

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
