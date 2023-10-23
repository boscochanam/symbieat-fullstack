const express = require('express');
const userModel = require('../models/users.model'); // Import the correct user model
const router = express.Router();

function requireAuthentication(req, res, next) {
  if (req.session.user) {
    // User is authenticated, proceed to the next middleware or route.
    next();
  } else {
    // User is not authenticated, send an error response.
    res.status(401).json({ message: 'Unauthorized' });
  }
}

// Define a route to handle user login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userModel.findOne({ username, password });
        req.session.user = user;
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

// Define a route to get the user's balance
router.get('/get-balance', requireAuthentication, (req, res) => {
  const user = req.session.user;
  if (user) {
    res.status(200).json({ balance: user.balance });
  } else {
    
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// router.post('/update-balance', async (req, res) => {
//   const { newBalance } = req.body;
//   const { username } = props.loginState; // Get the username of the logged-in user

//   try {
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     user.balance = newBalance;
//     await user.save();

//     res.status(200).json({ message: 'Balance updated successfully' });
//   } catch (error) {
//     console.error('Error updating balance:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
module.exports = router;
