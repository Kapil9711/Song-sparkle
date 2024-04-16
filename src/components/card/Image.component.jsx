import styled from "styled-components";

const ImageWrapper = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  &.active {
    animation: 10s linear infinite rotate forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      opacity: 0.9;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      transform: rotate(360deg);
      opacity: 1;
    }
  }
`;

const ImageComponent = ({ active, image, id, isActive }) => {
  return (
    <ImageWrapper
      className={active === id || isActive ? "active" : ""}
      src={image}
      alt=""
    />
  );
};

export default ImageComponent;
