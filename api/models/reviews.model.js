const { ViewModuleSharp } = require('@material-ui/icons');
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

