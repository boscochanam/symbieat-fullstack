import React, { useState } from 'react';
import axios from 'axios';
import facebookIcon from '../static/social_media_icons/facebook.png';
import twitterIcon from '../static/social_media_icons/twitter.png';
import instagramIcon from '../static/social_media_icons/instagram.png';
import ReviewPopup from './ReviewPopup';

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
  const [showPopup, setShowPopup] = useState(false);

  const handlePostReview = async () => {
    if (reviewText.trim() !== '') {
      try {
        await axios.post('/api/reviews', { text: reviewText });
        setShowPopup(true);
        setReviewText('');
        setTimeout(() => setShowPopup(false), 3000);
      } catch (error) {
        console.error('Error posting review:', error);
      }
    }
  }


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
            <ul style={{ padding: 0, listStyle: 'none', textAlign: 'right' }}>
              <li style={{ display: 'inline', marginLeft: '10px' }}>
                <a href="https://www.facebook.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>
                  <img src={facebookIcon} alt="Facebook" width="24" height="24" />
                </a>
              </li>
              <li style={{ display: 'inline', marginLeft: '10px' }}>
                <a href="https://www.twitter.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>
                  <img src={twitterIcon} alt="Twitter" width="24" height="24" />
                </a>
              </li>
              <li style={{ display: 'inline', marginLeft: '10px' }}>
                <a href="https://www.instagram.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>
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

      <ReviewPopup show={showPopup} message="Review submitted!" />
    </footer>
  );
}

export default Footer;
