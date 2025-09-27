import {
  dropDownActionType,
  addCartItemType,
  removeQuantityActionType,
  deleteCartItemType,
} from "./cart-action-type";

export const dropDownAction = () => ({
  type: dropDownActionType.REMOVE_DROP_DOWN,
});

export const addCartItemAction = (item) => ({
  type: addCartItemType.ADD_ITEM_TO_CART,
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
