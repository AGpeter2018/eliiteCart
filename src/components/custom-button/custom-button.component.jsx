import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, otherProps, isGoogle }) => {
  return (
    <div className="submitBtn">
      <button
        className={`${isGoogle ? "style" : ""}submit`}
        {...otherProps}
      ></button>
      {children}
    </div>
  );
};

export default CustomButton;
