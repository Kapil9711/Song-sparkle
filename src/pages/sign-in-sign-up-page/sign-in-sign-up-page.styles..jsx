import styled from "styled-components";

const SignWrapper = styled.div`
  padding-block: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default SignWrapper;
