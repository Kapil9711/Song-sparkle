// ********************import section started ************

import styled from "styled-components";

// ********************import section ended ************

// ********************Styling section started ************

const ImageWrapper = styled.img`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 100%;
  &.active {
    animation: 10s linear infinite rotate forwards;
  }
  @media (min-width: 776px) {
    width: 68px;
    height: 68px;
  }

  /* animation for rotating the image */
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// ********************Styling section ended ************

// ********************component section started ************

const ImageComponent = ({ active, image, id, isActive }) => {
  return (
    <ImageWrapper
      className={(active === id && active) || isActive ? "active" : ""}
      src={image}
      alt=""
    />
  );
};

// ********************component section ended ************

export default ImageComponent;
