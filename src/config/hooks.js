import {useEffect, useState} from "react";

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  }, []);

  return isLoggedIn;
};
