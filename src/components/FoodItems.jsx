import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodItemCard from './FoodItemCard';

function FoodItems(props) {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Make a GET request to your Express backend to fetch food items
    axios.get('/api/items')
      .then((response) => {
        setFoodItems(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching food items:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {foodItems.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            {/* Pass the item details to the FoodItemCard component */}
            <FoodItemCard
              title={item.name}
              description="Description of the food item"
              price={item.price}
              imageSrc="URL of the food item image"
              addToCart={props.addToCart}
              addToTotal={props.addToTotal}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodItems;
