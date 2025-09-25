import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, otherProps, isGoogle, signUp }) => {
  return (
    <div className="submitBtn">
      <button
        className={`${isGoogle ? "style" : ""} ${
          signUp ? "moving" : ""
        } submit`}
        {...otherProps}
      ></button>
      {children}
    </div>
  );
};

export default CustomButton;
