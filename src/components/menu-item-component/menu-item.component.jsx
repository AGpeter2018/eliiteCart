import React from "react";
import { useNavigate } from "react-router-dom";

import { selectThemeColor } from "../../redux/theme/theme-selector";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { themeChangeAction } from "../../redux/theme/theme-action";

import "./menu-item.style.scss";

const MenuItem = ({ imageUrl, title, linkUrl, size }) => {
    const structureSelector = createStructuredSelector({
    theme: selectThemeColor,
  });
  const { theme } = useSelector(structureSelector);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(linkUrl);
  };
  return (
    <div className={`${size} menu-item`} id={theme} onClick={handleClick}>
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
