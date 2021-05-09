import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import { db } from "./firebase";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <TinderCardContainer>
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <CardDiv url={person.url}>
                <H3>{person.name}</H3>
              </CardDiv>
            </TinderCard>
          );
        })}
      </TinderCardContainer>
    </div>
  );
};

export default TinderCards;

const CardDiv = styled.div`
  position: relative;
  width: 600px;
  padding: 20px;
  max-width: 85vw;
  height: 50vh;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 10px 53px 0px rgb(0, 0, 0, 0.3);
  background-image: url(${(props) => props.url});
`;
const TinderCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;
const H3 = styled.h3`
  position: absolute;
  bottom: 10px;
  color: whitesmoke;
`;
