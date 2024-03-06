import React, { useState } from "react";
import { createProject } from "../utils/helpers";
import { Wrapper, CreateForm, Submit, Row } from "./CreateProjectStyle.jsx";

//

const initialInput = {
  title: "",
  description: "",
  dueDate: "",
};

// CREATE PROJECT COMPONENT
function CreateProject({ onCreateProject, onSelectProject, onStopCreating }) {
  const [projectInput, setProjectInput] = useState({ ...initialInput });
  // initialInput is an object but you need to destructure it because objects are passed by reference and you don't want to change the initialInput object

  function handleInputChange(e) {
    setProjectInput({ ...projectInput, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProject = createProject(projectInput);
    onCreateProject((prevProjects) => {
      // ❌❌ here after creating a new project i set the selected project to the variable that i created not the actual project in the projects array state
      // so they are 2 different objects in the memory, when you edit the selected project it will not affect the actual project in the projects array state
      const tempProjects = [newProject, ...prevProjects];
      return tempProjects;
    });
    onSelectProject(newProject.id); // select the new project
    onStopCreating(false); // stop creating a new project
    setProjectInput({ ...initialInput }); // reset the input
  }

  function handleReset() {
    onStopCreating(false); // stop creating a new project
    setProjectInput({ ...initialInput }); // reset the input
  }

  return (
    <Wrapper>
      <CreateForm onSubmit={handleSubmit} onReset={handleReset}>
        <Submit>
          <button className="reset" type="reset">
            Cancel
          </button>
          <button className="submit" type="submit">
            Save
          </button>
        </Submit>
        <Row>
          <label htmlFor="">Title</label>
          <input
            className="input"
            name="title"
            type="text"
            placeholder="Title"
            required
            onChange={handleInputChange}
            value={projectInput.title}
          />
        </Row>
        <Row>
          <label htmlFor="">Description</label>
          <textarea
            className="input"
            name="description"
            type="text"
            placeholder="Description"
            required
            onChange={handleInputChange}
            value={projectInput.description}
          />
        </Row>
        <Row>
          <label htmlFor="">Due Date</label>
          <input
            className="input"
            name="dueDate"
            type="date"
            onChange={handleInputChange}
            value={projectInput.dueDate}
          />
        </Row>
      </CreateForm>
    </Wrapper>
  );
}

export default CreateProject;
