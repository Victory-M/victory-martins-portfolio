import React from "react";
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Box className="skills">
        <h2>My Skills</h2>
        <p>
          Through building projects, I've gained a solid understanding of web
          and frontend development concepts, and have dedicated a lot of my free
          time to apply these concepts to real-world scenarios and applications.
        </p>
        <ul>
          <li>Javascript ES6</li>
          <li>Typescript</li>
          <li>HTML&CSS</li>
          <li>React</li>
          <li>Git</li>
          <li>Material UI</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
        </ul>
      </Box>
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
