import { dropDownActionType, addCartItemType } from "./cart-action-type";

export const dropDownAction = () => ({
  type: dropDownActionType.REMOVE_DROP_DOWN,
});

export const addCartItemAction = (item) => ({
  type: addCartItemType.ADD_ITEM_TO_CART,
  payload: item,
});
