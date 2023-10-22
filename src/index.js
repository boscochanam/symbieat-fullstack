import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Make API requests to your Express backend
const fetchData = async () => {
  try {
    const response = await fetch('/api/data'); // Replace with your API endpoint
    if (response.ok) {
      const data = await response.json();
      // Handle the data received from the backend
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error(error);
  }
};

fetchData(); // Call this function to fetch data from your backend

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
