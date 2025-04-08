const express = require('express');
const router = express.Router();
const db = require('../db');

// Registration route
router.post('/register', (req, res) => {
    const { email, password } = req.body;

    const sql = 'INSERT INTO accounts (email, password) VALUES (?, ?)';
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error('Database error:', err); // 👈 See the real error
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});

module.exports = router;
