import React from "react";
import "./history.style.scss";
import { selectCartItemHistory } from "../../redux/cart/cart-selector";
import { deleteHistoryItem } from "../../redux/cart/cart-action";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import HistoryItem from "../history-item-component/history-item.component";
import { selectThemeColor } from "../../redux/theme/theme-selector";

const HistoryPage = () => {
  const StructuredSelector = createStructuredSelector({
    cartHistory: selectCartItemHistory,
    theme: selectThemeColor,
  });
  const { cartHistory, theme } = useSelector(StructuredSelector);
  console.log(cartHistory);
  return (
    <div className="history">
      <h1>HISTORY</h1>
      <div className="history-items">
        {cartHistory.length ? (
          cartHistory.map((item) => {
            console.log(item);
            return <HistoryItem key={item.id} item={item} />;
          })
        ) : (
          <p className="history-text" id={theme}>
            Your history is empty, pls make a cart
          </p>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
