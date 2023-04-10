const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const projectRoutes = require('./src/routes/project');
const ticketRoutes = require('./src/routes/ticket');
const taskRoutes = require('./src/routes/task');
const userRoutes = require('./src/routes/user');
const authMiddleware = require('./src/middlewares/auth');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(authMiddleware.authenticateToken);

// Routes
app.use('/projects', projectRoutes);
app.use('/tickets', ticketRoutes);
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set('strictQuery', false);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`Failed to connect to MongoDB: ${err}`));

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
