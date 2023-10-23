import React, { useState } from 'react';
import Header from '../components/Header';
import Popup from '../components/Popup';
import { NavLink } from 'react-router-dom';

function Cart({ cartItems, cartTotal, setCartTotal, ...props }) {
  const [showPopup, setShowPopup] = useState(false);

  const handlePlaceOrder = () => {
    // Trigger an action when "Place Order" is clicked (e.g., display "Payment Successful")
    setShowPopup(true);

    // Clear the cart (You should implement this function)
  };

  // Create a modified cart data structure to group items by title
  const groupedCartItems = cartItems.reduce((accumulator, currentItem) => {
    const { title, price } = currentItem;
    if (!accumulator[title]) {
      accumulator[title] = { ...currentItem, quantity: 0 };
    }
    accumulator[title].quantity += 1;
    accumulator[title].totalPrice = accumulator[title].quantity * price;
    return accumulator;
  }, {});

  return (
    <div className="wrapper">
      {/* Header */}
      <Header
        cartCount={props.cartCount}
        setCartCount={props.setCartCount}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        clearCart={props.clearCart}
        loginState={props.loginState}
        setLoginState={props.loginState}
        login={props.login}
        balance = {props.balance}
          setBalance = {props.setBalance}
      />

      {/* Main Content */}
      <div className="main-content">
        <div className="container mt-4">
          <div className="row">
            {/* Left Column - Cart Items (Half of the page) */}
            <div className="col-md-6">
              <h2 className="text-center mb-4">Your Shopping Cart</h2>
              {Object.values(groupedCartItems).map((cartItem, index) => (
                <div className="mb-4" key={index}>
                  <div className="card">
                    <img
                      src={cartItem.imageSrc}
                      className="card-img-top"
                      alt={cartItem.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">
                        {cartItem.title} (Quantity: {cartItem.quantity})
                      </h5>
                      <p className="card-text">{cartItem.description}</p>
                      <p className="card-text">
                        Price per item: &#8377; {cartItem.price.toFixed(2)}
                      </p>
                      <p className="card-text">
                        Total price: &#8377; {cartItem.totalPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Order Summary (Half of the page) */}
            <div className="col-md-6">
              <div className="order-summary">
                <h2 className="text-center mb-4">Order Summary</h2>
                <div className="order-summary-items">
                  {Object.values(groupedCartItems).map((cartItem, index) => (
                    <p key={index} className="order-item">
                      <span className="item-number">Item {index + 1}: </span>
                      {cartItem.title} (Quantity: {cartItem.quantity}) &#8377;{' '}
                      {cartItem.totalPrice.toFixed(2)}
                    </p>
                  ))}
                </div>
                <p className="total">Total: &#8377; {cartTotal.toFixed(2)}</p>
                <NavLink
                  to="/payment"
                  className="btn btn-primary btn-block place-order-button"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup
        show={showPopup}
        message="Payment Successful"
        onPopupClick={() => setShowPopup(false)} // Close the popup when clicked
      />
    </div>
  );
}

export default Cart;
