import React from "react";
import SHOP_DATA from "../../redux/collection/shop.data";

import { Routes, Route } from "react-router-dom";

import CollectionOverview from "../collections-overview-component/collections-overview.component";
import CollectionPage from "../../pages/collection-component/collection.component";

import "./shop.style.scss";

const Shop = () => {
  return (
    <div className="shop">
      <Routes>
        <Route index element={<CollectionOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default Shop;
