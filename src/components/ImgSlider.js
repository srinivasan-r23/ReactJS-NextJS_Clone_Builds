import styled from "styled-components/macro";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <A>
          <Img src="/assets/images/slider-badging.jpg" alt="" />
        </A>
      </Wrap>
      <Wrap>
        <A>
          <Img src="/assets/images/slider-badag.jpg" alt="" />
        </A>
      </Wrap>
      <Wrap>
        <A>
          <Img src="/assets/images/slider-scale.jpg" alt="" />
        </A>
      </Wrap>
      <Wrap>
        <A>
          <Img src="/assets/images/slider-scales.jpg" alt="" />
        </A>
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const A = styled.a`
  border-radius: 4px;
  box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.69),
    0px 16px 10px -10px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  display: block;
  position: relative;
  margin: 4px;
  &:hover {
    z-index: 100;
    transform: scale(1.01);
    margin: 0px;
    transition-duration: 300ms;
    border: 4px solid rgba(249, 249, 249, 0.8);
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
`;

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    height: 100%;
    width: 5vw;
    z-index: 1;
    opacity: 0;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
  }
  ul li button {
    &:before {
      font-size: 20px;
      color: rgb(150, 150, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;
