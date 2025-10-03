import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";

import { selectThemeColor } from "../../redux/theme/theme-selector";
import { themeChangeAction } from "../../redux/theme/theme-action";
import { createStructuredSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";

import { IoMenuSharp } from "react-icons/io5";
import MenuClose from "../../assets/menu_close.svg";
import CrownLogo from "../../assets/crown-solid-full.svg";

import "./header.style.scss";

const Header = () => {
  const dispatch = useDispatch();
  const structuredSelector = createStructuredSelector({
    theme: selectThemeColor,
  });
  const { theme } = useSelector(structuredSelector);
  const menuRef = useRef();
  const openRef = () => {
    menuRef.current.style.right = "0";
  };
  const closeRef = () => {
    menuRef.current.style.right = "-500px";
  };
  return (
    <div className="nav-bar-container" id={theme}>
      <div className="logo">
        <h1>EliteCart</h1>
        <img src={CrownLogo} alt="" className="logo-img" />
      </div>
      <IoMenuSharp className="nav-open" onClick={openRef} id={theme} />
      <ul ref={menuRef} className="nav-links">
        <img src={MenuClose} alt="" className="nav-close" onClick={closeRef} />
        <li id={theme}>Home</li>
        <li id={theme}>About</li>
        <li id={theme}>Product</li>
        <li id={theme}>Contact</li>
        <div className="switch">
          <span style={{ marginRight: 8, fontWeight: 500, color: "#7b93fe" }}>
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
          <ReactSwitch
            onChange={() => dispatch(themeChangeAction())}
            checked={theme === "light"}
          />
        </div>
      </ul>
    </div>
  );
};

export default Header;
