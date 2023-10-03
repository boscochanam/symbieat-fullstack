import React from 'react';
import Header from '../components/Header';
import FoodItems from '../components/FoodItems';
import LocationSection from '../components/LocationSection';
import Carousel from '../components/Carousel';

function Home(props) {
  return (
    <div>
      <div className="navbar-container">
        <Header
          cartCount={props.cartCount}
          setCartCount={props.setCartCount}
          cartTotal={props.cartTotal}
          setCartTotal={props.setCartTotal}
          clearCart={props.clearCart}
        />
      </div>
      <LocationSection />
      <div className="container text-center">
        <Carousel />
      </div>
      {/* Pass the addToCart function to FoodItems */}
      <FoodItems
        addToCart={props.addToCart}
        addToTotal={props.addToTotal}
      />
    </div>
  );
}

export default Home;
