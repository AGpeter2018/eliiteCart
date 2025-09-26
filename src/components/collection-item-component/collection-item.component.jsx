import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.style.scss";

const CollectionItems = ({ name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div className="cart-up">
        <CustomButton inverted>Add to cart</CustomButton>
      </div>
    </div>
  );
};

export default CollectionItems;
