import React from "react";

import {
  addCartItemAction,
  removeQuantityAction,
  deleteCartItem,
} from "../../redux/cart/cart-action";
import { useDispatch } from "react-redux";

import "./checkout-item.style.scss";

const Checkout = ({ cartItem }) => {
  const dispatch = useDispatch();
  console.log(cartItem);
  const { imageUrl, price, quantity, name } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeQuantityAction(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => dispatch(addCartItemAction(cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-btn"
        onClick={() => dispatch(deleteCartItem(cartItem))}
      >
        &#10006;
      </div>
    </div>
  );
};

export default Checkout;
