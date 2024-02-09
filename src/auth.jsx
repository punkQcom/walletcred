import { auth , googleProvider} from "./secrets/FirebaseInit";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

    
 //   console.log(auth?.currentUser?.email);
  
  const signIn = async () => {
    try {
    
    // Attempt to create a user account
    await createUserWithEmailAndPassword(auth, email, password);

    // If successful, clear error and set success message
    setError(null);
    setSuccessMessage('Account created successfully!');

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
    
    } catch (error) {
  

    // Handle specific error cases
  if (error.code === 'auth/email-already-in-use') {
    setError('Email address is already in use.');
  } else if (error.code === 'auth/weak-password') {
    setError('Password is too weak. Please choose a stronger password.');
  } else {
    setError('An error occurred. Please try again later.');
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
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  
  return (
    <div>
      <input style={{ marginBottom: "8px" }}
      placeholder="Email.."
      onChange={(e) => setEmail(e.target.value)}
      />

      <input style={{ marginBottom: "8px" }}
      type="password"
      placeholder="Password.."
      onChange={(e) => setPassword(e.target.value)}
      />

    <br />

      <button onClick={signIn}> SignIn / Register</button> <br />
      <button onClick={logOut}> LogOut</button>
      <br /><br />
      <button onClick={signInWithGoogle}> Signin with Google</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

    </div>
  );
};