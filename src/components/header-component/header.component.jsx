import React from "react";
import { Link } from "react-router-dom";

import "./header.style.scss";

const Header = () => {
  return (
    <div className="nav-bar-container">
      <div className="logo">
        <h1>EliteCart</h1>
      </div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Sign In</Link>
      </div>
    </div>
  );
};

export default Header;
