import { createSelector } from "reselect";

const cartSelect = (state) => state.hidden;
const cartItemSelect = (state) => state.cart;

export const selectHidden = createSelector(
  [cartSelect],
  (hidden) => hidden.hidden
);

export const selectCart = createSelector(
  [cartSelect],
  (cartItem) => cartItem.cartItems
);
