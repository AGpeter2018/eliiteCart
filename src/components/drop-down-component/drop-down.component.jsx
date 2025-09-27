import React from "react";

import { selectCart } from "../../redux/cart/cart-selector";
import { dropDownAction } from "../../redux/cart/cart-action";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cartItem-component/cartitem.component";

import "./drop-down.style.scss";

const DropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const structuredSelector = createStructuredSelector({
    cart: selectCart,
  });
  const { cart } = useSelector(structuredSelector);
  return (
    <div className="cart-drop-down">
      <div className="cart-items">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(dropDownAction());
          navigate("/checkout");
        }}
      >
        Checkout your items
      </CustomButton>
      ;
    </div>
  );
};

export default DropDown;
