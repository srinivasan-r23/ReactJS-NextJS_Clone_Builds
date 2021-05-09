import React from "react";
import styled from "styled-components";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  swipeButton__repeat: {
    backgroundColor: "white",
    boxShadow: "0px 10px 53px 0px rgb(0,0,0,0.3)",
    padding: "2vw",
    color: "#f5b748",
  },
  swipeButton__left: {
    backgroundColor: "white",
    boxShadow: "0px 10px 53px 0px rgb(0,0,0,0.3)",
    padding: "2vw",
    color: "#ec5e6f",
  },
  swipeButton__start: {
    backgroundColor: "white",
    boxShadow: "0px 10px 53px 0px rgb(0,0,0,0.3)",
    padding: "2vw",
    color: "#76e2b3",
  },
  swipeButton__right: {
    backgroundColor: "white",
    boxShadow: "0px 10px 53px 0px rgb(0,0,0,0.3)",
    padding: "2vw",
    color: "#915dd1",
  },
  swipeButton__lightning: {
    backgroundColor: "white",
    boxShadow: "0px 10px 53px 0px rgb(0,0,0,0.3)",
    padding: "2vw",
    color: "#f5b748",
  },
});
const SwipeButtons = () => {
  const classes = useStyles();
  return (
    <SwipeButton>
      <IconButton className={classes.swipeButton__repeat}>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className={classes.swipeButton__left}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className={classes.swipeButton__start}>
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className={classes.swipeButton__right}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className={classes.swipeButton__lightning}>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </SwipeButton>
  );
};

export default SwipeButtons;

const SwipeButton = styled.div`
  position: fixed;
  bottom: 3vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
