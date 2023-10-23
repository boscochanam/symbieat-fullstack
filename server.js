const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const app = express();
const api = require('./api/api.js');
const userModel = require('./api/models/users.model'); // Import your user model

// Middleware to protect a route
function requireAuthentication(req, res, next) {
  if (req.session.user) {
    // User is authenticated, proceed to the next middleware or route.
    next();
  } else {
    // User is not authenticated, send an error response.
    res.status(401).json({ message: 'Unauthorized' });
  }
}

app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.json());
app.use(cors());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username, password });

    if (user) {
      req.session.user = user; // Store the user in the session
      res.status(200).json({ success: true, username: user.username, balance: user.balance });
    } else {
      res.status(401).json({ success: false, message: 'Invalid PRN or password.' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/get-balance', requireAuthentication, (req, res) => {
  const user = req.session.user;
  if (user) {
    res.status(200).json({ balance: user.balance });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.post('/update-balance', (req, res) => {
  const { newBalance } = req.body;
  const username = req.session.user.username; // Get the username from the session

  if (!username || newBalance === null) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Update the user's balance using the updateOne method
  User.updateOne({ username: username }, { $set: { balance: newBalance } }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.nModified === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's balance in the session
    req.session.user.balance = newBalance;

    // Respond with a success message
    res.status(200).json({ message: 'Balance updated successfully' });
  });
});









app.use('/api', api);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
