import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components/macro";
import db from "../firebase";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no documents present in firebase!!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <Img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <Img1 src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <Img2 src="/assets/images/play-icon-black.png" alt="" />
            <Span>Play</Span>
          </Player>
          <Trailer>
            <Img2 src="/assets/images/play-icon-white.png" alt="" />
            <Span>Trailer</Span>
          </Trailer>
          <AddList>
            <Span1 />
            <Span1 />
          </AddList>
          <GroupMatch>
            <Div>
              <Img3 src="/assets/images/group-icon.png" />
            </Div>
          </GroupMatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 8px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Img3 = styled.img`
  width: 100%;
`;
const Div = styled.div`
  height: 40px;
  width: 40px;
  background: rgb(0, 0, 0);
  border-radius: 50%;
`;
const GroupMatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
`;
const Span1 = styled.span`
  background-color: rgb(249, 249, 249);
  display: inline-block;
  &:first-child {
    height: 2px;
    transform: translate(1px, 0px);
    width: 16px;
  }
  &:nth-child(2) {
    height: 16px;
    width: 2px;
    transform: translateX(-8px);
  }
`;
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
`;
const Span = styled.span``;
const Img2 = styled.img`
  width: 32px;
  @media (max-width: 768px) {
    width: 25px;
  }
`;
const Player = styled.div`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 12px;
    margin: 0px 10px 8px 0px;
  }
`;
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const ContentMeta = styled.div`
  max-width: 874px;
`;
const Img1 = styled.img`
  max-width: 600px;
  min-width: 200px;
  width: 35vw;
`;
const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 8px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
`;
const Img = styled.img`
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) {
    width: initial;
  }
`;
const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
`;
const Container = styled.div`
  position: relative;
  display: block;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
