import { Avatar, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  chatScreenImage: {},
  chatScreenInputButton: {
    border: "none",
    marginRight: "20px",
    backgroundColor: "white",
    fontWeight: "bold",
    color: "#fe3d71",
    outline: "none",
  },
});

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { name: "Ellem", image: "...", message: "Whats up" },
    { name: "Ellem", image: "...", message: "bruh" },
    { message: "hey man" },
  ]);

  const classes = useStyles();
  const nameMatch = useParams();

  const handleSend = (e) => {
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <ChatScreenContainer>
      <ChatScreenTimeStamp>
        YOU MATCHED WITH {nameMatch.person}
      </ChatScreenTimeStamp>
      {messages.map((message) => {
        return message.name ? (
          <ChatScreenMessage>
            <Avatar
              className={classes.chatScreenImage}
              alt={message.name}
              src={message.image}
            />
            <ChatScreenText>{message.message}</ChatScreenText>
          </ChatScreenMessage>
        ) : (
          <ChatScreenMessage>
            <ChatMyMessage>{message.message}</ChatMyMessage>
          </ChatScreenMessage>
        );
      })}
      <ChatScreenInput onSubmit={(e) => e.preventDefault()}>
        <ChatScreenInputField
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSend}
          className={classes.chatScreenInputButton}
        >
          SEND
        </Button>
      </ChatScreenInput>
    </ChatScreenContainer>
  );
};

export default ChatScreen;

const ChatScreenContainer = styled.div``;
const ChatScreenMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;
const ChatScreenText = styled.div`
  margin-left: 10px;
  background-color: lightgray;
  padding: 12px;
  border-radius: 20px;
`;
const ChatScreenTimeStamp = styled.p`
  text-align: center;
  color: gray;
  padding: 20px;
`;
const ChatMyMessage = styled.p`
  margin-left: auto;
  background-color: #29b3cd;
  padding: 12px;
  border-radius: 20px;
  color: white;
`;
const ChatScreenInput = styled.form`
  display: flex;
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid lightgray;
`;
const ChatScreenInputField = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
`;
