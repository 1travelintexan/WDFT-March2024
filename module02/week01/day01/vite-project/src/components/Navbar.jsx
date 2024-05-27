import logo from "../assets/ihlogo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="ironhack heart logo" style={{ height: "80%" }} />
      <h4>Our first Vite Project</h4>
      <button>Click Me!</button>
    </div>
  );
};
export default Navbar;
