import React, { useRef, useState } from "react";
import TaskItem from "./UI/TaskItem";
import { v4 as uuidv4 } from "uuid";
import { Wrapper, ProjectInfo, TasksInfo } from "./ProjectStyle.jsx";

function Project({ project, onEditProject }) {
  // passing Tasks List as a prop to Project Component so when the project renders during writing tasks the list will not have wasted renders
  const [taskInput, setTaskInput] = useState("");
  const inputRef = useRef();

  function handleAddTask(e) {
    e.preventDefault();
    onEditProject((prevProjects) => {
      const task = { id: uuidv4(), name: taskInput, isDone: false };
      const newProjects = prevProjects.map((p) => {
        if (p.id === project.id) {
          return { ...p, tasks: [task, ...p.tasks] };
        }
        return p;
      });
      return newProjects;
    });
    setTaskInput("");
    inputRef.current.focus();
  }

  function handleClearTask(taskId) {
    onEditProject((prevProjects) => {
      const newProjects = prevProjects.map((p) => {
        if (p.id === project.id) {
          return { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) };
        }
        return p;
      });
      return newProjects;
    });
  }

  function handleChangeTaskStatus(taskId) {
    onEditProject((prevProjects) => {
      const newProjects = prevProjects.map((p) => {
        if (p.id === project.id) {
          return {
            ...p,
            tasks: p.tasks.map((t) => {
              if (t.id === taskId) {
                return { ...t, isDone: !t.isDone };
              }
              return t;
            }),
          };
        }
        return p;
      });
      return newProjects;
    });
  }

  function handleDeleteProject() {
    onEditProject((prevProjects) => {
      return prevProjects.filter((p) => p.id !== project.id);
    });
  }

  return (
    <Wrapper>
      <ProjectInfo>
        <div className="head">
          <h1 className="project-title">{project.title}</h1>
          <button className="delete-btn" onClick={handleDeleteProject}>
            Delete
          </button>
        </div>
        <p className="due-date">{project.dueDate}</p>
        <p className="project-description">{project.description}</p>
      </ProjectInfo>

      <hr style={{ border: "2px solid #ccc" }} />

      <TasksInfo>
        <h2>Tasks</h2>
        <form className="add-task-wrapper" onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Write your task"
            required
            ref={inputRef}
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button>Add Task</button>
        </form>
        {project.tasks?.length > 0 && (
          <ul className="tasks-list">
            {project.tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onClearTask={handleClearTask}
                onChangeStatus={handleChangeTaskStatus}
              />
            ))}
          </ul>
        )}
      </TasksInfo>
    </Wrapper>
  );
}

export default Project;
