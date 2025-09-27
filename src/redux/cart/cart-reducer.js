import {
  dropDownActionType,
  addCartItemType,
  removeQuantityActionType,
} from "./cart-action-type";
import { addItems, cartRemove } from "./cartItem.utility";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dropDownActionType.REMOVE_DROP_DOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case addCartItemType.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItems(state.cartItems, action.payload),
      };
    case removeQuantityActionType.CART_QUANTITY_REMOVED:
      return {
        ...state,
        cartItems: cartRemove(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
