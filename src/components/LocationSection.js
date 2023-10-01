import React from 'react';

function LocationSection() {
  return (
    <section className="location-section mt-5 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <h2>Find your nearest Symbieat</h2>
            <p>Enter your location to find out the closest Symbieat location.</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter your location" aria-label="Enter your location" />
              <button className="btn btn-primary" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
