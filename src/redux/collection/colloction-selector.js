import { createSelector } from "reselect";

const COLLECTION_MAP_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectCollectionState = (state) => state.shop;
console.log(selectCollectionState);

export const selectCollection = createSelector(
  [selectCollectionState],
  (collectionSlice) => collectionSlice.collections
);

export const selectCollections = (collectionUrlParam) =>
  createSelector([selectCollection], (collections) =>
    collections.find(
      (collections) => collections.id === COLLECTION_MAP_ID[collectionUrlParam]
    )
  );
