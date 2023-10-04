import React from 'react';
import Header from '../components/Header';
import FoodItems from '../components/FoodItems';
import LocationSection from '../components/LocationSection';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

function Home(props) {
  return (
    <div>
      <div className="navbar-container">
        {/* Render the Header component and pass props for cart functionality */}
        <Header
          cartCount={props.cartCount}
          setCartCount={props.setCartCount}
          cartTotal={props.cartTotal}
          setCartTotal={props.setCartTotal}
          clearCart={props.clearCart}
        />
      </div>
      {/* Render the LocationSection component */}
      <LocationSection />
      <div className="container text-center">
        {/* Render the Carousel component */}
        <Carousel />
      </div>
      {/* 
        Pass the addToCart function and addToTotal function as props to FoodItems component
        These props are used to manage the shopping cart functionality
      */}
      <FoodItems
        addToCart={props.addToCart}
        addToTotal={props.addToTotal}
      />

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

export default Home;
