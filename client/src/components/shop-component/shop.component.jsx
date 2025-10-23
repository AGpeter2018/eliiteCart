import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import "./shop.style.scss";
import { fetchCollections } from "../../redux/collection/shop-action";

import CollectionOverviewContainer from "../container-components/collection-overview-container";
import CollectionPageContainer from "../container-components/collection-page-container";

const Shop = () => {
  const dispatch = useDispatch()
 
  useEffect(() => {
    // observable pattern
    // const collectionRef = firestore.collection('collections')
    // const unSubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionMap = convertCollectionSnapshotToMap(snapshot)
    //   dispatch(shopAction(collectionMap))
    //   setLoading(false)
    // })

    // promise pattern
    dispatch(fetchCollections())

  }, [dispatch])
  
  return (
    <div className="shop">        
      <Routes>
        <Route index element={<CollectionOverviewContainer />} />
        <Route path=":collectionId" element={ <CollectionPageContainer  />} />
      </Routes>
    </div>
  );
};

export default Shop;
