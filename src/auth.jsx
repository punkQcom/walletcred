import { auth , googleProvider} from "./secrets/FirebaseInit";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
    console.log(auth?.currentUser?.email);
  
  const signIn = async () => {
    try {
    await createUserWithEmailAndPassword(auth, email, password);
    } catch (err){
      
    console.error(err);

    }
  };
  
  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
    } catch (err){
      console.error(err);
    }
  };
  
  const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
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

      <button onClick={signIn}> Signin</button> <br />
      <button onClick={logOut}> LogOut</button>
      <br /><br />
      <button onClick={signInWithGoogle}> Signin with Google</button>
     
    </div>
  );
};