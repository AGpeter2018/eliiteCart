import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogle, signUp, ...otherProps }) => {
  return (
    <div className="submitBtn">
      <button
        className={`${isGoogle ? "style" : ""} ${
          signUp ? "moving" : ""
        } submit`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
