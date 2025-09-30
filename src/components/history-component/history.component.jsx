import React from "react";
import "./history.style.scss";
import { selectCart } from "../../redux/cart/cart-selector";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import HistoryItem from "../history-item-component/history-item.component";

const HistoryPage = () => {
  const StructuredSelector = createStructuredSelector({
    cartItems: selectCart,
  });
  const { cartItems } = useSelector(StructuredSelector);
  console.log(cartItems);
  return (
    <div className="history">
      <h1>HISTORY</h1>
      <div className="history-items">
        {cartItems.map((item) => {
          console.log(item);
          return <HistoryItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default HistoryPage;
