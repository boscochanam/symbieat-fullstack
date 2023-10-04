import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import symbieat from '../static/symbieat_images/symbieat_vertical.jpg';

function RegisterPage() {
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

  const [emailError, setEmailError] = useState('');
  const [prnError, setPrnError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the values from the input fields
    const emailValue = e.target.formEmail.value;
    const prnValue = e.target.formPRN.value;
    const passwordValue = e.target.formPassword.value;

    // Reset previous error messages
    setEmailError('');
    setPrnError('');
    setPasswordError('');

    // Validate email
    if (!emailValue || !emailValue.includes('@')) {
      setEmailError('Invalid email address');
      return;
    }

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

    // If all fields are valid, proceed with registration logic here
    console.log('Registration successful');
  };

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
                    alt="registration form"
                    className="img-fluid"
                    style={imgStyle}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Register with Symbieat</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Create your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="formEmail"
                          className="form-control form-control-lg"
                          name="formEmail"
                        />
                        <label className="form-label" htmlFor="formEmail">
                          Email address
                        </label>
                        {emailError && <div className="text-danger">{emailError}</div>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          id="formPRN"
                          className="form-control form-control-lg"
                          name="formPRN"
                        />
                        <label className="form-label" htmlFor="formPRN">
                          PRN (11 digits)
                        </label>
                        {prnError && <div className="text-danger">{prnError}</div>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="formPassword"
                          className="form-control form-control-lg"
                          name="formPassword"
                        />
                        <label className="form-label" htmlFor="formPassword">
                          Password (min 3 characters)
                        </label>
                        {passwordError && <div className="text-danger">{passwordError}</div>}
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                          Register
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Already have an account? <Link to="/login">Login here</Link>
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

export default RegisterPage;
