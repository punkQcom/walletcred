//login.jsx
import React from 'react'
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import { useState, useEffect } from 'react';
import { Auth } from './auth.jsx';


function Login() {
  
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    // Determine if the current location is the login page
    const isLoginPage = location.pathname === '/login';



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
      {/* Render the login page content */}
      <div>Login</div>

      {/* Conditionally render components based on the current location */}
      {!isLoginPage && (
        <>
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
      )}
    </>
  );
}

export default Login