import React from 'react';

function LocationSection() {
  const sectionStyle = {
    backgroundColor: '#FF4c4C',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '50vh', // Adjust this value to control the minimum height
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <section className="location-section mb-3" style={sectionStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <h2 class = "text-light">Find your nearest Symbieat</h2>
            <p  class = "text-white">Enter your location to find out the closest Symbieat location.</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter your location" aria-label="Enter your location" />
              <button className=" btn btn-dark" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
