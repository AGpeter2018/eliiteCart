import React from "react";

import { selectCollectionForPreview } from "../../redux/collection/colloction-selector";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview-component/collection-preview.component";

import "./collections-overview.component.style.scss";

const CollectionOverview = ({loading}) => {
  const structuredSelector = createStructuredSelector({
    collections: selectCollectionForPreview,
  });
  const { collections } = useSelector(structuredSelector);
  console.log(collections);
  if(loading) {
    return  (
         <div className="spinner">
          <div className="spin"></div>
          <div className="text-spin">EliteCart...</div>
        </div>
      )
    }
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default CollectionOverview;
