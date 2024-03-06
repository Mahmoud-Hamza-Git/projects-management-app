import React from "react";
import styled from "styled-components";

const Task = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  .checkbox {
    width: 22px;
    height: 22px;
  }
  .task-name {
    flex: 1;
    padding-left: 10px;
    &.done {
      text-decoration: line-through;
      color: #777;
    }
  }
  .clear-btn {
    transition: color 100ms;
    font-weight: 700;
    user-select: none;
    &:hover {
      color: red;
    }
  }
`;

function TaskItem({ task, onClearTask, onChangeStatus }) {
  return (
    <Task className="task">
      <input
        type="checkbox"
        className="checkbox"
        checked={task.isDone}
        onChange={() => onChangeStatus(task.id)}
      />
      <span className={`task-name ${task.isDone ? "done" : null}`}>{task.name}</span>
      <button className="clear-btn" onClick={() => onClearTask(task.id)}>
        Clear
      </button>
    </Task>
  );
}

export default TaskItem;
