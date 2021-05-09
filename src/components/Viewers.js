import styled from "styled-components/macro";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <Img src="/assets/images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/assets/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <Img src="/assets/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/assets/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <Img src="/assets/images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/assets/videos/national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
      <Wrap>
        <Img src="/assets/images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/assets/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <Img src="/assets/images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/assets/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Img = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  z-index: 1;
  top: 0;
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.69),
    0px 16px 10px -10px rgba(0, 0, 0, 0.73);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
  }
  &:hover {
    box-shadow: 0px 40px 58px -16px rgba(0, 0, 0, 0.88),
      0px 30px 22px -10px rgba(0, 0, 0, 0.72);
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;
const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
