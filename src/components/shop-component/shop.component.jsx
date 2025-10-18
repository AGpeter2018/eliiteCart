import React, { useEffect, useState } from "react";

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase-utils";

import {  useDispatch } from "react-redux";

import shopAction from "../../redux/collection/shop-action";


import { Routes, Route } from "react-router-dom";

import CollectionOverview from "../collections-overview-component/collections-overview.component";
import CollectionPage from "../../pages/collection-component/collection.component";

import "./shop.style.scss";
import { fetchCollections } from "../../redux/user/user-action";

const Shop = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // fetch pattern
  // const fetchPattern = async () => {
  //   const url = `https://firestore.googleapis.com/v1/projects/${
  // 'elitecart-923ec'}/databases/(default)/documents/collections`
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   console.log(data)
  // }
  useEffect(() => {
    // fetchPattern()
    // observable pattern
    // const collectionRef = firestore.collection('collections')
    // const unSubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionMap = convertCollectionSnapshotToMap(snapshot)
    //   dispatch(shopAction(collectionMap))
    //   setLoading(false)
    // })

    // promise pattern
    dispatch(fetchCollections)
      setLoading(false)
 
  }, [dispatch])
  return (
    <div className="shop">
         {loading ? (
         <div className="spinner">
          <div className="spin"></div>
          <div className="text-spin">EliteCart...</div>
        </div>
      )
    :
      (<Routes>
        <Route index element={<CollectionOverview loading={loading} />} />
        <Route path=":collectionId" element={<CollectionPage loading={loading} />} />
      </Routes>)
}
    </div>
  );
};

export default Shop;
