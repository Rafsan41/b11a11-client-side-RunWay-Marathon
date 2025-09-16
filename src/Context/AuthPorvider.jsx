import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

const AuthPorvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const logInWitGoogle = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const creatUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setloading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloading(false);
      console.log("user in the state change", currentUser);
    });
    return () => {
      unSubscribe;
    };
  }, []);

  const authInfo = {
    user,
    loading,
    creatUser,
    logInUser,
    logInWitGoogle,
    logOutUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};
export default AuthPorvider;
