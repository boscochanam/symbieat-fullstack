import React, { useState } from 'react';

function LocationSection() {
  const sectionStyle = {
    backgroundColor: '#FF4c4C',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '50vh',
    display: 'flex',
    alignItems: 'center',
  };

  // Define available locations
  const availableLocations = [
    "Lavale Hillbase Campus",
    "SMCW Cafeteria",
    "Hilltop Campus",
    "SYMBIEAT at SICSR & SiG.",
    "Viman Nagar",
  ];

  // State to track the selected location
  const [selectedLocation, setSelectedLocation] = useState("");

  // State to track whether the location dropdown is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle location selection
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false); // Close the dropdown
  };

  // Function to reset the selected location
  const resetLocation = () => {
    setSelectedLocation("");
  };

  return (
    <section className="location-section mb-3" style={sectionStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <h2 className="text-light">Find your nearest Symbieat</h2>
            <p className="text-white">Select a location to find out the closest Symbieat location.</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="-- Select your location --"
                aria-label="-- Select your location --"
                onClick={toggleDropdown} // Open the dropdown on input click
                value={selectedLocation} // Display the selected location in the input field
                readOnly // Make the input field read-only
              />
              <button className="btn btn-dark" type="button">Search</button>
              <button className="btn btn-dark" type="button" onClick={resetLocation}>Reset</button>
            </div>
            {/* Location dropdown (floats over content) */}
            {isDropdownOpen && (
              <ul className="list-group" style={{ position: 'absolute', zIndex: 1 }}>
                {availableLocations.map((location, index) => (
                  <li
                    className="list-group-item"
                    key={index}
                    onClick={() => handleLocationSelect(location)} // Handle location selection
                  >
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
