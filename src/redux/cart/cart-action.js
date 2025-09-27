import { type } from "@testing-library/user-event/dist/type";
import { dropDownActionType, addCartItemType } from "./cart-action-type";
import { removeQuantityActionType } from "./cart-action-type";

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
