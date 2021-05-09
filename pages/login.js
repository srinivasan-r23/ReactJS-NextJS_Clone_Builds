import styled from "styled-components";
import React from "react";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="Whatsapp Logo"
        />
        <Button
          variant="outlined"
          onClick={signIn}
          style={{
            textTransform: "none",
          }}
        >
          <img
            style={{
              height: "18px",
              width: "18px",
              marginRight: "24px",
            }}
            src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png"
            alt="Google Icon"
          />
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
