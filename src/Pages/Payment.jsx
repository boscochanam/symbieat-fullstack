import React, { useState } from 'react';
import './Payment.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axios from 'axios'; // Import Axios for making API requests

function Payment(props) {
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderError, setOrderError] = useState(null);

  const resetCart = () => {
    props.setCartCount(0);
    props.setCartTotal(0);
    props.clearCart();
  };

  const { user } = useAuth();

  const placeOrder = () => {
    if (props.balance >= props.cartTotal) {
      const newBalance = props.balance - props.cartTotal;
      props.setBalance(newBalance);
      
      // Use props.loginState for the username
      // const requestData = {
      //   username: props.loginState,
      //   newBalance: newBalance,
      // };
  
      // Update the balance on the server
      // axios.post('/update-balance', requestData)
      //   .then((response) => {
      //     // Handle the server response if needed
      //     setOrderPlaced(true);
      //     resetCart();
      //   })
      //   .catch((error) => {
      //     setOrderError('Error placing order. Please try again.');
      //     console.error('Error placing order:', error);
        // });
    } else {
      setOrderError('Insufficient balance. Please top up your account.');
    }
  };
  

  return (
    <div className="container mt-5">
      <h1 className="h3 mb-5">Payment</h1>
      <div className="row">
        <div className="col-lg-9">
          {user ? (
            <>
              <div className="mb-3">
                <p>Your balance is: {props.balance !== null ? props.balance : 'Loading...'} </p>
              </div>
              {isPlacingOrder ? (
                <p>Placing order...</p>
              ) : (
                <div className="mb-3">
                  <button className="btn btn-primary" onClick={placeOrder}>
                    Place Order
                  </button>
                </div>
              )}
              {orderError && <p className="text-danger">{orderError}</p>}
              {orderPlaced && <p>Order placed successfully!</p>}
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
                  Return
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
