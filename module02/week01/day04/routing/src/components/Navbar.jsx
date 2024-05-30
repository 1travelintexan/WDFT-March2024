import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/ragnar">Pizza</NavLink>
      <NavLink to="pets">Our Pets</NavLink>
    </nav>
  );
};
export default Navbar;
