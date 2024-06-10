import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setCurrentUser }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const nav = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:5005/users");
      console.log("inside the login function", data);
      const foundUser = data.find((oneUser) => {
        if (oneUser.username.toLowerCase() === username.toLowerCase()) {
          return true;
        }
      });
      console.log("found user", foundUser);
      if (!foundUser) {
        setError("user does not exist, would you like to sign up with us?");
      } else {
        const doesPasswordMatch = foundUser.password === password;
        console.log("does the password match,", doesPasswordMatch);
        if (doesPasswordMatch) {
          setCurrentUser(foundUser);
          nav("/products");
        } else {
          setError("password incorrect, please try again");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
export default Login;
