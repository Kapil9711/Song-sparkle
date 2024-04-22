import styled from "styled-components";
const ImageBox = styled.div`
  background-position: center;
  background-size: contain;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  display: block;
  /* border: 60px solid; */

  position: fixed;
  z-index: -1;
`;

const BackgroundImage = ({ Songs, index, parentActive }) => {
  const image = Songs[index].image;

  return (
    <ImageBox
      className={parentActive ? " gradient-light" : ""}
      style={{
        background: `linear-gradient(
    to right,
    hsl(0 0% 20% /0.7),
    hsl(0 0% 20% /0.7),
    hsl(0 0% 20% /0.7)
  ),
  url(${image})`,
      }}
    ></ImageBox>
  );
};

export default BackgroundImage;
