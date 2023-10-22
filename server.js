const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session'); // Require express-session
const path = require('path');
const app = express();
const api = require('./api/api');

// Configure express-session
app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // Store user data in the session after successful login
    req.session.user = user;
    res.status(200).json({ message: 'Authentication successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


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



app.use('/api', api);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
