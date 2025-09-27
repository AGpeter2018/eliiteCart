import React from "react";
import SHOP_DATA from "../../redux/collection/shop.data";

import { selectCollection } from "../../redux/collection/colloction-selector";

import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview-component/collection-preview.component";

import "./shop.style.scss";

const Shop = () => {
  const structuredSelector = createStructuredSelector({
    collections: selectCollection,
  });
  const { collections } = useSelector(structuredSelector);
  console.log(collections);
  return (
    <div className="shop">
      {collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default Shop;
