import React from 'react';

import "../static/style.css";

function Popup({ show, message }) {
  return (
    <div className={`popup ${show ? 'active' : ''}`}>
      <p>{message}</p>
    </div>
  );
}

export default Popup;