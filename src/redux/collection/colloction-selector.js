import { createSelector } from "reselect";

const selectCollectionState = (state) => state.shop;
console.log(selectCollectionState);

export const selectCollection = createSelector(
  [selectCollectionState],
  (collectionSlice) => collectionSlice.collections
);
