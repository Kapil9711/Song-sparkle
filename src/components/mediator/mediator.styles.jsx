import styled from "styled-components";

// ********************styling section started ************

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-block: 100px 140px;
  @media (min-width: 776px) {
    gap: 6px;
  }
  & .favorite-heading {
    color: white;
    text-align: center;
    margin-bottom: 30px;
    font-size: 1.5rem;
  }

  /* this styles r for morebtn currently not in use */
  /* & .down-arow {
    animation: 2s linear infinite moveDown forwards;
  }
  @keyframes moveDown {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0.9);
    }
  } */
`;

// ********************styling section ended ************

export default ListWrapper;
