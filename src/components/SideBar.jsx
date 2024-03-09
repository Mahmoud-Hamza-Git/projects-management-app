import { Wrapper } from "./SideBarStyle.jsx";

function SideBar({ showCreate, projects, onSelectProject, setSideOpen }) {
  function handleSelectProject(project) {
    onSelectProject(project.id);
    showCreate(false);
    setSideOpen(false);
  }

  function handleCreateProject() {
    showCreate(true);
    setSideOpen(false);
  }

  return (
    <Wrapper className="sidebar-content">
      <h2 className="title">Your Projects</h2>
      <button className="add-btn" onClick={handleCreateProject}>
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
