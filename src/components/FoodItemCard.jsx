import React, { useState } from 'react';
import './FoodRating.css'; // Reuse the existing CSS file for styling

function FoodItemCard(props) {
  const [rating, setRating] = useState(props.initialRating || 0); // Use initialRating prop if available
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (starRating) => {
    setRating(starRating);

    // Pass the new rating to the parent component (FoodItems)
    props.onRatingChange(props.title, starRating);
  };

  const handleStarHover = (starRating) => {
    setHoveredRating(starRating);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const renderStars = () => {
    const starIcons = [];

    for (let i = 1; i <= 5; i++) {
      starIcons.push(
        <span
          key={i}
          className={`star ${i <= (hoveredRating || rating) ? 'selected' : ''}`}
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

  return (
    <div className="food-item-card">
      <img src={props.imageSrc} style={{ height: '300px' }} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">&#8377; {props.price}</p>
        <div className="stars">{renderStars()}</div>
        <button className="btn btn-dark" onClick={props.handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default FoodItemCard;
