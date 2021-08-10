import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2OElVXvOqpreahwYCPt-WVTB2Lm__b0Y",
  authDomain: "clone-9cec8.firebaseapp.com",
  projectId: "clone-9cec8",
  storageBucket: "clone-9cec8.appspot.com",
  messagingSenderId: "99845107959",
  appId: "1:99845107959:web:d66c497be043c8be5d63f2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
