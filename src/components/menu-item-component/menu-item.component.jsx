import React from "react";
import { useNavigate } from "react-router-dom";

import "./menu-item.style.scss";

const MenuItem = ({ imageUrl, title, linkUrl, size }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Navigating to:", linkUrl);
    navigate(linkUrl);
  };
  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      ></div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  );
};

export default MenuItem;
