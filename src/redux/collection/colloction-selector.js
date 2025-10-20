import { createSelector } from "reselect";

const selectCollectionState = (state) => state.shop;

export const selectCollection = createSelector(
  [selectCollectionState],
  (collectionSlice) => collectionSlice.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollection],
  (collections) =>  Object.keys(collections).map((key) => collections[key]) 
);

export const selectCollections = (collectionUrlParam) =>
  createSelector(
    [selectCollection],
    (collections) => collections ? collections[collectionUrlParam] : null 
  );

  export const selectShopIsfetching = createSelector(
    [selectCollectionState],
    (ShopIsfetching) => ShopIsfetching.isFetching
   
  )
  
  export const selectIsCollectionLoading = createSelector(
    [selectCollectionState],
    (shop) => !!shop.collections
  )
