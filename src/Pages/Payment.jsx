import React, { useState } from 'react';
import './Payment.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Import the useAuth hook

function Payment(props) {
  const resetCart = () => {
    props.setCartCount(0);
    props.setCartTotal(0);
    props.clearCart();
  };

  const [password, setPassword] = useState('');
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  const { user } = useAuth(); // Get user data from the context

  const checkBalance = async () => {
    setError(null);

    try {
      const response = await axios.post('/api/users', { username: props.username, password });
      if (response.status === 200) {
        setBalance(response.data.balance);
      } else {
        setError('Incorrect password. Please try again.');
      }
    } catch (error) {
      setError('Error checking balance. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1 className="h3 mb-5">Payment</h1>
      <div className="row">
        <div className="col-lg-9">
          {user ? ( // Only show the input fields if the user is authenticated
            <>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={checkBalance}>
                  Check Balance
                </button>
              </div>
              {error && <div className="text-danger">{error}</div>}
              {balance !== null && (
                <div className="mb-3">
                  <p>Your balance is: {balance}</p>
                </div>
              )}
            </>
          ) : (
            <p>Please log in to access the payment page.</p>
          )}
        </div>
        <div className="col-lg-3">
          <div className="card position-sticky top-0">
            <div className="p-3 bg-light bg-opacity-10">
              <h6 className="card-title mb-3">Order Summary</h6>
              <div className="d-flex justify-content-between mb-4 small">
                <span>TOTAL</span> <strong className="text-dark">&#8377;{props.cartTotal}</strong>
              </div>
              {user ? ( // Only show the "Place order" button if the user is authenticated
                <NavLink to="/" className="btn btn-primary w-100 mt-2" onClick={resetCart}>
                  Place order
                </NavLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
