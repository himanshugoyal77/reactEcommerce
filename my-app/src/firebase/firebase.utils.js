// import firebase from 'firebase/app'
// import 'firebase/firestore';
// import 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAcv0vb87rXARlF2NNFKlpvZ3IpgBKOtaY",
    authDomain: "crwn-db-3042e.firebaseapp.com",
    projectId: "crwn-db-3042e",
    storageBucket: "crwn-db-3042e.appspot.com",
    messagingSenderId: "140218693109",
    appId: "1:140218693109:web:7934540480fb0a09a39cbc",
    measurementId: "G-SLWFQL1S4G"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log("error causing user",error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;