// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApvm6GL4JNvn_wkwwmj0n6RySBYTS4Ebw",
  authDomain: "whatsapp-clone-2cec4.firebaseapp.com",
  projectId: "whatsapp-clone-2cec4",
  storageBucket: "whatsapp-clone-2cec4.appspot.com",
  messagingSenderId: "1038208267695",
  appId: "1:1038208267695:web:8d7665f04ac666acbe6b5a",
  measurementId: "G-7W6C85LYTV",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
