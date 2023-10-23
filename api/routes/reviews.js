const express = require('express');
const router = express.Router();
const Review = require('../models/reviews.model');

// GET route to fetch all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST route to submit a review
router.post('/', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Review text is required' });
  }

  try {
    const newReview = new Review({ review: text });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error posting review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
