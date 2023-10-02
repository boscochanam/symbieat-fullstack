import React, { useState } from 'react';
import Popup from './Popup';
import FoodItemCard from './FoodItemCard'; // Import the FoodItemCard component
import pizza from '../static/food_images/pizza.jpg';
import burger from '../static/food_images/burger.webp';
import fries from '../static/food_images/fries.jpg';
import salad from '../static/food_images/salad.jpg';
import sushi from '../static/food_images/sushi.webp';
import ramen from '../static/food_images/ramen.webp';

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
      description: 'Freshly baked pizza with your favorite toppings',
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
      description: 'Healthy and colorful salad with a variety of veggies',
      price: 250,
      imageSrc: salad,
    },
    {
      title: 'Ramen',
      description: 'Juicy and tender steak cooked to perfection',
      price: 800,
      imageSrc: ramen,
    },
  ];

  // Create a state variable to track ratings for each food item
  const [foodItemRatings, setFoodItemRatings] = useState({});

  // Callback function to update the rating for a food item
  const handleRatingChange = (foodItemTitle, rating) => {
    setFoodItemRatings((prevRatings) => ({
      ...prevRatings,
      [foodItemTitle]: rating,
    }));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {foodItems.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            {/* Pass the addToCart function, addToTotal function, and foodItemRating to FoodItemCard */}
            <FoodItemCard
              {...item}
              addToCart={props.addToCart}
              addToTotal={props.addToTotal}
              initialRating={foodItemRatings[item.title] || 0} // Use initialRating prop
              onRatingChange={(rating) =>
                handleRatingChange(item.title, rating)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodItems;
