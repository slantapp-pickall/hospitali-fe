import "../styles/navBar.scss";
import { RxCaretDown } from "react-icons/rx";
import logo from "../assets/icons/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Prompt from "../pages/Prompt";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  function handleToggle() {
    setToggleMenu(!toggleMenu);
  }
 

  const [getStarted, setGetStarted] = useState(false);

 

  const [isBackgroundColored, setIsBackgroundColored] = useState(false);

  const handleScroll = () => {
    const threshold = 150;
    setIsBackgroundColored(window.scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isBackgroundColored?"background-colored onmobile-bg":"onmobile-bg"}>
      <nav className={"nav-bar-container "} id="navBar">
        <div className="logo-section">
          <div className="logo">
            <img src={logo} alt="homely" />
          </div>
        </div>

        <div className="mobile-menu" onClick={() => handleToggle()}>
          {toggleMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <div className={toggleMenu ? "mobile-buttons" : "buttons-section"}>
          <button>
            <a href="#about">About Us</a>
          </button>
          <button>
            <a href="#articles">Articles</a>
          </button>
          <button>
            <a href="#property">Property</a>
          </button>
          <button>
            <a href="#car-rental">Dropoffs</a>
          </button>
          <button onClick={() => setGetStarted(true)}>Get Started</button>
        </div>

        <div className="modals">
          {getStarted ? (
            <Prompt handleCloseModal={() => setGetStarted(false)} />
          ) : null}
        </div>
      </nav>
    </div>
  );
}
