// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/authRoutes'); // Assuming you renamed auth.js to authRoutes.js
const userRoutes = require('./routes/userRoutes'); // Assuming you'll create this or have already created it

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes); // Use /api/auth for authentication routes
app.use('/api/user', userRoutes); // Use /api/user for user-related routes

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Astrologer API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
