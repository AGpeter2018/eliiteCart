import React from "react";

import { selectCollections } from "../../redux/collection/colloction-selector";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionItems from "../../components/collection-item-component/collection-item.component";

import "./collection.style.scss";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const structuredSelector = createStructuredSelector({
    collection: selectCollections(collectionId),
  });
  const { collection } = useSelector(structuredSelector);
  const { title, items } = collection;
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
