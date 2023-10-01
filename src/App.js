import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Header from './header'; // Import the Header component

function App() {
  return (
    <div className='app'>
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
