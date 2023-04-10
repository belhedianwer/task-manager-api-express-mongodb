const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket');
const authMiddleware = require('../middlewares/auth');

// Get all tickets
router.get('/', authMiddleware.authenticateToken, ticketController.getAllTickets);

// Get a ticket by id
router.get('/:id', authMiddleware.authenticateToken, ticketController.getTicketById);

// Create a ticket
router.post('/', authMiddleware.authenticateToken, ticketController.createTicket);

// Update a ticket by id
router.patch('/:id', authMiddleware.authenticateToken, ticketController.updateTicket);

// Delete a ticket by id
router.delete('/:id', authMiddleware.authenticateToken, ticketController.deleteTicket);

module.exports = router;
