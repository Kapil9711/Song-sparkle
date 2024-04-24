import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
`;
const Input = styled.div`
  position: relative;

  & input {
    border: 0;
    height: 20px;
    border-bottom: 3px solid black;
    background: transparent;
    &:focus {
      outline: none;
    }
  }
  & label {
    position: absolute;
    pointer-events: none;
    left: 0;
    top: -5px;
  }
  & input:focus + label {
    top: -25px;
  }
`;

export { FormWrapper, Input };
