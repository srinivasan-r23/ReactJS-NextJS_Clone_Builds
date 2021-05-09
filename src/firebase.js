import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHySdjRcaD7XbFW9Cof5mfoOj4XOexizQ",
  authDomain: "tinder-clone-a833b.firebaseapp.com",
  projectId: "tinder-clone-a833b",
  storageBucket: "tinder-clone-a833b.appspot.com",
  messagingSenderId: "643343594469",
  appId: "1:643343594469:web:f04b536f2dbd8bf2fb350c",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
