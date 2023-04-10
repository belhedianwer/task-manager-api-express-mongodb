// routes/user.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

// Route for registering a new user
router.post('/register', UserController.register);

// Route for logging in a user
router.post('/login', UserController.login);

module.exports = router;
