import React, { useState } from 'react';
import Popup from './Popup';

function FoodItemCard(props) {

  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    // Call both addToCart and addToTotal when the button is clicked
    props.addToCart();
    props.addToTotal(props.price); // Pass the item's price to addToTotal
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 700);
  };

  return (
    <div className="card">
      <img src={props.imageSrc} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">&#8377; {props.price}</p>
        <button className="btn btn-dark" onClick={handleAddToCart}>Add to Cart</button>
        <Popup show={showPopup} message={`${props.title} added to cart!`} /> {/* Add the Popup component */}
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
        imageSrc: 'https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900', // Updated path with a leading slash
      },
      {
        title: 'Pizza',
        description: 'Freshly baked pizza with your favorite toppings',
        price: 400,
        imageSrc: 'https://www.allrecipes.com/thmb/iXKYAl17eIEnvhLtb4WxM7wKqTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg', // Updated path with a leading slash
      },
      {
        title: 'Fries',
        description: 'Freshly baked pizza with your favorite toppings',
        price: 400,
        imageSrc: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/03/French-fries-b9e3e0c.jpg?resize=768,574', // Updated path with a leading slash
      }
      // Add more food items here
    ];
  
    return (
        <div className="container mt-4">
          <div className="row">
            {foodItems.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                {/* Pass the addToCart function to FoodItemCard */}
                <FoodItemCard {...item} addToCart={props.addToCart} addToTotal={props.addToTotal} />
                
              </div>
            ))}
          </div>
        </div>
      );
  }
  

export default FoodItems;
