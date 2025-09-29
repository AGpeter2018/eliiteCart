import { createSelector } from "reselect";

const selectCollectionState = (state) => state.shop;
console.log(selectCollectionState);

export const selectCollection = createSelector(
  [selectCollectionState],
  (collectionSlice) => collectionSlice.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollection],
  (collections) => Object.key(collections).map((key) => collections[key])
);

export const selectCollections = (collectionUrlParam) =>
  createSelector(
    [selectCollection],
    (collections) => collections[collectionUrlParam]
  );
