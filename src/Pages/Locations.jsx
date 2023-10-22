import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Locations(props) {
  // Define a state variable to store the location data
  const [locations, setLocations] = useState([]);

  // Make an API request to fetch location data when the component mounts
  useEffect(() => {
    // Make a GET request to your API endpoint (e.g., /api/locations)
    axios.get('/api/locations')
      .then((response) => {
        setLocations(response.data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching location data:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once

  // Set a fixed height for the images
  const imageStyle = {
    height: '300px',
    objectFit: 'cover',
  };

  // CSS rule to remove underline from anchor elements
  const anchorStyle = {
    textDecoration: 'none',
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
          setLoginState={props.loginState}
          login={props.login}
        />
      </div>

      {/* Black section with "Locations" */}
      <div className="menu-section mb-5" style={menuStyle}>
        <h1 className="text-center text-white">Locations</h1>
      </div>

      <div className="locations-page">
        <div className="row justify-content-center">
          {locations.map((location, index) => (
            <div className="col-md-4 mb-4 px-2" key={index}>
              <a href={location.image} target="_blank" rel="noopener noreferrer" style={anchorStyle}>
                <div className="card">
                  <img
                    src={location.image}
                    className="card-img-top"
                    alt={location.name}
                    style={imageStyle}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <p className="card-text">{location.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

const menuStyle = {
  backgroundColor: '#2D2D2D', // Black background color
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Locations;
