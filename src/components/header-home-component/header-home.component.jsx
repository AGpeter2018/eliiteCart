import React from "react";
import { Link } from "react-router-dom";

import { dropDownAction } from "../../redux/cart/cart-action";

import { useSelector, useDispatch } from "react-redux";
import { setUserAuth } from "../../redux/user/user-action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";

import LogoCrown from "../../assets/crown-solid-full.svg";
import CartIcon from "../../assets/122 shopping-bag.svg";
import DropDown from "../drop-down-component/drop-down.component";

import "./header-home.style.scss";

const HeaderHome = () => {
  const hidden = useSelector((state) => state.hidden.hidden);
  const structuredSelector = createStructuredSelector({
    currentUser: selectCurrentUser,
  });
  const { currentUser } = useSelector(structuredSelector);
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
          <img
            src={CartIcon}
            alt=""
            className="cart-icon"
            onClick={() => dispatch(dropDownAction())}
          />
        </div>
      </div>
      {hidden ? null : <DropDown />}
    </div>
  );
};

export default HeaderHome;
