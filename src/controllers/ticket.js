const Ticket = require('../models/ticket');

const getAllTickets = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const tickets = await Ticket.find({ projectId: projectId });
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        res.status(200).json(ticket);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createTicket = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const { title, description, status } = req.body;
        const newTicket = new Ticket({
            title: title,
            description: description,
            status: status,
            projectId: projectId,
        });
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateTicket = async (req, res) => {
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedTicket);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteTicket = async (req, res) => {
    try {
        await Ticket.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket
};