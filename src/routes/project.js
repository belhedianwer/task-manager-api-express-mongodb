const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');
const authMiddleware = require('../middlewares/auth');

// Get all projects
router.get('/', authMiddleware.authenticateToken, projectController.getAllProjects);

// Get a project by id
router.get('/:id', authMiddleware.authenticateToken, projectController.getProjectById);

// Create a project
router.post('/', authMiddleware.authenticateToken, projectController.createProject);

// Update a project by id
router.patch('/:id', authMiddleware.authenticateToken, projectController.updateProject);

// Delete a project by id
router.delete('/:id', authMiddleware.authenticateToken, projectController.deleteProject);

module.exports = router;
