//login.jsx

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Auth } from './auth.jsx';
import { useAuth } from './secrets/Authprovider.jsx';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const { isLoggedIn: authIsLoggedIn } = useAuth();
    const [popupBlocked, setPopupBlocked] = useState(false);

    const isLoginPage = location.pathname === '/login';

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    const handleAuthentication = () => {
        setIsLoggedIn(true); // Update isLoggedIn state to true after successful authentication
        console.log('Is logged in after authentication:', isLoggedIn); // Log the updated value of isLoggedIn
        const popup = window.open('', '_self');
        if (!popup || popup.closed || typeof popup.closed === 'undefined') {
            setPopupBlocked(true);
        } else {
            window.close();
        }
    };
    
    

    return (
        <>
            <div className="header">
                <h1>WalletCred Login</h1>
            </div>

            {!isLoggedIn ? (
                <Auth onAuthenticationSuccess={handleAuthentication} />
            ) : (
                <>
                    <p>You are logged in</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}

            {popupBlocked && (
                <p>Please enable popups and try again.</p>
            )}
        </>
    );
}

export default Login;
