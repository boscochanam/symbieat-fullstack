import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

function Header(props) {
  // Style for the cart count and total
  const cartCountStyle = {
    fontWeight: 'strong',
    padding: '5px',
    color: 'white',
    margin: '10px',
  };

  // Function to reset the cart and navigate to the login page
  const resetCart = () => {
    props.setCartCount(0); // Assuming you have a state setter for cartCount
    props.setCartTotal(0);
    props.clearCart();
  };

  return (
    <nav className="navbar bg-dark navbar-expand-lg" style={{ backgroundColor: '#EAEAEA' }} data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.google.com/">Symbieat</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* NavLink for Home */}
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              {/* NavLink for Menu */}
              <NavLink className="nav-link" to="/menu">Menu</NavLink>
            </li>
            <li className="nav-item">
              {/* NavLink for Locations */}
              <NavLink className="nav-link" to="/locations">Locations</NavLink>
            </li>
            <li className="nav-item">
              {/* NavLink for Cart */}
              <NavLink className="nav-link" to="/cart">Cart</NavLink>
            </li>
          </ul>
        </div>
        <button className='btn btn-success' onClick={() => { resetCart(); window.location.href = "/login"; }}>
          Log In
        </button>
        <div style={cartCountStyle}>
          {/* Display cart count and total */}
          <ShoppingCartIcon fontSize="small" />
          &nbsp; {props.cartCount} : &nbsp; &#8377; {props.cartTotal} &nbsp; &nbsp;
          <button className="btn btn-outline-light my-2 my-sm-0" onClick={() => { resetCart(); }}>
            Clear Cart
          </button>
        </div>
        <form className="form-inline ml-auto" role="search"> {/* 'ml-auto' pushes the form to the right */}
          <div className="input-group"> {/* Use Bootstrap's input group for side-by-side elements */}
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> &nbsp;
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default Header;
