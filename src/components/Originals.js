import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { selectOriginal } from "../features/movie/movieSlice";

const Originals = () => {
  const movies = useSelector(selectOriginal);
  return (
    <Container>
      <H4>Originals</H4>
      <Content>
        {movies &&
          movies.map((movie) => {
            return (
              <Wrap key={movie.id}>
                {movie.id}
                <Link to={`/detail/${movie.id}`}>
                  <Img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
};

export default Originals;

const Img = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
  width: 100%;
  top: 0;
  z-index: 1;
`;
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.69),
    0px 16px 10px -18px rgba(0, 0, 0, 0.73);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    box-shadow: 0px 40px 58px -16px rgba(0, 0, 0, 0.8),
      0px 30px 22px -10px (0, 0, 0, 0.72);
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Container = styled.div`
  padding: 0 0 26px;
`;
const H4 = styled.h4``;
