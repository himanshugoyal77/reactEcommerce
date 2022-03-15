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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;