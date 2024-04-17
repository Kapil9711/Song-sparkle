import styled from "styled-components";

const ImageWrapper = styled.img`
  display: block;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  &.active {
    animation: 10s linear infinite rotate forwards;
  }
  @media (min-width: 776px) {
    width: 80px;
    height: 80px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ImageComponent = ({ active, image, id, isActive }) => {
  return (
    <ImageWrapper
      className={(active === id && active) || isActive ? "active" : ""}
      src={image}
      alt=""
    />
  );
};

export default ImageComponent;
