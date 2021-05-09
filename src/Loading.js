import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadingHeader>
      <ImageTag
        src="https://images.ctfassets.net/hnej7db5iwb1/B41O3E2v0OUaMcaUoqY2w/83b51e416d24eb6fdecfeef75b8000ac/tinder-logo-white.png"
        alt="Tinder Icon"
      />
    </LoadingHeader>
  );
};

export default Loading;

const LoadingHeader = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff512f;
  background: -webkit-linear-gradient(to bottom, #dd2476, #ff512f);
  background: linear-gradient(to bottom, #dd2476, #ff512f);
`;
const animate = keyframes`
    0%{
        transform:scale(1);
    }
    50%{
        transform:scale(1.5);
    }
    100%{
        transform:scale(1);

    }
`;
const ImageTag = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  animation: ${animate} 1s linear;
`;
