import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(346, 78%, 50%);
  padding: 30px 10px;
  width: min(90%, 400px);
  margin: 0 auto;
  gap: 40px;
  border: solid white;
  border-radius: 8px;
  & h1 {
    color: hsl(346, 78%, 100%);
  }
  & button {
    padding: 12px 0;
    width: min(90%, 400px);
    border: 0;
    background-color: hsl(346, 78%, 83%);
    transition: background-color 0.2s ease;
    border-radius: 0;
    &:focus {
      outline: none;
    }
    &:active {
      background-color: hsl(346, 78%, 73%);
    }
    &:hover {
      background-color: hsl(346, 78%, 93%);
    }
  }
`;
const Input = styled.div`
  position: relative;
  background-color: transparent;
  padding: 0px 0;
  width: 100%;

  & input {
    border: 0;
    height: 35px;
    font-size: 1.2rem;
    border-bottom: 4px solid hsl(346, 78%, 20%);
    background-color: transparent;
    color: hsl(346, 100%, 100%);
    width: min(100%, 400px);
    &:focus {
      outline: none;
    }
  }

  & label {
    position: absolute;
    pointer-events: none;
    left: 0px;
    top: 5px;
    transition: top 0.3s cubic-bezier(0.77, 0.01, 0.54, 1.69);
    color: hsl(346, 100%, 90%);
  }
  & input:focus + label,
  & input:valid + label {
    top: -30px;
  }
`;

export { FormWrapper, Input };
