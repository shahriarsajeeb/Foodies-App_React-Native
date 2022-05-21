import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA5qdyJTm5xAS3d6QrY4hmG-4Y_uXNuEtE",
    authDomain: "foodies-790bd.firebaseapp.com",
    projectId: "foodies-790bd",
    storageBucket: "foodies-790bd.appspot.com",
    messagingSenderId: "353001638294",
    appId: "1:353001638294:web:97bbefb18e73e0de4db5b7"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  
  const auth = firebase.auth();

export {auth};
export default firebase;