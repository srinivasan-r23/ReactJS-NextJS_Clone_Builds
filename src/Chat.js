import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  chatImage: {
    marginRight: "20px",
  },
});

const Chat = ({ name, message, profilePic, timestamp }) => {
  const classes = useStyles();
  return (
    <Link
      to={`/chats/${name}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ChatContainer>
        <Avatar alt={name} src={profilePic} className={classes.chatImage} />
        <ChatDetail>
          <h2>{name}</h2>
          <p>{message}</p>
        </ChatDetail>
        <TimeStamp>{timestamp}</TimeStamp>
      </ChatContainer>
    </Link>
  );
};

export default Chat;

const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
  border-bottom: 1px solid #fafafa;
`;
const ChatDetail = styled.div`
  flex: 1;
  p {
    color: gray;
  }
`;
const TimeStamp = styled.p`
  color: lightgray;
`;
