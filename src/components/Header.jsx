import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

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
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar bg-dark navbar-expand-lg" style={{ backgroundColor: '#EAEAEA' }} data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src="../favicon.ico" alt="Symbieat Logo" height="30" /></NavLink>
          

        <button
          className={`navbar-toggler ${menuOpen ? '' : 'collapsed'}`}
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu" onClick={closeMenu}>
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/locations" onClick={closeMenu}>
                Locations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart" onClick={closeMenu}>
                Cart
              </NavLink>
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
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            &nbsp;
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Header;
