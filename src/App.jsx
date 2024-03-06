import { useState } from "react";
import SideBar from "./components/SideBar";
import Page from "./components/UI/PageContainer";
import CreateProject from "./components/CreateProject";
import NoProject from "./components/NoProject";
import Project from "./components/Project";

// const project = {
//   id: "1",
//   title: "Project 1",
//   dueDate: "2021-12-31",
//   description: "This is a project description",
//   tasks: [
//     { id: "1", name: "Task 1", isDone: false },
//     { id: "2", name: "Task 2", isDone: true },
//   ],
// };
function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  let selectedProject = null;
  if (selectedProjectId) {
    selectedProject = projects.find((p) => p.id === selectedProjectId);
  }

  let content = <NoProject showCreate={setIsCreating} />; // default content is no project selected component
  if (isCreating) {
    content = (
      <CreateProject
        onCreateProject={setProjects}
        onSelectProject={setSelectedProjectId}
        onStopCreating={setIsCreating}
        projects={projects}
      />
    ); // if creating a project, show create project component
  } else if (selectedProject) {
    content = <Project project={selectedProject} onEditProject={setProjects} />; // if a project is selected, show project details component
  }

  return (
    <Page
      sidebar={
        <SideBar
          projects={projects}
          showCreate={setIsCreating}
          onSelectProject={setSelectedProjectId}
          onStopCreating={setIsCreating}
        />
      }>
      {content}
      {/* createProject component*/}
      {/* no projects component*/}
      {/* projectDetails component */}
    </Page>
  );
}

export default App;

// future work
// 1. Add dragging and dropping functionality to the tasks
// 2. Add a feature to edit the project and tasks
// 3. make reusable components for buttons, inputs, and other UI elements
// 7. Add a feature to search for a project or task
// 10. Add a feature to add a priority to the tasks (low, medium, high)
// 22. Add a feature to add a tag to the tasks
// 6. Add a feature to filter the tasks based on their status (completed, pending) or priority (low, medium, high)
// 8. Add a feature to sort the projects and tasks based on their properties
// 11. Add a feature to add a reminder to the tasks
// 12. Add a feature to add a comment to the tasks
// 17. Add a feature to add a dependency to the tasks
// 18. Add a feature to add a subtask to the tasks
// 20. Add a feature to add a file to the tasks
// 21. Add a feature to add a link to the tasks
