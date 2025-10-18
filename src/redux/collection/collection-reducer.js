import shopActionType from "./shop-action-type";
const INITIAL_STATE = {
  collections: null,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionType.SHOP_COLLECTION:
    return{
      ...state,
      collections: action.payload
    }
    default:
      return state;
  }
};

export default collectionReducer;
