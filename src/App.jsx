import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FoodItems from './components/FoodItems';
import LocationSection from './components/LocationSection';

function App() {
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
      <Header cartCount={cartCount} setCartCount={setCartCount} cartTotal={cartTotal} setCartTotal={setCartTotal}/>
      <LocationSection />
      {/* Pass the addToCart function to FoodItems */}
      <FoodItems addToCart={addToCart} addToTotal={addToTotal}/>
    </div>
  );
}

export default App;
