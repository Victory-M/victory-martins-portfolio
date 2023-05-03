import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
// icons
import Linkedin from "../assets/footer-linkedin.svg";
import Github from "../assets/footer-github.svg";
import Twitter from "../assets/footer-twitter.svg";

const Footer = () => {
  return (
    <Box className="footer">
      <Box>
        <Link to="/">
          <Typography
            variant="h6"
            sx={{ lineHeight: "1.1rem", fontWeight: "bold", color: "white" }}
          >
            VIC
            <br />
            TORY.
          </Typography>
        </Link>
      </Box>
      <div className="">
        <a
          href="https://www.linkedin.com/in/victory-martins"
          rel="noreferrer"
          target="_blank"
        >
          <IconButton>
            <img src={Linkedin} alt="Linkedin" className="footer-icon" />
          </IconButton>
        </a>

        <a href="https://github.com/Victory-M" target="_blank" rel="noreferrer">
          <IconButton>
            <img src={Github} alt="Github" />
          </IconButton>
        </a>

        <a
          href="https://twitter.com/victorym__?t=nZkBerG5vlUnJT8jKgAtiQ&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <img src={Twitter} alt="Linkedin" />
          </IconButton>
        </a>
      </div>
    </Box>
  );
};

export default Footer;
