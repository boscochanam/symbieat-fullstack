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
    <div className="card" >
      <img src={props.imageSrc} style={{ height: '300px' }} className="card-img-top"  alt={props.title} />
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
      imageSrc: 'https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900',
    },
    {
      title: 'Pizza',
      description: 'Freshly baked pizza with your favorite toppings',
      price: 400,
      imageSrc: 'https://www.allrecipes.com/thmb/iXKYAl17eIEnvhLtb4WxM7wKqTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg',
    },
    {
      title: 'Fries',
      description: 'Freshly baked pizza with your favorite toppings',
      price: 400,
      imageSrc: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/03/French-fries-b9e3e0c.jpg?resize=768,574',
    },
    {
      title: 'Sushi',
      description: 'Delightful sushi rolls with fresh ingredients',
      price: 600,
      imageSrc: 'https://thumbs.dreamstime.com/b/sushi-rolls-ai-generated-illustration-variations-269801858.jpg',
    },
    {
      title: 'Salad',
      description: 'Healthy and colorful salad with a variety of veggies',
      price: 250,
      imageSrc: 'https://www.sidechef.com/recipe/7af3f6a6-bfe6-4edd-9dfa-326c3c8cbb5c.jpg',
    },
    {
      title: 'Ramen',
      description: 'Juicy and tender steak cooked to perfection',
      price: 800,
      imageSrc: 'https://i0.wp.com/thefoodiediaries.co/wp-content/uploads/2020/08/Spicy-Ramen.jpg?ssl=1',
    },
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
