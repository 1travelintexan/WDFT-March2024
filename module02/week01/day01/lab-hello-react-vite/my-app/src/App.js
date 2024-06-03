import "./App.css";
import ironhackLogo from "./asessts/ironhack-logo-xs.png";
import menuIcon from "./asessts/menu-top-xs.png";
import icon1 from "./asessts/icon1.png";
import icon2 from "./asessts/icon2.png";
import icon3 from "./asessts/icon3.png";
import icon4 from "./asessts/icon4.png";
function App() {
  return (
    <>
      <header>
        <div className="images-container">
          <img src={ironhackLogo} alt="ironhack logo" />
          <img src={menuIcon} alt="menu" />
        </div>
        <div className="header-text">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use
            <br />
            the most popular frontend library
            <br />
            and become a super ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </header>
      <div className="jonnys-container">
        <article>
          <img src={icon1} alt="icon 1" />
          <h5>Declarative</h5>
          <p>
            dsakjlkajd
            <br />
            jlajlfadskjfa
            <br />
            ljkajdlfkaj
          </p>
        </article>
        <article>
          <img src={icon2} alt="icon 1" />
          <h5>Components</h5>
          <p>
            dsakjlkajd
            <br />
            jlajlfadskjfa
            <br />
            ljkajdlfkaj
          </p>
        </article>
        <article>
          <img src={icon3} alt="icon 1" />
          <h5>Single-Way</h5>
          <p>
            dsakjlkajd
            <br />
            jlajlfadskjfa
            <br />
            ljkajdlfkaj
          </p>
        </article>
        <article>
          <img src={icon4} alt="icon 1" />
          <h5>JSX</h5>
          <p>
            dsakjlkajd
            <br />
            jlajlfadskjfa
            <br />
            ljkajdlfkaj
          </p>
        </article>
      </div>
    </>
  );
}

export default App;
