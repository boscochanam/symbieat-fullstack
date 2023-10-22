import React, { useState } from 'react';
import Popup from './Popup';
import FoodRating from './FoodRating';
import './FoodItemCard.css';

function FoodItemCard(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [rating, setRating] = useState(0);

  const handleAddToCart = () => {
    props.addToCart(props);
    props.addToTotal(props.price);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 700);
  };

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="food-item-card">
      <div className="food-item-image-container">
        <img src={props.imageSrc} alt={props.title} className="food-item-image" />
      </div>
      <div className="food-details">
        <h3 className="food-title">{props.title}</h3>
        <p className="food-description">{props.description}</p>
        <p className="food-price">&#8377; {props.price}</p>
        <FoodRating rating={rating} onClick={handleStarClick} />
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      <Popup show={showPopup} message={`${props.title} added to cart!`} />
    </div>
  );
}

export default FoodItemCard;
