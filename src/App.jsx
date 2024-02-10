import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Auth } from './auth.jsx'


function App() {
  const [count, setCount] = useState(0)


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
        <h2></h2>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
     <h2>Vite + React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>



{/* Render authentication component based on login state */}
{isLoggedIn ? (
  <div>
    {/* Main page content goes here */}
    <button onClick={handleLogout}>Logout</button>
  </div>
) : (
  <Auth onLogin={handleLogin} />
)}



      <div>
      {/* Other components */}
      <Auth />
      </div>

    </>
  )
}

export default App
