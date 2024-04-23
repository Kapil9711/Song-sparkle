import styled from "styled-components";


const PlayerContainer = styled.div`
  border: 2px solid hsl(334, 100%, 80%);
  max-width: 776px;
  margin: 0 auto;
  color: rgb(218, 218, 218);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  gap: 8px;
  padding: 0 2px;
  @media (min-width: 996px) {
    & {
      gap: 15px;
      border: 3px solid hsl(334, 100%, 80%);
      flex-direction: row;
      justify-content: "center";
      padding: 0 5px;
      border-radius: 0;
    }
  }

  & > * {
    padding: 0.3rem 0;
    color: rgb(202, 202, 202);
  }

  & .title {
    font-size: inherit;
  }
  & .navigation {
    width: 100%;
    margin-bottom: 24px;

    & .navigation_wrapper {
      min-width: 100%;
      background-color: rgba(119, 119, 119, 0.781);
      height: 8px;
      border-radius: 30px;
      cursor: pointer;

      .seek_bar {
        width: 0;
        height: 100%;
        background-color: hsl(334, 100%, 80%);
        border-radius: 30px;
      }
    }
  }
  & .controls {
    font-size: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 0 4px;
    @media (min-width: 776px) {
      & {
        gap: 30px;
      }
    }

    & .btn_action {
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        color: white;
      }
      @media (min-width: 776px) {
        & {
          font-size: 2.4rem;
        }
      }
    }
  }

  & .pp {
    font-size: 3rem;
  }
`;

export default PlayerContainer;