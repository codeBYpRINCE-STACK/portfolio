import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Global Styles - Order matters to ensure Tailwind overrides and Custom Animations work correctly
import './styles/tailwind.css';

/**
 * Root initialization for Prince Kumar's Portfolio.
 * Connects the React component tree to the public/index.html root.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);