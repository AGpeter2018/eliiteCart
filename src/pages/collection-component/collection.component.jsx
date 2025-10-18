import React from "react";

import { selectCollections } from "../../redux/collection/colloction-selector";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionItems from "../../components/collection-item-component/collection-item.component";

import "./collection.style.scss";
import { useParams } from "react-router-dom";

const CollectionPage = ({loading}) => {
  const { collectionId } = useParams();
  const structuredSelector = createStructuredSelector({
    collection: selectCollections(collectionId),
  });
  const { collection } = useSelector(structuredSelector);
  const { title, items } = collection;

   if(loading) {
    return(
         <div className="spinner">
          <div className="spin"></div>
          <div className="text-spin">EliteCart...</div>
        </div>
      )
    }
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => {
          return <CollectionItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
