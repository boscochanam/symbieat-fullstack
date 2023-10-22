const express = require('express');
const userModel = require('../models/users.model'); // Import the correct user model
const router = express.Router();

// Define a route to handle user login
router.post('/', async (req, res) => {
    const { username, password } = req.body; // Get the username and password from the request body

    try {
        const user = await userModel.findOne({ username, password }); // Query the database for the user

        if (user) {
            // User found, send a success response
            res.status(200).json({ success: true, username: user.username });
        } else {
            // User not found, send a failure response
            res.status(401).json({ success: false, message: 'Invalid PRN or password.' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
