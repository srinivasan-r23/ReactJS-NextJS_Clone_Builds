import IconButton from "@material-ui/core/IconButton";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { auth } from "./firebase";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles({
  header__icon: {
    padding: "20px",
  },
});

const Header = ({ backButton }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <HeaderSection>
      {backButton ? (
        <IconButton>
          <ArrowBackIosIcon
            fontSize="large"
            className={classes.header__icon}
            onClick={() => history.replace(backButton)}
          />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon
            fontSize="large"
            className={classes.header__icon}
            onClick={() => auth.signOut()}
          />
        </IconButton>
      )}
      <Link to="/">
        <TinderLogoSection
          src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png"
          alt="Tinder"
        />
      </Link>
      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" className={classes.header__icon} />
        </IconButton>
      </Link>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid#f9f9f9;
  width: 100vw;
`;
const TinderLogoSection = styled.img`
  height: 40px;
  object-fit: contain;
  cursor: pointer;
`;
