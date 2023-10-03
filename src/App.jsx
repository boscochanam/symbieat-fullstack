import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './static/style.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Locations from './Pages/Locations';
import Cart from './Pages/Cart'

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(c=>[...c, item]); // Add the item to the cartItems array
    setCartCount(c=>c + 1); // Update the cart count
  };

  const addToTotal = (amt) => {
    setCartTotal(cartTotal + amt);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              addToCart={addToCart}
              addToTotal={addToTotal}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <Menu
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              addToCart={addToCart}
              addToTotal={addToTotal}
            />
          }
        />
        <Route
          path="/locations"
          element={
            <Locations
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              addToCart={addToCart}
              addToTotal={addToTotal}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems} // Pass the cartItems array
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
            />
          }
        />

      </Routes>
    </Router>
  );
}


export default App;
