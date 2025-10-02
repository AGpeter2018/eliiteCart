import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({
  children,
  isGoogle,
  signIn,
  signUp,
  inverted,
  ...otherProps
}) => {
  return (
    <div className="submitBtn">
      <button
        className={`${isGoogle ? "style" : ""} ${signUp ? "moving" : ""} ${
          signIn ? "sign" : ""
        } ${inverted ? "inverted" : ""} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
