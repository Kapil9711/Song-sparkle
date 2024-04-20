import styled from "styled-components";

const CardWrapper = styled.div`
  & .player-wrapper {
    position: fixed;
    z-index: 1000;
    width: 100%;
    bottom: 40px;
    left: auto;
    right: auto;
    background-color: hsl(334 100% 38% /1);
    box-shadow: 0 -5px 10px hsl(334 100% 10% /0.5);
  }

  & .player-wrapper {
    background: transparent;
    padding: "2px";
  }
  @media (min-width: 776px) {
    & .player-wrapper {
      box-shadow: none;
    }
  }
  & .audio-wrapper {
    width: 100%;
  }
`;

export default CardWrapper;
