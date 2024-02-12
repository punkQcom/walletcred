/// KAIKKI OK NYT JOS PITÄÄ POISTAA
//App.jsx
import React from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { AuthProvider } from './secrets/Authprovider.jsx';
import { BrowserRouter, Routes, Router, Route, Link, useLocation } from 'react-router-dom';
import Login from "./login";

function Home() {
  return
  //
  //<div>This is the home page</div>; 
  // Route ei jotenkin toimi, pitää olla tämä HOME.
}

function App() {
  // Get the current location using useLocation hook
  const location = useLocation();

  // Log the current pathname to the console
  console.log("Current pathname:", location.pathname);

  // Check if the current location is the main page
  const isRootPage = location.pathname === "/";

  return (
    
  <div>
  {/* Menu bar */}
  <nav className="menu-bar">
    <ul>
      <li className="menu-item home"> {/* Add class "home" to the Home link */}
        <Link to="/" className="menu-item">Home</Link>
      </li>
      <li className="menu-item login"> {/* Add class "login" to the Login link */}
        <Link to="/login" className="menu-item">Login</Link>
      </li>
    </ul>
  </nav>

    
  {/* Main container */}
    <div className="container">
 
   {/* Defining routes path and rendering components as element */}

      <AuthProvider> {/* Wrap your application with AuthProvider */}
          {/* Render components based on the current location */}
          {location.pathname === "/" && <Home />}
          {location.pathname === "/login" && <Login />}
      </AuthProvider>


     {/* Conditional rendering of footer and additional images */}
     {/* console.log(isRootPage) */}


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
            <h3>made by punkQ.com</h3>
          </div>
         </div>
      )}
    </div>
  </div>

  );
}

export default App;