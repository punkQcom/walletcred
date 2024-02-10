import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const PopupLogin = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      onClose(true); // Close the popup and indicate successful login
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose(true); // Close the popup and indicate successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="popup">
      <h2>Login</h2>
      <div>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleEmailLogin}>Login with Email</button>
      </div>
      <div>
        <button onClick={handleGoogleLogin}>Login with Google</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PopupLogin;
