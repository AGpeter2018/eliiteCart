import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase-utils"

import shopActionType from "./shop-action-type"

const fetchCollectionsActionsStart = () => ({
    type:shopActionType.FETCH_COLLECTIONS_START,
})

const fetchCollectionsActionsSuccess = (collectionMap) => ({
    type:shopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

const fetchCollectionsActionsFailure = (errorMessage) => ({
    type:shopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})



export const fetchCollections = () => {
    return async (dispatch) => {
        try {
            const collectionRef = firestore.collection('collections')
            dispatch(fetchCollectionsActionsStart())
            collectionRef.get().then((snapshot) => {
              const collectionMap = convertCollectionSnapshotToMap(snapshot)
              dispatch(fetchCollectionsActionsSuccess(collectionMap))
            })
        } catch (error) {
            dispatch(fetchCollectionsActionsFailure(error.message))
        }
    } 
}
