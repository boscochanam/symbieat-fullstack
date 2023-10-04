import React from 'react';
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

  const iconStyle = {
    color: '#ff6219',
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
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Register with Symbieat</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Create your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="formFirstName"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="formFirstName">
                          First Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="formLastName"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="formLastName">
                          Last Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="formEmail"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="formEmail">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="formPassword"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="formPassword">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button">
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
