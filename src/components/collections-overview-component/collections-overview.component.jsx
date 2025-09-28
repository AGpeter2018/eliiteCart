import React from "react";

import { selectCollection } from "../../redux/collection/colloction-selector";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview-component/collection-preview.component";

import "./collections-overview.component.style.scss";

const CollectionOverview = () => {
  const structuredSelector = createStructuredSelector({
    collections: selectCollection,
  });
  const { collections } = useSelector(structuredSelector);
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default CollectionOverview;
