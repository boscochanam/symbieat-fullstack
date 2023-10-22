import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodItemCard from './FoodItemCard';

function FoodItems(props) {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Make a GET request to your Express backend to fetch food items
    axios.get('/api/items')
      .then((response) => {
        // Sort the data by purchasedCount in descending order
        const sortedFoodItems = response.data.sort((a, b) => b.purchasedCount - a.purchasedCount);
        // Take only the top 6 items
        const topSixFoodItems = sortedFoodItems.slice(0, 6);
        setFoodItems(topSixFoodItems);
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
            <FoodItemCard
              title={item.title}
              description={item.description}
              price={item.price}
              imageSrc={item.imageSrc}
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
