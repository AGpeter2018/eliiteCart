import React from "react";

import { dropDownAction } from "../../redux/cart/cart-action";
import { useDispatch, useSelector } from "react-redux";

import { selectItemCount } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";

import { ReactComponent as CartIcon } from "../../assets/122 shopping-bag.svg";

import "./shopping-icon.style.scss";

const ShoppingIcon = () => {
  const structuredSelector = createStructuredSelector({
    cart: selectItemCount,
  });
  const { cart } = useSelector(structuredSelector);

  const dispatch = useDispatch();
  return (
    <div className="cart-icon">
      <CartIcon
        className="shopping-icon"
        onClick={() => dispatch(dropDownAction())}
      />
      <span className="item-count">{cart}</span>
    </div>
  );
};

export default ShoppingIcon;
