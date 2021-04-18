import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Button from "./Button";
import "./navbar.css";
import { ReactComponent as Logo } from "../images/logo/logo.svg";
import { ReactComponent as Fateh } from "../images/logo/fateh.svg";
import { ReactComponent as Fitness } from "../images/logo/fitness.svg";

import ScrollIntoView from "react-scroll-into-view";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const openAddress = () => {
    window.open("https://maps.google.com?q=" + 31.952494 + "," + 75.33261);
  };

  window.addEventListener("resize", showButton);

  return (
    <div className="navbar" id="nav">
      <div className="tophead">
        <h6>+91-9815100033 &nbsp;&nbsp;|&nbsp;&nbsp; fatehfitness@gmail.com</h6>
        <Link className="address" onClick={openAddress} to="/#">
          <MdLocationOn style={{ color: "whitesmoke" }} />
          <h6>Near Burj Sahib, Dhariwal, Gurdaspur</h6>
        </Link>
      </div>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Logo className="navbar-icon" />
          <div className="brand-name">
            <Fateh className="navbar-icon1" />
            <Fitness className="navbar-icon2" />
          </div>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <ScrollIntoView selector="#nav">
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/"
                onClick={() => {
                  setClick(false);
                }}
              >
                Home
              </Link>
            </li>
          </ScrollIntoView>

          <ScrollIntoView selector="#memberships">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => {
                  setClick(false);
                }}
              >
                Memberships
              </Link>
            </li>
          </ScrollIntoView>

          <ScrollIntoView selector="#services">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => {
                  setClick(false);
                }}
              >
                Services
              </Link>
            </li>
          </ScrollIntoView>

          <ScrollIntoView selector="#footer">
            <li className="nav-item">
              <Link className="nav-links" to="/">
                Social Feed
              </Link>
            </li>
          </ScrollIntoView>
          <div>
            <li className="nav-btn">
              {button ? (
                <Link to="/signup">
                  <Button buttonStyle="btn--primary--outline">
                    Free Trial
                  </Button>
                </Link>
              ) : (
                <Link to="/signup">
                  <Button
                    buttonStyle="btn--primary--outline"
                    buttonSize="btn--mobile"
                  >
                    Free Trial
                  </Button>
                </Link>
              )}
            </li>
          </div>
        </ul>
        <div className="menu-icon-div">
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
