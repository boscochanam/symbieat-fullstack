const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const items = require('./routes/items');
const users = require('./routes/users');
const locations = require('./routes/locations');

mongoose.connect('mongodb+srv://boscochanam:das@cluster0.atrki9d.mongodb.net/symbieat_database?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

router.use('/items', items);
router.use('/users', users);
router.use('/locations', locations);

module.exports = router;