import React from "react";

import { selectCart, selectItemTotal } from "../../redux/cart/cart-selector";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import Checkout from "../../components/checkout-item-component/checkout-item.component";

import "./checkout-page.style.scss";

const CheckoutPage = () => {
  const structuredSelector = createStructuredSelector({
    cartItems: selectCart,
    total: selectItemTotal,
  });
  const { cartItems, total } = useSelector(structuredSelector);
  console.log(cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="block-header">
          <span>Product</span>
        </div>
        <div className="block-header">
          <span>Description</span>
        </div>
        <div className="block-header">
          <span>Quantity</span>
        </div>
        <div className="block-header">
          <span>Price</span>
        </div>
        <div className="block-header">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        // console.log(cartItem);
        return <Checkout key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
