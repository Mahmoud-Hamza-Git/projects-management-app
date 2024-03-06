import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateForm = styled.form`
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.15);
`;

export const Submit = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 1rem;
  button {
    width: 80px;
    padding: 8px 0;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 200ms;

    &.submit {
      background-color: #000;
      color: #fff;
      &:hover {
        background-color: #00a400;
      }
      &:active {
        transform: scale(0.95);
      }
    }

    &.reset {
      background-color: #fff;
      color: #000;
      &:hover {
        background-color: #ddd;
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  label {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    user-select: none;
  }
  .input {
    padding: 8px 10px;
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    background-color: #e6e6e6;

    &:focus {
      outline: none;
      border-bottom: 2px solid #999;
    }
  }
`;
