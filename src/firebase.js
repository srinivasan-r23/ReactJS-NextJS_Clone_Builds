import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmmGKBJjP3NKm353e5N1Aq8VuA0VlUCbw",
  authDomain: "hotstar-clone-e0ffa.firebaseapp.com",
  projectId: "hotstar-clone-e0ffa",
  storageBucket: "hotstar-clone-e0ffa.appspot.com",
  messagingSenderId: "531715805646",
  appId: "1:531715805646:web:57d835019b9e67984a5b9f",
  measurementId: "G-STBD6JQEVW",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
