import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

function Header(props) {
  const cartCountStyle = {
    fontWeight: 'bold', // Correct the CSS property name to 'fontWeight'
    padding: '5px',
    color: 'white',
    margin: '10px',
  };

  const resetCart = () => {
    props.setCartCount(0);
    props.setCartTotal(0);
    props.clearCart();
  };

  const resetLogin = () => {
    props.login("");
  }

  return (
    <nav className="navbar bg-dark navbar-expand-lg" style={{ backgroundColor: '#EAEAEA' }} data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Symbieat</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/locations">Locations</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">Cart</NavLink>
            </li>
          </ul>
        </div>
        <div>
          {props.loginState ? (
            <NavLink className="nav-link" to="/" >{props.loginState}</NavLink>
          ) : (
            <NavLink className="nav-link" to="/login">Not Logged In</NavLink>
          )}
        </div>
        {props.loginState ? (
          <button className="btn btn-danger" onClick={() => {resetLogin();}}>
            Logged in as {props.loginState}, Log Out
          </button>
        ) : (
          <NavLink to="/login" className='btn btn-success'>
            Log In
          </NavLink>
        )}
        <div style={cartCountStyle}>
          <ShoppingCartIcon fontSize="small" />
          &nbsp; {props.cartCount} : &nbsp; &#8377; {props.cartTotal} &nbsp; &nbsp;
          <button className="btn btn-outline-light my-2 my-sm-0" onClick={() => { resetCart(); }}>
            Clear Cart
          </button>
        </div>
        <form className="form-inline ml-auto" role="search">
          <div className="input-group">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> &nbsp;
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default Header;
