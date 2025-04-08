// routes/account.js
const express = require('express');
const router = express.Router();

// Protected route placeholder (requires authentication logic)
router.get('/', (req, res) => {
  res.json({ message: 'User account info (mock)' });
});

module.exports = router;
