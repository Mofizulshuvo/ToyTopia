import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup, 
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import AuthContext from "./AuthContext"; 
import ToyData from  "../Components/Toys.jsx";
import setToyData  from  "../Components/Toys.jsx";



// import {ToyData,setToyData} from '../Components/Toys.jsx';  

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forgotEmail, setForgotEmail] = useState("");
  const [cart,setCart]=useState([]);
  const [cartCount,setCartCount]=useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

   const [ToyData, setToyData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setToyData(data));
  }, []);

  const createUserWithEmailAndPasswordFunction = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailAndPasswordFunction = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInwithPopupFunction = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const value = {
    user,
    setUser,
    loading,
    forgotEmail,
    setForgotEmail,
    createUserWithEmailAndPasswordFunction,
    signInWithEmailAndPasswordFunction,
    signInwithPopupFunction,
    logOut,
     ToyData,
     setToyData,
     cart,
     setCart,
     cartCount,
     setCartCount
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider; 
