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
      <LocationSection />
      <div className="container text-center">
        <Carousel />
      </div>
      {/* Pass the addToCart function to FoodItems */}
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