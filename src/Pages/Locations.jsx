import React from 'react';
import Header from '../components/Header';
import hilltop from '../static/symbieat_images/hilltop.jfif';
import lhbc from '../static/symbieat_images/lhbc.jpg';
import sicsr from '../static/symbieat_images/sicsr.jpg';
import smcw from '../static/symbieat_images/smcw.jpg';
import viman_nagar from '../static/symbieat_images/viman_nagar.jpg';

function Locations(props) {

  const locations = [
    {
      title: 'Lavale Hillbase Campus',
      description: 'This is the Lavale Hillbase Campus description. Add your filler text here.',
      imageSrc: lhbc, // Add the imported image source
    },
    {
      title: 'SMCW Cafeteria',
      description: 'This is the SMCW Cafeteria description. Add your filler text here.',
      imageSrc: smcw, // Add the imported image source
    },
    {
      title: 'Hilltop Campus',
      description: 'This is the Hilltop Campus description. Add your filler text here.',
      imageSrc: hilltop, // Add the imported image source
    },
    {
      title: 'SYMBIEAT at SICSR & SiG.',
      description: 'This is the SYMBIEAT at SICSR & SiG. description. Add your filler text here.',
      imageSrc: sicsr, // Add the imported image source
    },
    {
      title: 'Viman Nagar',
      description: 'This is the Viman Nagar description. Add your filler text here.',
      imageSrc: viman_nagar, // Add the imported image source
    },
  ];

  return (
    <div>
      <div className="navbar-container">
        {/* Render the Header component */}
        <Header
          cartCount={props.cartCount}
          setCartCount={props.setCartCount}
          cartTotal={props.cartTotal}
          setCartTotal={props.setCartTotal}
        />
      </div>

      {/* Black section with "Menu" */}
      <div className="menu-section mb-5" style={menuStyle}>
        <h1 className="text-center text-white">Locations</h1>
      </div>

      <div className="locations-page ">
        <h1 className="text-center">Our Locations</h1>
        <div className="row justify-content-center col-md-9">
          {locations.map((location, index) => (
            <div className="col-md-4 mb-4" key={index}>
              {/* Add margin to the card */}
              <div className="card my-3 ">
                
                <img
                  src={location.imageSrc}
                  className="card-img-top"
                  alt={location.title}
                  style={{ height: '300px', objectFit: 'cover' }}
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
