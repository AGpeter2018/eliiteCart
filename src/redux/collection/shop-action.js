import shopActionType from "./shop-action-type"
const shopAction = (collectionNew) => ({
    type:shopActionType.SHOP_COLLECTION,
    payload: collectionNew
})

export default shopAction

