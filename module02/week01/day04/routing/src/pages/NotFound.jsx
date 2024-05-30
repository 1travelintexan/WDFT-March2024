import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      404 NotFound
      <h3>Maybe you should head back the home page </h3>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};
export default NotFound;
