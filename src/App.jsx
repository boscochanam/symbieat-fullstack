import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './static/style.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';

function App() {
  // Define your cart-related state here
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Pass the cart-related props to Home */}
        <Route path="/" element={<Home cartCount={cartCount} setCartCount={setCartCount} cartTotal={cartTotal} setCartTotal={setCartTotal} />} />
        {/* Pass the cart-related props to Menu */}
        <Route path="/menu" element={<Menu cartCount={cartCount} setCartCount={setCartCount} cartTotal={cartTotal} setCartTotal={setCartTotal} />} />
      </Routes>
    </Router>
  );
}

export default App;
