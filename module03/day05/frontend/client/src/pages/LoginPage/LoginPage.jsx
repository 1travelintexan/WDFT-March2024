import "./LoginPage.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const nav = useNavigate();
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
    axios
      .post("http://localhost:5005/auth/login", requestBody)
      .then(({ data }) => {
        console.log("response from the login", data);
        //this stores the token when the login is successful
        storeToken(data.authToken);
        //after we store the token, we call the authenticate user function to valid the token and to set the currentUser state in the context
        return authenticateUser();
      })
      .then(() => {
        console.log("all good with the login");
        nav("/profile");
      })
      .catch((err) => console.log("error logging in", err));
    // // Or using a service
    // authService
    //   .login(requestBody)
    //   .then((response) => {
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     // If the request resolves with an error, set the error message in the state
    //     const errorDescription = error.response.data.message;
    //     setErrorMessage(errorDescription);
    //   });
  };

  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
}

export default LoginPage;
