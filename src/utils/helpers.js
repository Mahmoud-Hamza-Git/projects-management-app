import { v4 as uuidv4 } from "uuid";

export const createProject = function (projectInput) {
  return {
    id: uuidv4(),
    ...projectInput,
    tasks: [],
  };
};
