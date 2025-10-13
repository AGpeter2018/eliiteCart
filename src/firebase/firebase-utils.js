import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5Wt0OApzIC8XHk1I0-E4JsG9grDYYsj8",
  authDomain: "elitecart-923ec.firebaseapp.com",
  projectId: "elitecart-923ec",
  storageBucket: "elitecart-923ec.firebasestorage",
  messagingSenderId: "956033410133",
  appId: "1:956033410133:web:fe6f32fcf009c82ebea0dc",
  measurementId: "G-6DQWD3L4GG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const createUserProfile = async (userAuth, others) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //   console.log(userRef);
  const snapshot = await userRef.get();
  //   console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...others,
      });
    } catch (error) {
      console.log(error.message);
    }
  } else {
    // Ensure photoURL stays updated
    const { photoURL } = userAuth;
    if (photoURL && snapshot.data().photoURL !== photoURL) {
      await userRef.update({ photoURL });
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
