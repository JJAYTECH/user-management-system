require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Import the user routes (update the path if necessary)
const userRoutes = require('./routes/user.routes');


// Import DB and route files
const db = require('./db');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const accountRoute = require('./routes/account');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/accounts', accountRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
