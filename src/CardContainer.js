import React, { useState } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Carousel from "react-elastic-carousel";
import { makeStyles } from "@material-ui/core/styles";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
  paperStyled: {
    height: "250px",
    width: "100%",
    margin: "15px",
    padding: "20px",
    outline: "none",
  },
  quoteIcon: {
    color: "#e8e8e8",
    fontSize: "68px",
    float: "right",
  },
  icons: {
    paddingRight: "10px",
    "&:hover": {
      color: "#DD2476",
    },
  },
});

const CardContainer = () => {
  const [reviews] = useState([
    {
      id: 1,
      name: "John & Hema",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      name: "Kumar & Wincy ❤️",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      name: "Sam & Lara",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);

  const classes = useStyles();

  return (
    <>
      <CardContainerDiv>
        <CarouselWrapper>
          <Carousel itemsToShow={2} className={classes.carouselStyle}>
            {reviews.map((review) => {
              return (
                <Paper
                  elevation={3}
                  className={classes.paperStyled}
                  key={review.id}
                >
                  <TitleTag>{review.name}</TitleTag>
                  <FormatQuoteIcon className={classes.quoteIcon} />
                  <Hr />
                  <CommentTag>{review.message}</CommentTag>
                </Paper>
              );
            })}
          </Carousel>
        </CarouselWrapper>
      </CardContainerDiv>
      <HR />
      <FooterContainer>
        <div>
          <h3 style={{ color: "rgb(40,40,40)" }}>SAFETY</h3>
          <UL>
            <a href="/" style={{ textDecoration: "none" }}>
              <LI>Community Guidelines</LI>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              <LI>Safety Tips</LI>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              <LI>Safety & Policy</LI>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              <LI>Security</LI>
            </a>
          </UL>
        </div>
        <div className="legal">
          <h3 style={{ color: "rgb(40,40,40)" }}>LEGAL</h3>
          <UL>
            <a href="/" style={{ textDecoration: "none" }}>
              <LI>Privacy</LI>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              <LI>Terms</LI>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              <LI>Cookie Policy</LI>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              <LI>Intellectual Property</LI>
            </a>
          </UL>
        </div>
        <div className="careers">
          <h3 style={{ color: "rgb(40,40,40)" }}>CAREERS</h3>
          <UL>
            <a href="/" style={{ textDecoration: "none" }}>
              <LI>Careers Portal</LI>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              <LI>Tech Blog</LI>
            </a>
          </UL>
        </div>
        <div className="social">
          <H3>Social</H3>
          <InstagramIcon fontSize="medium" className={classes.icons} />
          <YouTubeIcon fontSize="medium" className={classes.icons} />
          <TwitterIcon fontSize="medium" className={classes.icons} />
          <FacebookIcon fontSize="medium" className={classes.icons} />
        </div>
      </FooterContainer>
    </>
  );
};

export default CardContainer;

const CardContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  margin-top: 20px;
`;
const CarouselWrapper = styled.div`
  width: 100%;
`;
const TitleTag = styled.div`
  color: rgb(39, 39, 39);
  font-weight: 700;
  font-size: 20px;
`;
const Hr = styled.hr`
  width: 80%;
  border: none;
  padding-top: 10px;
  border-bottom: 1px solid #e8e8e8;
`;
const HR = styled.hr`
  width: 90%;
  border: none;
  padding-top: 10px;
  border-bottom: 2px solid #e8e8e8;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;
const CommentTag = styled.div`
  color: rgb(162, 162, 162);
  font-size: 17px;
  padding-top: 10px;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 1rem;
  bottom: 1vh;
  position: relative;
`;
const UL = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: 10px;
`;
const LI = styled.li`
  padding-bottom: 5px;
  color: rgb(87, 87, 87);
`;
const H3 = styled.h3`
  color: rgb(40, 40, 40);
  margin-bottom: 10px;
`;
