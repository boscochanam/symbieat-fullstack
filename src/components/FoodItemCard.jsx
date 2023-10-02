import React, { useState } from 'react';
import './FoodRating.css'; // Reuse the existing CSS file for styling

function FoodItemCard(props) {
  const [rating, setRating] = useState(props.initialRating || 0);
  const [hasRated, setHasRated] = useState(false); // State variable to track if the item has been rated
  const [allRatings, setAllRatings] = useState([]); // State variable to store all ratings
  const [hoveredStar, setHoveredStar] = useState(null); // State variable to track hovered star

  const handleStarClick = (starRating) => {
    setRating(starRating);
    setHasRated(true); // Set hasRated to true when the item is rated

    // Add the new rating to the list of all ratings
    setAllRatings([...allRatings, starRating]);

    // Pass the new rating to the parent component (FoodItems)
    props.onRatingChange(props.title, starRating);
  };

  const handleStarHover = (starRating) => {
    setHoveredStar(starRating);
  };

  const handleStarLeave = () => {
    setHoveredStar(null);
  };

  const renderStars = () => {
    const starIcons = [];

    for (let i = 1; i <= 5; i++) {
      starIcons.push(
        <span
          key={i}
          className={`star small-star ${i <= (hoveredStar || rating) ? 'selected' : ''}`}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          onMouseLeave={handleStarLeave}
        >
          &#9733;
        </span>
      );
    }

    return starIcons;
  };

  const calculateAverageRating = () => {
    if (allRatings.length === 0) {
      return 0; // Default to 0 if no ratings yet
    }

    const sum = allRatings.reduce((acc, curr) => acc + curr, 0);
    return sum / allRatings.length;
  };

  const getRatingColor = (value) => {
    if (value >= 4) {
      return 'dark-green';
    } else if (value >= 3) {
      return 'light-green';
    } else if (value >= 2) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const renderRatingInfo = () => {
    if (hasRated) {
      // If the item has been rated, render the boxes with average and user's rating
      const averageRating = calculateAverageRating();

      return (
        <div className="rating-info">
          <div className={`small-rating-box ${getRatingColor(averageRating)}`}>
            <p className="small-rating-text">Average Rating: {averageRating.toFixed(1)}</p>
          </div>
          <div className={`small-rating-box ${getRatingColor(rating)}`}>
            <p className="small-rating-text">Your Rating: {rating.toFixed(1)}</p>
          </div>
          <p className="feedback-message">Thank you for feedback</p>
        </div>
      );
    } else {
      // If the item has not been rated, render the star rating
      return (
        <div className="stars">
          {renderStars()}
        </div>
      );
    }
  };

  return (
    <div className="food-item-card">
      <img src={props.imageSrc} style={{ height: '300px' }} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">&#8377; {props.price}</p>
        {renderRatingInfo()} {/* Display stars or rating info */}
        <button className="btn btn-dark" onClick={props.handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default FoodItemCard;
