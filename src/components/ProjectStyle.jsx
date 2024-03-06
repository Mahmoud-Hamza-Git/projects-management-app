import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 800px;
  padding: 4rem 4rem 1.5rem;

  @media (max-width: 850px) {
    max-width: 100%;
    padding: 4rem 1.5rem 1.5rem;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    .project-title {
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: capitalize;
    }

    .delete-btn {
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #eee;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
      transition: background-color 0.2s ease;
      user-select: none;
      &:hover {
        background-color: red;
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
  .due-date {
    font-size: 1.2rem;
    margin-top: -0.8rem;
    color: #777;
  }

  .project-description {
    font-size: 1.1rem;
    color: #333;
  }
`;

export const TasksInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 0;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .add-task-wrapper {
    display: flex;
    gap: 1rem;

    & input {
      width: 100%;
      max-width: 400px;
      padding: 0.5rem 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
      border-bottom: 2px solid transparent;
      &:focus {
        outline: none;
        border-bottom: 2px solid #999;
      }
    }

    & button {
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #eee;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
      transition: background-color 0.2s;
      user-select: none;

      white-space: nowrap;
      &:hover {
        background-color: #00a400;
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }

  .tasks-list {
    padding: 1rem 1rem;
    background-color: #eee;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
