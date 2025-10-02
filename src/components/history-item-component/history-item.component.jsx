import React from "react";

import { selectThemeColor } from "../../redux/theme/theme-selector";
import { deleteHistoryItem } from "../../redux/cart/cart-action";
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

  let formattedDate = "";
  let formattedTime = "";
  if (date) {
    const d = new Date(date);
    formattedDate = d.toLocaleDateString();
    formattedTime = d.toLocaleTimeString();
  }

  return (
    <div className="history-cart-item" id={theme}>
      <img src={imageUrl} alt="" />
      <div className="history-item-details">
        <span className="history-name">{name}</span>
        <span className="history-price">
          {quantity} x ${price}
        </span>
        <span className="date">{formattedDate}</span>
        <span className="time">{formattedTime}</span>
        {/* <div
          className="history-remove-btn"
          onClick={() => dispatch(deleteHistoryItem(item))}
        >
          &#10006;
        </div> */}
      </div>
    </div>
  );
};

export default HistoryItem;
