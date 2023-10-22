import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import symbieat from '../static/symbieat_images/symbieat_vertical.jpg';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Import the useAuth hook

import Header from '../components/Header';

function LoginPage(props) {

  const { login } = useAuth();

  const containerStyle = {
    backgroundColor: '#FF4C4C',
    height: '30vh',
  };

  const cardStyle = {
    borderRadius: '1rem',
  };

  const imgStyle = {
    borderRadius: '1rem 0 0 1rem',
  };

  const [prnError, setPrnError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState(null); // Added state for login errors

  const handleLogin = async () => {
    const prnValue = document.getElementById('form2Example17').value;
    const passwordValue = document.getElementById('form2Example27').value;
  
    setPrnError('');
    setPasswordError('');
    setLoginError(null); // Clear any previous login errors
  
    try {
      const response = await axios.post('/api/users', { username: prnValue, password: passwordValue });
      if (response.status === 200) {
        // Set the user in the context using the `setUser` function from `useAuth`
        login(prnValue);
        localStorage.setItem('authToken', response.data.token);
        console.log("Logged in successfully");
      } else if (response.status === 401) {
        // Authentication failed, display the error message
        setPasswordError('Incorrect PRN or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  return (
    <div>
      {/* Include the Header component */}
      <Header
        cartCount={props.cartCount}
        setCartCount={props.setCartCount}
        cartTotal={props.cartTotal}
        setCartTotal={props.setCartTotal}
        clearCart={props.clearCart}
        loginState={props.loginState}
        setLoginState={props.setLoginState}
        login={props.login}
      />
      <section className="vh-100" style={containerStyle}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10 mb-5">
              <div className="card" style={cardStyle}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={symbieat}
                      alt="login form"
                      className="img-fluid"
                      style={imgStyle}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Login to Symbieat</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          name="prn"
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          PRN (11 digits)
                        </label>
                        {prnError && <div className="text-danger">{prnError}</div>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          name="password"
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password (min 3 characters)
                        </label>
                        {passwordError && <div className="text-danger">{passwordError}</div>}
                      </div>

                      {loginError && <div className="text-danger">{loginError}</div>} {/* Display login error */}
                      
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleLogin}>
                          Login
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        <Link to="/register">Register for a new account</Link>
                      </p>
                      <p>
                        {props.loginState}
                      </p>
                      <NavLink to="/" className="btn btn-danger btn-lg btn-block">
                        Back to Home
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
