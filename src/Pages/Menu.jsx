import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for API requests
import FoodItemCard from '../components/FoodItemCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/FoodRating.css'; // Import the CSS file for FoodRating styling

function Menu(props) {
  const [foodItems, setFoodItems] = useState([]);

  // Function to fetch menu items from the API
  const fetchMenuItems = () => {
    axios.get('/api/items') // Replace with your API endpoint
      .then((response) => {
        setFoodItems(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching menu items:', error);
      });
  };

  useEffect(() => {
    fetchMenuItems(); // Fetch menu items when the component mounts
  }, []);

  const handleStarClick = (newRating, itemId) => {
    // Implement the code to update the rating of a specific menu item
    // You can use the newRating and itemId to update the rating of the item
    // This code will depend on how your backend API handles rating updates.
  };

  const menuStyle = {
    backgroundColor: '#52CB8C',
    minHeight: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      <div className="navbar-container">
        <Header
          cartCount={props.cartCount}
          setCartCount={props.setCartCount}
          cartTotal={props.cartTotal}
          setCartTotal={props.setCartTotal}
          clearCart={props.clearCart}
          loginState={props.loginState}
          setLoginState={props.setLoginState}
          login={props.login}
        />
      </div>
      <div className="menu-section" style={menuStyle}>
        <h1 className="text-center text-white">Menu</h1>
      </div>
      <div className="container mt-4">
        <div className="row">
          {foodItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
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
      <Footer />
    </div>
  );
}

export default Menu;
