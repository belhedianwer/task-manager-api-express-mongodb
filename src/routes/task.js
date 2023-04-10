const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');
const authMiddleware = require('../middlewares/auth');

// Get all tasks
router.get('/', authMiddleware.authenticateToken, taskController.getAllTasks);

// Get a task by id
router.get('/:id', authMiddleware.authenticateToken, taskController.getTaskById);

// Create a task
router.post('/', authMiddleware.authenticateToken, taskController.createTask);

// Update a task by id
router.patch('/:id', authMiddleware.authenticateToken, taskController.updateTask);

// Delete a task by id
router.delete('/:id', authMiddleware.authenticateToken, taskController.deleteTask);

module.exports = router;
