import React, { useRef } from "react";
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
import { IoMenuSharp } from "react-icons/io5";
import CloseMenu from "../../assets/menu_close.svg";

import "./header-home.style.scss";

const HeaderHome = () => {
  const structuredSelector = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden,
    theme: selectThemeColor,
  });
  const { currentUser, hidden, theme } = useSelector(structuredSelector);
  const dispatch = useDispatch();
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-500px";
  };
  return (
    <div className="header" id={theme}>
      <Link to="/" className="logo">
        <span>EliteCart</span>
        <img src={LogoCrown} alt="" className="logo-img" />
      </Link>
      <div>
        <IoMenuSharp className="openMenu" onClick={openMenu} id={theme} />
      </div>
      <div className="option-container">
        <div ref={menuRef} className="options">
          <img
            src={CloseMenu}
            alt=""
            className="closeMenu"
            onClick={closeMenu}
            id={theme}
          />
          <Link to="/shopPage" className="option" id={theme}>
            Shop
          </Link>
          <Link to="/shop" className="option" id={theme}>
            Contact
          </Link>
          <Link to="/history" className="option" id={theme}>
            History
          </Link>
          <div className="option option-image" id={theme}>
            {currentUser && currentUser.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt=""
                style={{ width: "30px", height: "25px", borderRadius: "50%" }}
              />
            ) : (
              <FaRegUserCircle
                className="option option-image"
                id={theme}
                style={{ width: "20px", height: "25px" }}
              />
            )}
          </div>
          {currentUser ? (
            <div
              className=" option option-out"
              id={theme}
              onClick={() => dispatch(setUserAuth())}
            >
              SignOut
            </div>
          ) : (
            <Link to="/signIn" className="option option-out" id={theme}>
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
