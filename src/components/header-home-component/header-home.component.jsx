import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setUserAuth } from "../../redux/user/user-action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectHidden } from "../../redux/cart/cart-selector";

import LogoCrown from "../../assets/crown-solid-full.svg";
import CartIcon from "../../assets/122 shopping-bag.svg";
import ShoppingIcon from "../shopping-icon-component/shopping-icon.component";
import DropDown from "../drop-down-component/drop-down.component";

import "./header-home.style.scss";

const HeaderHome = () => {
  const structuredSelector = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden,
  });
  const { currentUser, hidden } = useSelector(structuredSelector);
  const dispatch = useDispatch();
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
          {currentUser ? (
            <div className="option" onClick={() => dispatch(setUserAuth())}>
              SignOut
            </div>
          ) : (
            <Link to="/signIn" className="option">
              SignIn
            </Link>
          )}
          {/* <img
            src={CartIcon}
            alt=""
            className="cart-icon"
            onClick={() => dispatch(dropDownAction())}
          /> */}
          <ShoppingIcon />
        </div>
      </div>
      {hidden ? null : <DropDown />}
    </div>
  );
};

export default HeaderHome;
