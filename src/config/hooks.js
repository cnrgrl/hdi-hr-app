import {useEffect, useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "./firebase";

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    signOut(auth);
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setIsLoggedIn(!!Boolean(user));
    });
  }, []);

  return isLoggedIn;
};
