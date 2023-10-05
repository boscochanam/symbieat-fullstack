import React, { useState } from 'react';
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

  const reviewStyle = {
    color: '#fff',
    fontSize: '24px',
    marginBottom: '10px',
    marginTop: '20px',
  };

  const reviewContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const reviewTextBoxStyle = {
    backgroundColor: 'white',
    color: '#333',
    padding: '10px',
    border: 'none',
    width: '100%',
    height: '100px',
    fontSize: '16px',
    marginBottom: '10px',
  };

  const postButtonStyle = {
    backgroundColor: 'lightgreen',
    color: '#333',
    padding: '10px',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  };

  const [reviewText, setReviewText] = useState('');

  const handlePostReview = () => {
    // You can implement the logic to post the review here.
    // For demonstration purposes, we will simply log the review text to the console.
    console.log('Posted review:', reviewText);
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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={reviewStyle}>Leave a review</h3>
            <div style={reviewContainerStyle}>
              <textarea
                style={reviewTextBoxStyle}
                placeholder="Write your review here..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
              <button style={postButtonStyle} onClick={handlePostReview}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
