import logo2 from "../assets/ironhack.png";

const Banner = () => {
  // console.log("normal js ", logo2);

  return (
    <>
      <div className="banner">
        <h1>Vite and Ironhack</h1>
        <img src={logo2} alt="logo 2" id="logo2" />
      </div>
    </>
  );
};
export default Banner;
