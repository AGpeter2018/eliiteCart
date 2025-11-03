import React, { useEffect, useState, lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import "./shop.style.scss";
import { fetchCollections } from "../../redux/collection/shop-action";
import Spinner from "../spinner/spinner.component";

const  CollectionOverviewContainer = lazy(() => import('../container-components/collection-overview-container'))
const CollectionPageContainer = lazy(() => import('../container-components/collection-page-container'))

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
      <Suspense fallback={<Spinner/>}>      
      <Routes>
        <Route index element={<CollectionOverviewContainer />} />
        <Route path=":collectionId" element={ <CollectionPageContainer  />} />
      </Routes>
      </Suspense>  
    </div>
  );
};

export default Shop;
