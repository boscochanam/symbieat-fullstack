import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import '../static/style.css';

function Cart({ cartItems, cartTotal, setCartTotal, ...props }) {
  return (
    <div className="wrapper">
      {/* Header */}
      <Header
        cartCount={props.cartCount}
        setCartCount={props.setCartCount}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        clearCart={props.clearCart}
      />

      {/* Main Content */}
      <div className="main-content">
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
                          style={{ height: '50px', objectFit: 'cover' }}
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
                    <p key={index} className="order-item" style={{}}>
                      <span className="item-number">Item {index + 1}: </span>
                      {item.title} &#8377; {item.price}
                    </p>
                  ))}
                </div>
                <p className="total">Total: &#8377; {cartTotal.toFixed(2)}</p>
                <button className="btn btn-primary btn-block place-order-button">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Include the Footer component
      <Footer /> */}
    </div>
  );
}

export default Cart;
