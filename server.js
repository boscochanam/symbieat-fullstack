const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const app = express();
const api = require('./api/api');
const userModel = require('./models/users.model'); // Import your user model

app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.json());
app.use(cors());

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

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await userModel.findOne({ username, password });

    if (user) {
      req.session.user = user;
      res.status(200).json({ success: true, username: user.username, balance: user.balance });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
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


app.use('/api', api);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
