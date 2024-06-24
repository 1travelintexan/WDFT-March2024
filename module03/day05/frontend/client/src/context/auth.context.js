import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//this creates the context
const AuthContext = createContext();
//second thing we do is create a wrapper to go around our <App/>
const AuthContextWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate();
  //this function only takes a token and stores it in the local storage
  const storeToken = (token) => {
    //localStorage.setItem expects two arguments, first the name and second the value of what  you want to store
    localStorage.setItem("authToken", token);
  };

  //this function is going to make a call to the /verify route and check that the token is valid
  const authenticateUser = async () => {
    //this line grabs the auth token from the local storage
    const tokenFromLocalStorage = localStorage.getItem("authToken");
    try {
      const { data } = await axios.get("http://localhost:5005/auth/verify", {
        headers: { authorization: `Bearer ${tokenFromLocalStorage}` },
      });
      console.log("response from verify ", data);
      setCurrentUser(data.user);
      setIsLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      console.log("error authenticating user", error);
      setCurrentUser(null);
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  };
  //this function handles logging out and removing the auth token from the local storage
  const handleLogout = () => {
    //first thing is to remove the authToken from the localStorage
    localStorage.removeItem("authToken");
    nav("/login");
    setCurrentUser(null);
    console.log("user was logged out successfully");
  };
  useEffect(() => {
    authenticateUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        storeToken,
        handleLogout,
        currentUser,
        isLoading,
        isLoggedIn,
        authenticateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthContextWrapper };
