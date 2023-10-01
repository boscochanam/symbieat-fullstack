import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FoodItems from './components/FoodItems';

function App() {
  return (
    <div>
      <Header />
      <FoodItems />
    </div>
  );
}

export default App;
