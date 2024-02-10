import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Auth } from './auth.jsx';





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


{/*  <div>  */}
{/*  <Auth />  */}
{/*  </div>  */}

     
{/* Conditional rendering based on login state */}
{isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          {/* Add your authenticated content here */}
        </>
      ) : (
        <Auth onLogin={handleLogin} />
      )}



    </>
  );
}

export default App;
