import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>HomePage</h2>
      <Link to="/pets">See the Pets</Link>
    </div>
  );
};
export default HomePage;
