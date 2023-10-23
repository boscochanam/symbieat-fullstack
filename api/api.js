const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const itemsRouter = require('./routes/items');
const usersRouter = require('./routes/users');
const locationsRouter = require('./routes/locations');
const reviewsRouter = require('./routes/reviews');

mongoose.connect('mongodb+srv://boscochanam:das@cluster0.atrki9d.mongodb.net/symbieat_database?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

router.use('/items', itemsRouter);
router.use('/users', usersRouter);
router.use('/locations', locationsRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;
