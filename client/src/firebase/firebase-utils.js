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
  // const collectionReference = firestore.collection('users')
  const snapshot = await userRef.get();
  // const collectionSnapshot = await collectionReference.get()
  // console.log({collection: collectionSnapshot.docs.map(doc => doc.data())});
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

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()

  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
  const convertedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routerName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return convertedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
