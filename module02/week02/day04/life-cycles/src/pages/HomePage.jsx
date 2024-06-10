import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/signup">Sign Up</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
};
export default HomePage;
