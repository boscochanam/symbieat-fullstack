const express = require('express');
const userModel = require('../models/users.model'); // Import the correct user model
const router = express.Router();

// Define a route to handle user login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userModel.findOne({ username, password });

        if (user) {
            // Include user data, including balance, in the response for a successful login
            res.status(200).json({ success: true, user });
            console.log('User logged in:', user); // Log the user object

        } else {
            res.status(401).json({ success: false, message: 'Invalid PRN or password.' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/get-balance', async (req, res) => {
  // Ensure the user is authenticated or implement authentication as needed

  try {
    // Retrieve the user's balance based on their session or authentication
    if (req.session.user) {
      const user = await userModel.findById(req.session.user._id);
      if (user) {
        res.status(200).json({ balance: user.balance });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
