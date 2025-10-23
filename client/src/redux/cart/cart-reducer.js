import {
  dropDownActionType,
  addCartItemType,
  addCartItemHistoryType,
  removeQuantityActionType,
  deleteCartItemType,
  deleteHistoryItemType,
  clearCartItemType,
} from "./cart-action-type";
import { addItems, cartRemove } from "./cartItem.utility";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  cartHistory: [],
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
    case addCartItemHistoryType.ADD_ITEM_HISTORY:
      return {
        ...state,
        cartHistory: [...state.cartHistory, action.payload],
      };
    case removeQuantityActionType.CART_QUANTITY_REMOVED:
      return {
        ...state,
        cartItems: cartRemove(state.cartItems, action.payload),
      };
    case deleteCartItemType.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case deleteHistoryItemType.DELETE_HISTORY_ITEM:
      return {
        ...state,
        cartHistory: state.cartHistory.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case clearCartItemType.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
