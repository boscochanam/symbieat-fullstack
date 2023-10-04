import React, { useState } from 'react';
import Popup from './Popup';
import FoodRating from './FoodRating'; // Import the FoodRating component
import './FoodItems.css'; // Import the CSS file for FoodItems styling
import pizza from '../static/food_images/pizza.jpg';
import burger from '../static/food_images/burger.webp';
import fries from '../static/food_images/fries.jpg';
import salad from '../static/food_images/salad.jpg';
import sushi from '../static/food_images/sushi.webp';
import ramen from '../static/food_images/ramen.webp';

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
    <div className="card">
      <img src={props.imageSrc} style={{ height: '300px' }} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">&#8377; {props.price}</p>
        <FoodRating rating={rating} onClick={handleStarClick} /> {/* Display star rating */}
        <button className="btn btn-dark" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <Popup show={showPopup} message={`${props.title} added to cart!`} />
      </div>
    </div>
  );
}

function FoodItems(props) {
  const foodItems = [
    {
      title: 'Burger',
      description: 'Delicious burger with all the toppings',
      price: 300,
      imageSrc: burger,
    },
    {
      title: 'Pizza',
      description: 'Freshly baked pizza with your favorite toppings',
      price: 400,
      imageSrc: pizza,
    },
    {
      title: 'Fries',
      description: 'Crispy fries, made using organic potatoes',
      price: 400,
      imageSrc: fries,
    },
    {
      title: 'Sushi',
      description: 'Delightful sushi rolls with fresh ingredients',
      price: 600,
      imageSrc: sushi,
    },
    {
      title: 'Salad',
      description: 'Healthy and colorful salad ',
      price: 250,
      imageSrc: salad,
    },
    {
      title: 'Ramen',
      description: 'Straight from Japan',
      price: 800,
      imageSrc: ramen,
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {foodItems.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <FoodItemCard {...item} addToCart={props.addToCart} addToTotal={props.addToTotal} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodItems;
