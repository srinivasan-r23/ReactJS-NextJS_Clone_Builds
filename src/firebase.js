// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBNTdKS2lHBm_yvVxl5cfXLAupg5S7vjQY",
  authDomain: "netflix-clone-1d97b.firebaseapp.com",
  projectId: "netflix-clone-1d97b",
  storageBucket: "netflix-clone-1d97b.appspot.com",
  messagingSenderId: "640914378010",
  appId: "1:640914378010:web:c6765058fa6d08cc1270a3",
  measurementId: "G-9YNN9RV8JN",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
