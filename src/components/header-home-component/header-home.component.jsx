import React from "react";
import { Link, Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setUserAuth } from "../../redux/user/user-action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectThemeColor } from "../../redux/theme/theme-selector";
import { selectHidden } from "../../redux/cart/cart-selector";

import LogoCrown from "../../assets/crown-solid-full.svg";
import ShoppingIcon from "../shopping-icon-component/shopping-icon.component";
import DropDown from "../drop-down-component/drop-down.component";

import { FaRegUserCircle } from "react-icons/fa";

import "./header-home.style.scss";

const HeaderHome = () => {
  const structuredSelector = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden,
    theme: selectThemeColor,
  });
  const { currentUser, hidden, theme } = useSelector(structuredSelector);
  const dispatch = useDispatch();
  return (
    <div className="header" id={theme}>
      <Link to="/" className="logo">
        <img src={LogoCrown} alt="" className="logo-img" />
      </Link>
      <div className="option-container">
        <div className="options">
          <Link to="/shopPage" className="option">
            Shop
          </Link>
          <Link to="/shop" className="option">
            Contact
          </Link>
          <Link to="/history" className="option">
            History
          </Link>
          <div>
            {currentUser && currentUser.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt=""
                style={{ width: "30px", height: "25px", borderRadius: "50%" }}
              />
            ) : (
              <FaRegUserCircle
                className="option"
                style={{ width: "20px", height: "25px" }}
              />
            )}
          </div>
          {currentUser ? (
            <div className="option" onClick={() => dispatch(setUserAuth())}>
              SignOut
            </div>
          ) : (
            <Link to="/signIn" className="option">
              SignIn
            </Link>
          )}
          <ShoppingIcon />
        </div>
      </div>
      {currentUser ? hidden ? null : <DropDown /> : <Navigate to="/signIn" />}
    </div>
  );
};

export default HeaderHome;
