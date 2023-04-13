// controllers/userController.js
const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const user = new User({ username, password });

        try {
            await user.save();
            res.json({ message: 'User successfully registered' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    login: async (req, res) => {
        const { username, password } = req.body;

        try {
            const user = await User.findOne({ username });

            if (!user) {
                res.status(401).json({ error: 'User not found' });
            }
            else {
                user.comparePassword(password, (err, isMatch) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                    } else if (!isMatch) {
                        res.status(401).json({ error: 'Incorrect password' });
                    } else {
                        // Generate and sign a JWT token
                        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
                        res.json({ token });
                    }
                });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};