import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './static/style.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Locations from './Pages/Locations';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
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
      </Routes>
    </Router>
  );
}


export default App;
