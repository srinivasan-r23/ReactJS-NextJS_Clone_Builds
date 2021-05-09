import React, { useEffect } from "react";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Loading from "./Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import firebase from "firebase";
import { Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  // const [loading, setLoading] = useState(true);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
          name: user.displayName,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <LandingPage />;
  return (
    <>
      <Switch>
        <Route exact path="/chats/:person">
          <Header backButton="/chats" />
          <ChatScreen />
        </Route>
        <Route path="/chats">
          <Header backButton="/" />
          <Chats />
        </Route>
        <Route path="/">
          <Header />
          <TinderCards />
          <SwipeButtons />
        </Route>
      </Switch>
    </>
  );
  // useEffect(() => {
  //   setInterval(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);
  // return <>{loading ? <Loading /> : <LandingPage />}</>;
}

export default App;
