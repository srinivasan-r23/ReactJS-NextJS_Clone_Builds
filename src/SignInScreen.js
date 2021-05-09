import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { auth, provider } from "./firebase";

const useStyles = makeStyles({
  ButtonStyle: {
    borderRadius: "25px",
    padding: "13px 50px",
    borderColor: "black",
    opacity: 0.85,
    "&:hover": {
      opacity: 1,
    },
  },
});
const SignInScreen = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  const classes = useStyles();
  return (
    <ModalContainer>
      <Img
        src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png"
        alt="Tinder Icon"
      />
      <H2>CREATE ACCOUNT</H2>
      <TermsDiv>
        By clicking Log In, you agree to our{" "}
        <span style={{ textDecoration: "underline" }}>Terms</span>. Learn how we
        process your data in our{" "}
        <span style={{ textDecoration: "underline" }}>Privacy Policy</span> and{" "}
        <span style={{ textDecoration: "underline" }}>Cookie Policy</span>.
      </TermsDiv>
      <Button
        variant="outlined"
        className={classes.ButtonStyle}
        onClick={signIn}
      >
        <Img
          src="https://freepngimg.com/thumb/google/66274-school-google-pearl-button-up-sign-middle.png"
          alt="Google Icon"
        />
        Log in with Google
      </Button>
      <HR />
      <H2>GET THE APP!</H2>
    </ModalContainer>
  );
};

export default SignInScreen;

const ModalContainer = styled.div`
  width: 450px;
  height: 450px;
  background-color: #fff;
  border-radius: 10px;
  color: rgb(48, 48, 48);
  padding: 30px;
  position: absolute;
  z-index: 1;
  left: 45%;
  transform: translate(-35%, -25%);
  box-sizing: border-box;
`;
const H2 = styled.h2`
  font-style: italic;
  margin: 1.5rem auto;
`;

const HR = styled.hr`
  width: 90%;
  border: 2px solid #e8e8e8;
  border: none;
  border-bottom: 2px solid #e8e8e8;
  margin: 1em auto;
`;
const TermsDiv = styled.div`
  font-size: 15px;
  margin-bottom: 2rem;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
  padding-right: 20px;
`;
