import { userActionType } from "./user-action-type";


import { auth, createUserProfile, firestore } from "../../firebase/firebase-utils";
import shopAction from "../collection/shop-action";
import { convertCollectionSnapshotToMap } from "../../firebase/firebase-utils";

export const setCurrentUser = (user) => ({
  type: userActionType.SET_CURRENT_USER,
  payload: user,
});

export const getUserAuth = () => {
  return (dispatch) => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return unSubscribeFromAuth;
  };
};


export const setUserAuth = () => {
  return async (dispatch) => {
    try {
      auth.signOut();
      dispatch(setCurrentUser(null));
    } catch (error) {
      console.log(error.message);
    }
  };
};

