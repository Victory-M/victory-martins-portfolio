import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box className="navbar">
      <Link to="/">
        <Typography
          variant="h6"
          sx={{ lineHeight: "1.1rem", fontWeight: "bold" }}
        >
          VIC
          <br />
          TORY.
        </Typography>
      </Link>
    </Box>
  );
};

export default Nav;
