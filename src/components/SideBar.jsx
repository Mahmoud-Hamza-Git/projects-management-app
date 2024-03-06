import { Wrapper } from "./SideBarStyle.jsx";

function SideBar({ showCreate, projects, onSelectProject, onStopCreating }) {
  function handleSelectProject(project) {
    onSelectProject(project.id);
    onStopCreating(false);
  }
  return (
    <Wrapper className="sidebar-content">
      <h2 className="title">Your Projects</h2>
      <button className="add-btn" onClick={() => showCreate(true)}>
        + Add Project
      </button>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} onClick={() => handleSelectProject(project)}>
            {project.title}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default SideBar;
