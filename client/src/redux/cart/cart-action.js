import {
  dropDownActionType,
  addCartItemType,
  addCartItemHistoryType,
  removeQuantityActionType,
  deleteCartItemType,
  deleteHistoryItemType,
  clearCartItemType,
} from "./cart-action-type";

export const dropDownAction = () => ({
  type: dropDownActionType.REMOVE_DROP_DOWN,
});

export const addCartItemAction = (item) => ({
  type: addCartItemType.ADD_ITEM_TO_CART,
  payload: item,
});

export const addCartItemHistory = (item) => ({
  type: addCartItemHistoryType.ADD_ITEM_HISTORY,
  payload: item,
});

export const removeQuantityAction = (item) => ({
  type: removeQuantityActionType.CART_QUANTITY_REMOVED,
  payload: item,
});

export const deleteCartItem = (item) => ({
  type: deleteCartItemType.DELETE_CART_ITEM,
  payload: item,
});

export const deleteHistoryItem = (item) => ({
  type: deleteHistoryItemType.DELETE_HISTORY_ITEM,
  payload: item,
});

export const clearCartItem = (item) => ({
  type: clearCartItemType.CLEAR_CART,
  payload: item,
});
