import React from 'react';
import "../static/style.css";

function ReviewPopup({ show, message }) {
  // Define the style for the ReviewPopup container
  

  return (
    <div className = {`popup ${show ? 'active' : ''}`}>
      <p> Review Submitted </p>
    </div>
  );
}

export default ReviewPopup;
