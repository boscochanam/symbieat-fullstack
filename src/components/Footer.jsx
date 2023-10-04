import React from 'react';
import facebookIcon from '../static/social_media_icons/facebook.png';
import instagramIcon from '../static/social_media_icons/instagram.png';
import twitterIcon from '../static/social_media_icons/twitter.png';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
  };

  const headingStyle = {
    color: '#fff',
    fontSize: '24px',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '18px',
    marginBottom: '5px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    textAlign: 'right', // Align the list to the right
  };

  const listItemStyle = {
    display: 'inline',
    marginLeft: '10px', // Add some space between icons
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 style={headingStyle}>Contact Us</h3>
            <p style={textStyle}>Email: symbieat@symbiosis.edu.in</p>
            <p style={textStyle}>Phone: +91 8649537920</p>
          </div>
          <div className="col-md-6">
            <h3 style={{ ...headingStyle, textAlign: 'right' }}>Follow Us</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <a href="https://www.facebook.com" style={linkStyle}>
                  <img src={facebookIcon} alt="Facebook" width="24" height="24" />
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="https://www.twitter.com" style={linkStyle}>
                  <img src={twitterIcon} alt="Twitter" width="24" height="24" />
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="https://www.instagram.com" style={linkStyle}>
                  <img src={instagramIcon} alt="Instagram" width="24" height="24" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;