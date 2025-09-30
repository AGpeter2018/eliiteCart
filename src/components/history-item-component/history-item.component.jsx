import React from "react";

import { selectThemeColor } from "../../redux/theme/theme-selector";
import { deleteCartItem } from "../../redux/cart/cart-action";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./history-item.style.scss";

const HistoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const structureSelector = createStructuredSelector({
    theme: selectThemeColor,
  });
  const { theme } = useSelector(structureSelector);
  const { imageUrl, price, quantity, name, date } = item;
  return (
    <div className="history-cart-item" id={theme}>
      <img src={imageUrl} alt="" />
      <div className="history-item-details">
        <span className="history-name">{name}</span>
        <span className="history-price">
          {quantity} x ${price}
        </span>
        <div
          className="history-remove-btn"
          onClick={() => dispatch(deleteCartItem(item))}
        >
          &#10006;
        </div>
        <span className="date">{date}</span>
      </div>
    </div>
  );
};

export default HistoryItem;
