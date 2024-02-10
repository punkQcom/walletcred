import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Auth } from './auth.jsx';

import React from "react";
import { Routes , Route, Link } from 'react-router-dom';
import Home from "./home";
import Login from "./login";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user was logged in before
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Store the login state in local storage
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Remove the login state from local storage
    localStorage.removeItem('isLoggedIn');
  };

  

  return (
    <>

    <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/walletcred" className="list">Home</Link>
            </li>
            <li>
              <Link to="/walletcred/login" className="list">Login</Link>
            </li>
          </ul>
        </nav>

        {/* Defining routes path and rendering components as element */}
        <Routes>
          <Route path="/walletcred" element={<Home />} />
          <Route path="/walletcred/login" element={<Login />} />
        </Routes>
      </div>




      <div>
        <h1>WalletCred</h1>
        <h2>Made by punkQ.com</h2>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>with</h3>
      <h2>Vite + React</h2>






    </>
  );
}

export default App;
