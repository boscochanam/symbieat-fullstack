import React, { useState } from 'react';
import './FoodRating.css'; // Import the CSS file for FoodRating styling

function FoodRating(props) {
  const [hoveredStar, setHoveredStar] = useState(null);

  // Function to handle the mouse enter event on a star
  const handleStarHover = (starIndex) => {
    setHoveredStar(starIndex);
  };

  // Function to handle the mouse leave event on a star
  const handleStarLeave = () => {
    setHoveredStar(null); // Clear the hover state when the mouse leaves
  };

  // Function to handle the click event on a star
  const handleStarClick = (starIndex) => {
    props.onClick(starIndex); // Update the rating when a star is clicked
  };

  // Generate stars based on the rating or hovered state
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass =
      i <= (hoveredStar || props.rating) ? 'star filled' : 'star';
    stars.push(
      <span
        key={i}
        className={starClass}
        onMouseEnter={() => handleStarHover(i)}
        onMouseLeave={handleStarLeave}
        onClick={() => handleStarClick(i)}
      >
        ★
      </span>
    );
  }

  return <div className="food-rating">{stars}</div>;
}

export default FoodRating;
