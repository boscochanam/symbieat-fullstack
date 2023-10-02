import React, { useState } from 'react';
import Header from '../components/Header';
import FoodItems from '../components/FoodItems';
import LocationSection from '../components/LocationSection';
import Carousel from '../components/Carousel';

function Home() {

    // Cart State for Adding Items to Cart
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Define the addToCart function
  const addToCart = () => {
    // Increment the cart count when an item is added
    setCartCount(cartCount + 1);
  };

  const addToTotal = (amt) => {
    // Increment the cart count when an item is added
    setCartTotal(cartTotal + amt);
  };

  return (
    <div>
      <div className = "navbar-container">
        <Header cartCount={cartCount} setCartCount={setCartCount} cartTotal={cartTotal} setCartTotal={setCartTotal}/>
      </div>
      <LocationSection />
      <div className="container text-center">
        <Carousel />
      </div>
      {/* Pass the addToCart function to FoodItems */}
      <FoodItems addToCart={addToCart} addToTotal={addToTotal}/>
    </div>
  )
}

export default Home