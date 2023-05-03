import { Box } from "@mui/material";
import ProWork from "./ProWork";

const Projects = () => {
  return (
    <Box className="project">
      <div className="project-header">
        <h2 variant="h5"> What I've been working on </h2>
        <p>
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications I have dedicated my time to.
        </p>
      </div>
      <ProWork />
    </Box>
  );
};

export default Projects;
