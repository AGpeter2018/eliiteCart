import React from "react";

import CollectionItems from "../collection-item-component/collection-item.component";

import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((el, i) => i < 4)
          .map((item) => (
            <CollectionItems key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
