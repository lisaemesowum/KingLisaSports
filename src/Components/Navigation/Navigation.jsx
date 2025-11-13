import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styling/navigation.css"; // adjust based on actual location
import AOS from "aos";
import "aos/dist/aos.css";

import { RiArrowDropDownFill } from "react-icons/ri";
import logo from "../../assets/myLogoWhite.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <>
      <nav>
        <div className="nav-area" >
          <div className="brand-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-container" data-aos="zoom-in-up">
            <div className="nav-hover">
              {" "}
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="nav-hover">
              <NavLink to="/Fixtures">Fixtures</NavLink>
            </div>
            <div className="nav-hover">
              <NavLink to="/Highlights">Highlights</NavLink>
            </div>
            <div className="nav-hover">
              <NavLink to="/LiveMatches">Live Matches</NavLink>
            </div>
            <div className="nav-hover">
              <NavLink to="/Results">Results</NavLink>
            </div>
            <div className="nav-hover">
              <NavLink to="/Teams">Teams</NavLink>
            </div>
            <div className="nav-dropdown">
              <button
                className="navdropbtn"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                Account <RiArrowDropDownFill />
              </button>
              {isOpen && (
                <div className="nav-dropdown-content">
                  <NavLink to="/Signup" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </NavLink>
                  <NavLink to="/Login" onClick={() => setIsOpen(false)}>
                    Login
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
