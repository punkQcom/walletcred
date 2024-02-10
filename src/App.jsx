import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
//import { Auth } from './auth.jsx';

import React from "react";
import { Routes, Router, Route, Link } from 'react-router-dom';
import Home from "./home";
import Login from "./login";




function App() {
 


<Router>
  <>
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
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>

    
    {/* Footer */}
      <div className="footer">
        <h1>WalletCred</h1>
        <h2>Made by punkQ.com</h2>
      </div>
  </>
</Router>


  

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
