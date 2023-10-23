import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './static/style.css';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Locations from './Pages/Locations';
import Cart from './Pages/Cart';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Payment from './Pages/Payment';
import axios from 'axios';
import { AuthProvider } from './AuthContext'; // Import AuthProvider

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [loginState, setLoginState] = useState("");
  const [balance, setBalance] = useState(0); // Initialize balance to 0
  
  axios.defaults.baseURL = 'http://localhost:8080';

  const login = (username) => { 
    setLoginState(c => username);
  };

  const addToCart = (item) => {
    setCartItems(c => [...c, item]);
    setCartCount(c => c + 1);
  };

  const addToTotal = (amt) => {
    setCartTotal(cartTotal + amt);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <AuthProvider>
    <Router>
      <ToastContainer /> {/* Add this line to include the toast container */}
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
              clearCart={clearCart}
              loginState={loginState}
              login={login}
              balance = {balance}
              setBalance = {setBalance}
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
              clearCart={clearCart}
              loginState={loginState}
              login={login}
              balance = {balance}
              setBalance = {setBalance}
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
              clearCart={clearCart}
              loginState={loginState}
              login={login}
              balance = {balance}
              setBalance = {setBalance}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              clearCart={clearCart}
              loginState={loginState}
              login={login}
              balance = {balance}
              setBalance = {setBalance}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              cartItems={cartItems}
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              clearCart={clearCart}
              loginState={loginState}
              login={login}
              balance = {balance}
              setBalance = {setBalance}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage
              cartItems={cartItems}
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              clearCart={clearCart}
              loginState={loginState}
              login={login}
              balance = {balance}
              setBalance = {setBalance}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <Payment
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              addToCart={addToCart}
              addToTotal={addToTotal}
              clearCart={clearCart}
              loginState={loginState}
              login={login}
              balance = {balance}
              setBalance = {setBalance}
            />
          }
        />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
