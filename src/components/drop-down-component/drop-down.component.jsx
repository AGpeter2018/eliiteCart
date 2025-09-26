import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./drop-down.style.scss";

const DropDown = () => {
  return (
    <div className="cart-drop-down">
      <div className="cart-items" />
      <CustomButton>Checkout your items</CustomButton>;
    </div>
  );
};

export default DropDown;
