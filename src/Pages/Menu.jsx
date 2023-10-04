import React, { useState } from 'react';
import Popup from '../components/Popup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodRating from '../components/FoodRating'; // Import the FoodRating component
import '../components/FoodRating.css'; // Import the CSS file for FoodRating styling
import pizza from '../static/food_images/pizza.jpg';
import burger from '../static/food_images/burger.webp';
import fries from '../static/food_images/fries.jpg';
import salad from '../static/food_images/salad.jpg';
import sushi from '../static/food_images/sushi.webp';
import ramen from '../static/food_images/ramen.webp';
import cucumber from '../static/food_images/cucumber_gimlet.jpg';
import berry from '../static/food_images/berry_burlesque.jpg';
import ginger from '../static/food_images/shirley_ginger.jpg';
import bisleri from '../static/food_images/bisleri.jpg';
import coca_cola from '../static/food_images/coca_cola.jpg';
import maaza from '../static/food_images/maaza.jpg';
import momos from '../static/food_images/momos.jpg';
import paneer_roll from '../static/food_images/paneer_roll.jpg';
import veg_thali from '../static/food_images/veg_thali.jpg';

function FoodItemCard(props) {
  const [showPopup, setShowPopup] = useState(false);

  // Handler to update the rating when a star is clicked
  const handleStarClick = (newRating) => {
    props.onClick(newRating); // Call the onClick function from props to update the rating
  };

  const handleAddToCart = () => {
    // Call both addToCart and addToTotal when the button is clicked
    props.addToCart(props);
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
          <FoodRating rating={props.rating} onClick={handleStarClick} /> {/* Display star rating */}
          <button className="btn btn-dark" onClick={handleAddToCart}>Add to Cart</button>
          <Popup show={showPopup} message={`${props.title} added to cart!`} />
        </div>
      </div>
    </div>
  );
}

function Menu(props) {
  const [foodItems, setFoodItems] = useState([
    {
      id: 1,
      title: 'Burger',
      description: 'Delicious burger with all the toppings',
      price: 300,
      imageSrc: burger,
      rating: 0, // Initialize the rating for this item
    },
    {
      id: 2,
      title: 'Pizza',
      description: 'Freshly baked pizza with your favorite toppings',
      price: 400,
      imageSrc: pizza,
      rating: 0,
    },
    {
      id: 3,
      title: 'Fries',
      description: 'Crispy fries, made using organic potatoes and fresh salt',
      price: 400,
      imageSrc: fries,
      rating: 0,
    },
    {
      id: 4,
      title: 'Sushi',
      description: 'Delightful sushi rolls with fresh ingredients',
      price: 600,
      imageSrc: sushi,
      rating: 0,
    },
    {
      id: 5,
      title: 'Salad',
      description: 'Healthy and colorful salad',
      price: 250,
      imageSrc: salad,
      rating: 0,
    },
    {
      id: 6,
      title: 'Ramen',
      description: 'Juicy and tender steak cooked to perfection',
      price: 800,
      imageSrc: ramen,
      rating: 0,
    },
    {
      id: 7,
      title: 'Virgin Cucumber Gimlet',
      description: 'Soda, slices of cucumber, simple syrup',
      price: 150,
      imageSrc: cucumber,
      rating: 0,
    },
    {
      id: 8,
      title: 'Shirley Ginger',
      description: 'Lemon Lime Ginger Syrup, club soda, lime juice',
      price: 800,
      imageSrc: ginger,
      rating: 0,
    },
    {
      id: 9,
      title: 'Berry Burlesque',
      description: 'Lime juice, honey syrup, black currant',
      price: 800,
      imageSrc: berry,
      rating: 0,
    },
    {
      id: 10,
      title: 'Bisleri',
      description: 'Pure and refreshing bottled water for instant hydration',
      price: 20,
      imageSrc: bisleri,
      rating: 0,
    },
    {
      id: 11,
      title: 'Coca Cola',
      description: 'Classic carbonated beverage with a fizzy, sweet taste',
      price: 20,
      imageSrc: coca_cola,
      rating: 0,
    },
    {
      id: 12,
      title: 'Maaza',
      description: "Tropical mango juice that's a burst of fruity goodness",
      price: 20,
      imageSrc: maaza,
      rating: 0,
    },
    {
      id: 13,
      title: 'Paneer Roll',
      description: 'Soft flatbread filled with succulent paneer and flavorful spices',
      price: 100,
      imageSrc: paneer_roll,
      rating: 0,
    },
    {
      id: 14,
      title: 'Momos',
      description: 'Delicate dumplings filled with a delicious mixture of meat or vegetables',
      price: 60,
      imageSrc: momos,
      rating: 0,
    },
    {
      id: 15,
      title: 'Veg Thali',
      description: 'A delightful platter featuring an assortment of vegetarian dishes',
      price: 80,
      imageSrc: veg_thali,
      rating: 0,
    },
  ]);

  // Handler to update the rating for a specific item
  const handleStarClick = (newRating, itemId) => {
    // Clone the foodItems array to avoid mutating the original state
    const updatedFoodItems = [...foodItems];
    // Find the index of the item to update
    const itemIndex = updatedFoodItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      // Update the rating for the specific item
      updatedFoodItems[itemIndex].rating = newRating;
      // Update the state with the new ratings
      setFoodItems(updatedFoodItems);
    }
  };

  const menuStyle = {
    backgroundColor: '#52CB8C', // Green background color
    minHeight: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      <div className="navbar-container">
        {/* Render the Header component */}
        <Header
          cartCount={props.cartCount}
          setCartCount={props.setCartCount}
          cartTotal={props.cartTotal}
          setCartTotal={props.setCartTotal}
          clearCart={props.clearCart}
          loginState={props.loginState}
          setLoginState = {props.loginState}
          login = {props.login}
        />
      </div>
      <div className="menu-section" style={menuStyle}>
        <h1 className="text-center text-white">Menu</h1>
      </div>
      <div className="container mt-4">
        <div className="row">
          {foodItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              {/* Pass the addToCart and handleStarClick functions to FoodItemCard */}
              <FoodItemCard
                {...item}
                addToCart={props.addToCart}
                addToTotal={props.addToTotal}
                onClick={(newRating) => handleStarClick(newRating, item.id)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

export default Menu;
