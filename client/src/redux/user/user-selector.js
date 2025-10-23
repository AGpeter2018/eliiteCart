import { createSelector } from "reselect";

export const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (currentUser) => currentUser.currentUser
);
