import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setCurrentUser }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5005/users", {
        username,
        password,
      });
      console.log("user created!", data);
      setCurrentUser(data);
      nav("/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Sign Up Page</h2>
      <form onSubmit={handleSignup}>
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
        <button>Sign up</button>
      </form>
    </div>
  );
};
export default Signup;
