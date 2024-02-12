//auth.jsx
import { useState } from "react";
import { auth, googleProvider } from "./secrets/FirebaseInit"; // Import Firebase authentication and Google provider
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"; // Import Firebase authentication methods

// Define the Auth component
export const Auth = () => {
  // Define state variables
  const [email, setEmail] = useState(""); // State for email input field
  const [password, setPassword] = useState(""); // State for password input field
  const [error, setError] = useState(null); // State for error message
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  // Function to handle user registration
  const register = async () => {
    try {
      // Create a new user account with email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // If successful, clear error and set success message
      setError(null); // Clear error state
      setSuccessMessage('Account created successfully!'); // Set success message

      // Clear success message after 2 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      // Handle registration errors
      handleAuthError(error);
    }
  };

  // Function to handle user login
  const login = async () => {
    try {
      // Sign in with existing credentials
      await signInWithEmailAndPassword(auth, email, password);

      // If successful, clear error and set success message
      setError(null); // Clear error state
      setSuccessMessage('Logged in successfully!'); // Set success message

      // Clear success message after 2 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      // Handle login errors
      handleAuthError(error);
    }
  };

  // Function to handle user login with Google
  const signInWithGoogle = async () => {
    try {
      // Sign in with Google provider
      await signInWithPopup(auth, googleProvider);

      // If successful, clear error and set success message
      setError(null); // Clear error state
      setSuccessMessage('Signed in with Google successfully!'); // Set success message

      // Clear success message after 2 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      // Handle Google sign-in errors
      handleAuthError(error);
    }
  };

  // Function to handle user logout
  const logOut = async () => {
    try {
      // Sign out the current user
      await signOut(auth);

      // If successful, clear error and set success message
      setError(null); // Clear error state
      setSuccessMessage('Logged out successfully!'); // Set success message

      // Clear success message after 2 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      // Handle logout errors
      handleAuthError(error);
    }
  };

  // Function to handle authentication errors
  const handleAuthError = (error) => {
    // Log the specific error message returned by Firebase Authentication
    console.error("Firebase Authentication Error:", error.message);

    // Handle specific error cases
    if (error.code === 'auth/email-already-in-use') {
      setError('Email address is already in use.');
    } else if (error.code === 'auth/weak-password') {
      setError('Password is too weak. Please choose a stronger password.');
    } else if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
      setError('Invalid email or password.');
    } else {
      setError('An error occurred. Please try again later.');
    }

    // Clear error message after 2 seconds
    setTimeout(() => {
      setError('');
    }, 2000);
  };

  // Render the Auth component
  return (
    <div>
      {/* Email input field */}
      <input
        style={{ marginBottom: "8px" }}
        placeholder="Email.."
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password input field */}
      <input
        style={{ marginBottom: "8px" }}
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      {/* Register button */}
      <button onClick={register}>Register</button>
      {/* Login button */}
      <button onClick={login}>Log In</button>
      <br /><br />

      {/* Logout button */}
      <button onClick={logOut}>Log Out</button>
      <br /><br />

      {/* Sign in with Google button */}
      <button onClick={signInWithGoogle}>Sign in with Google</button>
     
      {/* Error and success messages */}
      <div style={{ marginBottom: "20px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </div>
    </div>
  );
};
