import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  user-select: none;
  text-align: center;

  img {
    margin-top: -150px;
    width: 150px;
  }

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
  }

  button {
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #362d2d;
    color: #ccc;
    transition: background-color 200ms;
    &:hover {
      background-color: #3a1a1a;
    }
  }
`;

function NoProject({ showCreate }) {
  return (
    <Wrapper>
      <img src="logo.png" alt="note with a pen image" />
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <button onClick={() => showCreate(true)}>Create new project</button>
    </Wrapper>
  );
}

export default NoProject;
