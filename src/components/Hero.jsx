import { IconButton } from "@mui/material";

// images
import Victory from "../assets/victory.png";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/victory-martins"
          rel="noreferrer"
          target="_blank"
        >
          <IconButton>
            <img src={Linkedin} alt="Linkedin" className="icon" />
          </IconButton>
        </a>

        <a href="https://github.com/Victory-M" rel="noreferrer" target="_blank">
          <IconButton>
            <img src={Github} alt="Github" />
          </IconButton>
        </a>

        <a
          href="https://twitter.com/victorym__?t=nZkBerG5vlUnJT8jKgAtiQ&s=09"
          rel="noreferrer"
          target="_blank"
        >
          <IconButton>
            <img src={Twitter} alt="Twitter" />
          </IconButton>
        </a>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-heading">
            <h2> Hi, I'm Victory</h2>
            <h2>
              A Front End <span>Developer.</span>
            </h2>
          </div>

          <p>
            As I've grown as a developer, I've had the opportunity to create
            memorable products that are not only enjoyable but are written in
            code that's maintainable and easy to understand.
          </p>
        </div>
        <div className="hero-img">
          <img src={Victory} alt="Victory" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
