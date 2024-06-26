import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import axios from "axios";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const nav = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setUsername(e.target.value);

  const handleSignupSubmit = (e) => {
    //always stop the page from reloading when we submit a form
    e.preventDefault();
    // Create an object representing the request body
    //the object is ok for creating a user, but with an image it needs to be form data
    //const requestBody = { email, password, username };

    const image = e.target.image.files[0];
    const myFormData = new FormData();
    myFormData.append("imageUrl", image); //myFormData is like an object {imageUrl: image}
    myFormData.append("username", username);
    myFormData.append("email", email);
    myFormData.append("password", password);
    axios
      .post("http://localhost:5005/auth/signup", myFormData)
      .then(() => {
        nav("/login");
      })
      .catch((err) => console.log(err));

    // // Or using a service
    // authService
    //   .signup(requestBody)
    //   .then((response) => {
    //     // If the POST request is successful redirect to the login page
    //     navigate("/login");
    //   })
    //   .catch((error) => {
    //     // If the request resolves with an error, set the error message in the state
    //     const errorDescription = error.response.data.message;
    //     setErrorMessage(errorDescription);
    //   });
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={username} onChange={handleName} />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <label>User Image:</label>
        <input type="file" name="image" />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;
