import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Auth } from './auth.jsx'
import PopupLogin from './PopupLogin'; // Import the PopupLogin component




function App() {
  //const [count, setCount] = useState(0)


  const [showLoginPopup, setShowLoginPopup] = useState(false); // State variable to control the visibility of the login popup
  const handleOpenPopup = () => {
    setShowPopup(true); // Set showPopup state to true to display the popup
  };

  const handleClosePopup = (isLoggedIn) => {
    setShowPopup(false); // Set showPopup state to false to hide the popup
    // You can handle further actions based on login status here
  };





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
     

<div className="App">
      {/* Button to open the popup */}
      <button onClick={() => setShowLoginPopup(true)}>Show Login Popup</button> 
      {/* Conditional rendering of PopupLogin component */}
      {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />} 

      {/* Other content of your app */}
    </div>



    </>
  )
}

export default App
