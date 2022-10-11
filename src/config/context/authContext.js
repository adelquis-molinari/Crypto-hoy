import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      const data = currentUser;
      setUserData(data);
      setLoading(false);
    });
  }, [userData]);
  return (
    <authContext.Provider
      value={{ signup, logIn, logInWithGoogle, logOut, userData, loading }}
    >
      {children}
    </authContext.Provider>
  );
};
