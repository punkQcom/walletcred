// Import necessary modules ///// TOIMIVAAAAAAAAAAAAAAAAA
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import { Auth } from './auth.jsx';
import { useAuth } from './secrets/Authprovider.jsx'; // Import useAuth hook from AuthProvider

// Define the Login component
function Login() {
    // Define state variables
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const {isLoggedIn } = useAuth();
    const location = useLocation();
    const { isLoggedIn: authIsLoggedIn } = useAuth(); // Get isLoggedIn state from AuthProvider
    const [popupBlocked, setPopupBlocked] = useState(false);


    // Determine if the current location is the login page
    const isLoginPage = location.pathname === '/login';

    // Use useEffect to initialize the isLoggedIn state based on local storage
    useEffect(() => {
        console.log('Is logged in:', isLoggedIn);
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn === 'true') {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]); // Add isLoggedIn to the dependency array

    // Function to handle logout action
    const handleLogout = () => {
        setIsLoggedIn(false); // Update isLoggedIn state to false
        localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn item from local storage
    };

// Function to handle successful authentication
const handleAuthentication = () => {
    setIsLoggedIn(true);
    console.log('isLoggedIn:', isLoggedIn); // Log the isLoggedIn state
    // Optionally close the popup window if needed
    const popup = window.open('', '_self');
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
        // Popup window is blocked
        setPopupBlocked(true);
    } else {
        // Popup window is not blocked
        window.close();
    }
};


    // Function to handle authentication success in the Login component
    const handleAuthenticationSuccess = () => {
        // Add any necessary logic to handle authentication success in the Login component
        console.log("Authentication successful!");
        // Redirect or perform any other actions as needed
        setIsLoggedIn(true); // Update isLoggedIn state

    };


    // Render the Login component
    return (
        <>
            {/* Render the login page header */}
            <div className="header">
                <h1>WalletCred Login</h1>
            </div>

            {/* Conditionally render authentication component based on login state */}
            {!isLoggedIn ? (
            // If not logged in, render the authentication component
            <Auth onAuthenticationSuccess={handleAuthentication} />
            ) : (
             // If logged in, render the logout button
               <>
               <p>You are logged in</p> {/* Indicator showing the user is logged in */}
               <button onClick={handleLogout}>Logout</button>
            </>
            )}


            {/* Render UI elements */}
                {popupBlocked && (
                <p>Please enable popups and try again.</p>
            )}
        </>
    );
}

// Export the Login component
export default Login;
