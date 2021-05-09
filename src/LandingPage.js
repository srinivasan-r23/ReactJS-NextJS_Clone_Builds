import { Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import CardContainer from "./CardContainer";
import SignInScreen from "./SignInScreen";

const useStyles = makeStyles({
  loginScreen__button: {
    position: "fixed",
    right: "20px",
    top: "20px",
    padding: "10px 30px",
    backgroundColor: "#fff",
    cursor: "pointer",
    color: "#ff512f",
    fontWeight: "550",

    "&:hover": {
      background: "linear-gradient(to right, #dd2476, #ff512f)",
      color: "#fff",
    },
  },
  typo: {
    fontWeight: "600",
    fontSize: "110px",
  },
  createAccount: {
    borderRadius: "25px",
    color: "#fff",
    padding: "15px 40px",
    background: "linear-gradient(to right, #dd2476,#ff512f)",

    "&:hover": {
      background: "linear-gradient(to right, #ff512f, #dd2476)",
    },
  },
});

const LandingPage = () => {
  const [show, handleShow] = useState(true);

  const transitionNavBar = () => {
    if (window.scrollY > 550) {
      handleShow(false);
    } else {
      handleShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);
  return (
    <>
      <LoginScreen>
        <div className={classes.loginScreen__background}>
          {show && (
            <LogoContainer
              src="https://www.tinderpressroom.com/images/tinder_logo_white.png"
              alt="Tinder logo"
            />
          )}
          {show && (
            <Button
              variant="contained"
              className={classes.loginScreen__button}
              onClick={() => setSignIn(true)}
            >
              Log in
            </Button>
          )}
          <GradientDiv />
        </div>

        <LoginScreenBody>
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <CenterContainer>
                <Typography className={classes.typo}>
                  Start something epic.
                </Typography>
                <Button
                  variant="contained"
                  className={classes.createAccount}
                  onClick={() => setSignIn(true)}
                >
                  Create Account
                </Button>
              </CenterContainer>
            </>
          )}
        </LoginScreenBody>
      </LoginScreen>
      <CardContainer />
    </>
  );
};

export default LandingPage;

const LoginScreen = styled.div`
  position: relative;
  height: 100%;
  background: url("https://tinder.com/static/build/m/8ad4e4299ef5e377d2ef00ba5c94c44c.webp")
    no-repeat center center fixed;
  background-size: cover;
  box-shadow: 1px 5px 8px;
`;

const LogoContainer = styled.img`
  position: fixed;
  left: 0;
  top: 20px;
  width: 150px;
  object-fit: contain;
  padding-left: 30px;
  cursor: pointer;
`;
const CenterContainer = styled.div`
  display: block;
`;
const GradientDiv = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
const LoginScreenBody = styled.div`
  color: #fff;
  padding: 20px;
  position: absolute;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  top: 35%;
  left: 0;
  right: 0;
`;
