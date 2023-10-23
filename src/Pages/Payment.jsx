import React, { useState, useEffect } from 'react';
import './Payment.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import the useAuth hook
import axios from 'axios'; // Import Axios for making API requests

function Payment(props) {
  const resetCart = () => {
    props.setCartCount(0);
    props.setCartTotal(0);
    props.clearCart();
  };

  const { user } = useAuth(); // Get user data from the context
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    // Fetch the user's balance from the server when the component mounts
    if (user) {
      axios.get('/api/users/get-balance') // Use the correct API endpoint
        .then((response) => {
          setBalance(response.data.balance);
        })
        .catch((error) => {
          console.error('Error fetching balance:', error);
        });
    }
  }, [user]);

  return (
    <div className="container mt-5">
      <h1 className="h3 mb-5">Payment</h1>
      <div className="row">
        <div className="col-lg-9">
          {user ? (
            <>
              <div className="mb-3">
                <p>Your balance is: {balance !== null ? balance : 'Loading...'} </p>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={resetCart}>
                  Check Balance
                </button>
              </div>
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
              {user ? (
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
