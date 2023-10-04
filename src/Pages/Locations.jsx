import React from 'react';
import Header from '../components/Header';
import hilltop from '../static/symbieat_images/hilltop.jfif';
import lhbc from '../static/symbieat_images/lhbc.jpg';
import sicsr from '../static/symbieat_images/sicsr.jpg';
import smcw from '../static/symbieat_images/smcw.jpg';
import viman_nagar from '../static/symbieat_images/viman_nagar.jpg';
import scms from '../static/symbieat_images/scms.jpg';
import Footer from '../components/Footer';

function Locations(props) {
  const locations = [
    {
      title: 'Lavale Hillbase Campus',
      description: 'This is the Lavale Hillbase Campus description.',
      imageSrc: lhbc,
    },
    {
      title: 'SMCW Cafeteria',
      description: 'This is the SMCW Cafeteria description.',
      imageSrc: smcw,
    },
    {
      title: 'Hilltop Campus',
      description: 'This is the Hilltop Campus description.',
      imageSrc: hilltop,
    },
    {
      title: 'SYMBIEAT at SICSR & SiG.',
      description: 'This is the SYMBIEAT at SICSR & SiG. description.',
      imageSrc: sicsr,
    },
    {
      title: 'Viman Nagar',
      description: 'This is the Viman Nagar description.',
      imageSrc: viman_nagar,
    },
    {
      title: 'SCMS',
      description: 'This is the Viman Nagar description.',
      imageSrc: scms,
    },
  ];

  // Set a fixed height for the images
  const imageStyle = {
    height: '300px',
    objectFit: 'cover',
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

      {/* Black section with "Menu" */}
      <div className="menu-section mb-5" style={menuStyle}>
        <h1 className="text-center text-white">Locations</h1>
      </div>

      <div className="locations-page">
        {/* <h1 className="text-center">Our Locations</h1> */}
        <div className="row justify-content-center">
          {locations.map((location, index) => (
            <div className="col-md-4 mb-4 px-2" key={index}>
              {/* Add margin to the card */}
              <div className="card">
                <img
                  src={location.imageSrc}
                  className="card-img-top"
                  alt={location.title}
                  style={imageStyle}
                />
                <div className="card-body">
                  <h5 className="card-title">{location.title}</h5>
                  <p className="card-text">{location.description}</p>
                </div>
              </div>
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
