import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "../styles/home1.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="home">
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="#">
              <Logo className="logo" />
            </a>
          </div>

          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#about">ABOUT</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">CONTACT</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">BLOG</a>
            </li>
          </ul>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
