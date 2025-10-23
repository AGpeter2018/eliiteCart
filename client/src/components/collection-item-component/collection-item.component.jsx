import React from "react";

import { addCartItemAction } from "../../redux/cart/cart-action";
import { useDispatch } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.style.scss";

const CollectionItems = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div className="cart-up">
        <CustomButton
          inverted
          onClick={() => dispatch(addCartItemAction(item))}
        >
          Add to cart
        </CustomButton>
      </div>
    </div>
  );
};

export default CollectionItems;
