// routes/userRoutes.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have this middleware
const User = require('../models/User');

const router = express.Router();

// Secure route example
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
