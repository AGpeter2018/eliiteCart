import React from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";

import { selectThemeColor } from "../../redux/theme/theme-selector";
import { themeChangeAction } from "../../redux/theme/theme-action";
import { createStructuredSelector } from "reselect";

import "./header.style.scss";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const structuredSelector = createStructuredSelector({
    theme: selectThemeColor,
  });
  const { theme } = useSelector(structuredSelector);
  return (
    <div className="nav-bar-container" id={theme}>
      <div className="logo">
        <h1>EliteCart</h1>
      </div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signIn">Sign In</Link>
        <div className="switch">
          <span style={{ marginRight: 8, fontWeight: 500 }}>
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
          <ReactSwitch
            onChange={() => dispatch(themeChangeAction())}
            checked={theme === "dark"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
