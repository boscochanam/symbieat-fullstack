import React from 'react';
import Header from '../components/Header';

function Cart({ cartItems, ...props }) { // Merge all props into a single object
  return (
    <div>
        <div className="navbar-container">
        {/* Render the Header component */}
        <Header
          cartCount={props.cartCount}
          setCartCount={props.setCartCount}
          cartTotal={props.cartTotal}
          setCartTotal={props.setCartTotal}
        />
      </div>
      <h2 className="text-center mb-4">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <div className="row">
            {cartItems.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img
                    src={item.imageSrc}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">&#8377; {item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3 className="mt-4">Cart Summary</h3>
            <p>Total: &#8377; {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
