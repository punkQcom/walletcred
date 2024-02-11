//auth.jsx
import { useState } from "react";
import { auth, googleProvider } from "./secrets/FirebaseInit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const register = async () => {
    try {
      // Create a new user account
      await createUserWithEmailAndPassword(auth, email, password);

      // If successful, clear error and set success message
      setError(null); // Clear error state
      setSuccessMessage('Account created successfully!');

      // Clear success message after 2 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      // Log the specific error message returned by Firebase Authentication
      console.error("Firebase Authentication Error:", error.message);

      // Handle specific error cases
      if (error.code === 'auth/email-already-in-use') {
        // If email is already in use, set error message and clear success message
        setError('Email address is already in use.');
        setSuccessMessage('');

        // Clear error message after 2 seconds (2000 milliseconds)
        setTimeout(() => {
          setError('');
        }, 2000);
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak. Please choose a stronger password.');

        // Clear error message after 2 seconds (2000 milliseconds)
        setTimeout(() => {
          setError('');
        }, 2000);
      } else {
        setError('An error occurred. Please try again later.');

        // Clear error message after 2 seconds (2000 milliseconds)
        setTimeout(() => {
          setError('');
        }, 2000);
      }
    }
  };


  const login = async () => {
    try {
      // Sign in with existing credentials
      await signInWithEmailAndPassword(auth, email, password);

      // If successful, clear error and set success message
      setError(null);
      setSuccessMessage('Logged in successfully!');

      // Clear success message after 2 seconds (2000 milliseconds)
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      // Log the specific error message returned by Firebase Authentication
      console.error("Firebase Authentication Error:", error.message);

      // Handle specific error cases
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        setError('Invalid email or password.');

        // Clear error message after 2 seconds (2000 milliseconds)
        setTimeout(() => {
          setError('');
        }, 2000);
      } else {
        setError('An error occurred. Please try again later.');

        // Clear error message after 2 seconds (2000 milliseconds)
        setTimeout(() => {
          setError('');
        }, 2000);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      // Sign in with Google
      await signInWithPopup(auth, googleProvider);
      // If successful, clear error and set success message
      setError(null);
      setSuccessMessage('Signed in with Google successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  const logOut = async () => {
    try {
      // Sign out
      await signOut(auth);
      // If successful, clear error and success message
      setError(null);
      setSuccessMessage('Logged out successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <input
        style={{ marginBottom: "8px" }}
        placeholder="Email.."
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={{ marginBottom: "8px" }}
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={register}>Register</button>
      <button onClick={login}>Log In</button>
      <br /><br />
      <button onClick={logOut}>Log Out</button>
      <br /><br />
      <button onClick={signInWithGoogle}>Sign in with Google</button>
     
     
      <div style={{ marginBottom: "20px" }}>
        {/* Your JSX code */}
      </div>
      <div style={{ height: "30px", marginBottom: "20px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </div>

    
    </div>





  );
};
