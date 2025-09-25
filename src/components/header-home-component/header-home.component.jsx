import React from "react";
import { Link } from "react-router-dom";

import LogoCrown from "../../assets/crown-solid-full.svg";

import "./header-home.style.scss";

const HeaderHome = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={LogoCrown} alt="" className="logo-img" />
      </Link>
      <div className="option-container">
        <div className="options">
          <Link to="/shop" className="option">
            Shop
          </Link>
          <Link to="/shop" className="option">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
