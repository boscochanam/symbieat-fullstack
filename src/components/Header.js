import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header(props) {
  const cartCountStyle = {
    weight: 'strong',
    padding: '5px',
    color: 'white',        
    margin: '10px',
  };

  return (
    <nav className="navbar bg-dark navbar-expand-lg" style={{ backgroundColor: '#EAEAEA' }} data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Symbieat</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Food</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Drinks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div style={cartCountStyle}>
        <ShoppingCartIcon fontSize="small" />
        &nbsp; {props.cartCount}
          
        </div>
        <form className="form-inline ml-auto" role="search"> {/* 'ml-auto' pushes the form to the right */}
          <div className="input-group"> {/* Use Bootstrap's input group for side-by-side elements */}
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default Header;
