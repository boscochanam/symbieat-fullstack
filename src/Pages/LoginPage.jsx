import React from 'react';
import { Link } from 'react-router-dom';
import symbieat from '../static/symbieat_images/symbieat_vertical.jpg';

function LoginPage() {
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


  return (
    <section className="vh-100" style={containerStyle}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10 mb-5">
            <div className="card" style={cardStyle}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src= {symbieat}
                    alt="login form"
                    className="img-fluid"
                    style={imgStyle}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Login to Symbieat</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button">
                          Login
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        <Link to="/register" >Register for a new account</Link>
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
