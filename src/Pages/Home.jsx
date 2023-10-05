import React from 'react';
import Header from '../components/Header';
import FoodItems from '../components/FoodItems';
import LocationSection from '../components/LocationSection';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

// Import images
import swiggyImage from '../static/social_media_icons/swiggy.png';
import zomatoImage from '../static/social_media_icons/zomato.png';
import googleImage from '../static/social_media_icons/google.png';

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
          setLoginState={props.loginState}
          login={props.login}
        />
      </div>
      <LocationSection />
      <div className="container text-center">
        <Carousel />
      </div>

      {/* Add the "Best Seller" heading */}
      <div className="container text-center mt-4">
        <h2 style={{ borderTop: '2px solid', borderBottom: '2px solid', fontWeight: 'bold', fontSize: '250%' }}>Best Sellers</h2>
      </div>

      {/* Pass the addToCart function to FoodItems */}
      <FoodItems
        addToCart={props.addToCart}
        addToTotal={props.addToTotal}
      />

      {/* Add testimonials */}
      <div className="container text-center mt-4">
        <h2 style={{ borderTop: '2px solid', borderBottom: '2px solid', fontWeight: 'bold', fontSize: '250%' }}>Trusted by many</h2>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-box" style={{ border: '2px solid black', padding: '10px' }}>
              <img src={swiggyImage} alt="Swiggy" className="testimonial-image" style={{ maxWidth: '4%', maxHeight: '4%' }} />
              <div className="testimonial-content">
                <p className="testimonial-name">Swiggy</p>
                <p className="testimonial-rating">Rating: 5/5</p>
                <p className="testimonial-text">
                  "It’s a great experience. The ambiance is very welcoming and charming. Amazing food and service. Staff are extremely knowledgeable and make great recommendations."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-box" style={{ border: '2px solid black', padding: '10px' }}>
              <img src={zomatoImage} alt="Zomato" className="testimonial-image" style={{ maxWidth: '25%', maxHeight: '7%' }} />
              <div className="testimonial-content">
                <p className="testimonial-name">Zomato</p>
                <p className="testimonial-rating">Rating: 4/5</p>
                <p className="testimonial-text">
                  "Excellent food. Menu is extensive and seasonal to a particularly high standard. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="testimonial-box" style={{ border: '2px solid black', padding: '10px' }}>
              <img src={googleImage} alt="Google" className="testimonial-image" style={{ maxWidth: '5%', maxHeight: '5%' }} />
              <div className="testimonial-content">
                <p className="testimonial-name">Google</p>
                <p className="testimonial-rating">Rating: 5/5</p>
                <p className="testimonial-text">
                  "This spot gives extraordinary service and yummy meals. One of my favourite restaurants around town. The meals served rapidly and the rates were reasonable. Highly recommended."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

export default Home;