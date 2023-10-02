import React, { useState } from 'react';
import Popup from '../components/Popup';
import Header from '../components/Header';
import pizza from '../static/food_images/pizza.jpg';
import burger from '../static/food_images/burger.webp';
import fries from '../static/food_images/fries.jpg';
import salad from '../static/food_images/salad.jpg';
import sushi from '../static/food_images/sushi.webp';
import ramen from '../static/food_images/ramen.webp';
import cucumber from '../static/food_images/cucumber_gimlet.jpg'
import berry from '../static/food_images/berry_burlesque.jpg'
import ginger from '../static/food_images/shirley_ginger.jpg'

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
    <div>
      <div className="card">
        <img src={props.imageSrc} style={{ height: '300px' }} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">&#8377; {props.price}</p>
          <button className="btn btn-dark" onClick={handleAddToCart}>Add to Cart</button>
          <Popup show={showPopup} message={`${props.title} added to cart!`} /> {/* Add the Popup component */}
        </div>
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
    {
      title: 'Virgin Cucumber Gimlet',
      description: 'Soda, slices of cucumber, lime juice, simple syrup',
      price: 150,
      imageSrc: cucumber,
    },
    {
      title: 'Shirley Ginger',
      description: 'Lemon Lime Ginger Syrup, club soda, lime juice',
      price: 800,
      imageSrc: ginger,
    },
    {
      title: 'Berry Burlesque',
      description: 'Lime juice, honey syrup, black currant, mint leaves',
      price: 800,
      imageSrc: berry,
    },
  ];

  return (
    <div>
      <div className="navbar-container">
        {/* Render the Header component */}
        <Header
          cartCount={props.cartCount}
          setCartCount={props.setCartCount}
          cartTotal={props.cartTotal}
          setCartTotal={props.setCartTotal}
        />
      </div>
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
    </div>
  );
}

export default FoodItems;
