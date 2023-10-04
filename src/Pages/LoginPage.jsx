import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import symbieat from '../static/symbieat_images/symbieat_vertical.jpg';

// Define the LoginPage component
function LoginPage() {
  // Define CSS styles
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

  // Initialize state variables for error messages
  const [prnError, setPrnError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Define the form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the values from the input fields
    const prnValue = e.target.prn.value;
    const passwordValue = e.target.password.value;

    // Reset previous error messages
    setPrnError('');
    setPasswordError('');

    // Validate PRN
    if (prnValue.length !== 11) {
      setPrnError('PRN must be 11 digits long');
      return;
    }

    // Validate password
    if (passwordValue.length < 3) {
      setPasswordError('Password must be at least 3 characters long');
      return;
    }

    // If both PRN and password are valid, you can proceed with login logic here
    // For now, you can just log a success message
    console.log('Login successful');
  };

  // Render the login form
  return (
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
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Login to Symbieat</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="number"
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

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                          Login
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        <Link to="/register">Register for a new account</Link>
                      </p>
                      <Link to="/" className="btn btn-danger btn-lg btn-block">
                        Back to Home
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default LoginPage;
