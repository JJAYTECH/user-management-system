// routes/register.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Importing the DB connection

router.post('/', (req, res) => {
  const { username, password } = req.body;

  // 🔐 Validate input
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(200).json({ message: 'User registered successfully' });
  });
});

module.exports = router;
