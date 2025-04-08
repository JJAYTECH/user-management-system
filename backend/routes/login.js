// routes/login.js
const express = require('express');
const router = express.Router();

// Mock login route
router.post('/', (req, res) => {
  // You’ll add real login/auth logic here
  res.json({ message: 'Login successful (mock)' });
});

module.exports = router;
