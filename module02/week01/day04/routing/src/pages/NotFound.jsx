import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  function handleNavigate() {
    console.log("navigate to home");
    nav("/");
  }
  return (
    <div>
      404 NotFound
      <h3>Maybe you should head back the home page </h3>
      <button onClick={handleNavigate}>Home</button>
    </div>
  );
};
export default NotFound;
