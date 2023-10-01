import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FoodItems from './components/FoodItems';
import LocationSection from './components/LocationSection';

function App() {
  return (
    <div>
      <Header />
      <LocationSection />
      <FoodItems />
    </div>
  );
}

export default App;
