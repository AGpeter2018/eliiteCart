import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({
  children,
  isGoogle,
  signUp,
  inverted,
  ...otherProps
}) => {
  return (
    <div className="submitBtn">
      <button
        className={`${isGoogle ? "style" : ""} ${signUp ? "moving" : ""} ${
          inverted ? "inverted" : ""
        } custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
