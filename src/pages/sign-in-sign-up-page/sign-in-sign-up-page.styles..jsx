import styled from "styled-components";

const SignWrapper = styled.div`
  padding-block: 60px;
  display: flex;
  flex-direction: column;

  gap: 40px;
  @media (min-width: 776px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export default SignWrapper;
