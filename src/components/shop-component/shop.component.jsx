import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../collection-preview-component/collection-preview.component";

import "./shop.style.scss";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop">
        {this.state.collections.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default Shop;
