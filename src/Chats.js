import React from "react";
import styled from "styled-components";
import Chat from "./Chat";

const Chats = () => {
  return (
    <ChatsContainer>
      <Chat
        name="John"
        message="No msg"
        timestamp="40 sec ago"
        profilePic="....."
      />
      <Chat
        name="Sylvester"
        message="yoh dude..."
        timestamp="45 sec ago"
        profilePic="..."
      />
      <Chat
        name="Arnold"
        message="see you"
        timestamp="12 sec ago"
        profilePic="..."
      />
      <Chat
        name="Harry Potter"
        message="Byee"
        timestamp="55 sec ago"
        profilePic="..."
      />
    </ChatsContainer>
  );
};

export default Chats;

const ChatsContainer = styled.div``;
