import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ currentUser, setCurrentUser }) => {
  console.log("In the navbar component", currentUser);
  const nav = useNavigate();
  const handleLogout = () => {
    setCurrentUser(null);
    nav("/");
  };
  return (
    <nav>
      <h3>Logo</h3>
      <h2>My cool Site </h2>
      {currentUser ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
};
export default Navbar;
