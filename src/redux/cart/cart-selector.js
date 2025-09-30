import { createSelector } from "reselect";

const cartSelect = (state) => state.cart;

export const selectCart = createSelector(
  [cartSelect],
  (cart) => cart.cartItems
);

export const selectHidden = createSelector([cartSelect], (cart) => cart.hidden);

export const selectItemCount = createSelector([selectCart], (cartItems) =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  )
);

export const selectItemTotal = createSelector([selectCart], (cartItems) =>
  cartItems.reduce(
    (itemAccumulator, item) => itemAccumulator + item.price * item.quantity,
    0
  )
);
