//App.jsx
import React from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
//import { Auth } from './auth.jsx';

import { Routes, Router, Route, Link, useLocation } from 'react-router-dom';
import Login from "./login";

function App() {
  // Get the current location using useLocation hook
  const location = useLocation();

  // Log the current pathname to the console
  console.log("Current pathname:", location.pathname);

  // Check if the current location is the main page
  const isRootPage = location.pathname === "/";

  return (
    <div className="container">
      {/* Menu bar */}
      <nav className="menu-bar">
        <ul>
          <li>
            <Link to="/" className="menu-item">Home</Link>
          </li>
          <li>
            <Link to="/login" className="menu-item">Login</Link>
          </li>
        </ul>
      </nav>

      {/* Defining routes path and rendering components as element */}
      <Routes>
  <Route path="/walletcred/*" element={<App />} /> {/* Render App component for / and its children */}
  <Route path="/walletcred/login" element={<Login />} /> {/* Render Login component for /login */}
</Routes>

     {/* Conditional rendering of footer and additional images */}
     console.log(isRootPage)
      {isRootPage && (
        <div>
          <div className="header">
            <h1>WalletCred</h1>
          </div>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h3></h3>
            <h2>Vite + React</h2>
          </div>
          <div className="footer">
            <h2>made by punkQ.com</h2>
          </div>
         </div>
      )}
    </div>
  );
}

export default App;