import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import { Navigate } from "react-router-dom";
import MySpinner from "../../Spinner";

const IsPrivate = ({ children }) => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  //this is where we do the logic to check if is loading and is logged in are correct
  if (isLoading) {
    return <MySpinner />;
  }
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};
export default IsPrivate;
