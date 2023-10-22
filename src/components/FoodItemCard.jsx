import React, { useState } from 'react';
import Popup from './Popup';
import FoodRating from './FoodRating'; // If you have a component for displaying ratings
// import './FoodItemCard.css'; // You can create a separate CSS file for styling

function FoodItemCard(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [rating, setRating] = useState(0); // Initialize rating state

  const handleAddToCart = () => {
    // Call both addToCart and addToTotal when the button is clicked
    props.addToCart(props);
    props.addToTotal(props.price); // Pass the item's price to addToTotal
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 700);
  };

  // Handler to update the rating when a star is clicked
  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="food-item-card">
      <img src={props.imageSrc} alt={props.title} />
      <div className="food-details">
        <h3 className="food-title">{props.title}</h3>
        <p className="food-description">{props.description}</p>
        <p className="food-price">&#8377; {props.price}</p>
        <FoodRating rating={rating} onClick={handleStarClick} /> {/* Display star rating */}
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      <Popup show={showPopup} message={`${props.title} added to cart!`} />
    </div>
  );
}

export default FoodItemCard;
