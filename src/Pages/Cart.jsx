import React from 'react';
import Header from '../components/Header';

function Cart({ cartItems, cartTotal, setCartTotal, ...props }) {
  return (
    <div>
      <Header
        cartCount={props.cartCount}
        setCartCount={props.setCartCount}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />
      <div className="container mt-4">
        <div className="row">
          {/* Left Column - Cart Items (Half of the page) */}
          <div className="col-md-6">
            <h2 className="text-center mb-4">Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item, index) => (
                  <div className="mb-4" key={index}>
                    <div className="card">
                      <img
                        src={item.imageSrc}
                        className="card-img-top"
                        alt={item.title}
                        style={{ height: '300px', objectFit: 'cover' }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">&#8377; {item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Right Column - Order Summary (Half of the page) */}
          <div className="col-md-6">
            <div className="order-summary">
              <h2 className="text-center mb-4">Order Summary</h2>
              <div className="order-summary-items">
                {cartItems.map((item, index) => (
                  <p key={index}>
                    {item.title}
                  </p>
                ))}
              </div>
              <p>Total: &#8377; {cartTotal.toFixed(2)}</p>
              <button className="btn btn-primary btn-block">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
